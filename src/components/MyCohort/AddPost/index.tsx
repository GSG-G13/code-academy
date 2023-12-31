import React, { useState } from 'react';
import axios from 'axios';
import { Avatar, FormLabel, FormHelperText } from '@mui/material';
import { RiAttachment2 } from 'react-icons/ri';
import { LoadingButton } from '@mui/lab';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { useMutation } from 'react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import { PostDetails, PostWrapper, TextArea, FileAndBtn, File } from './style';
import { postsRoutes, uploadRoutes } from '../../../services';
import { postSchema } from '../../../utils/validation';

interface FormData {
  postContent: string;
  postImage: File | null;
}

interface ReqError {
  response: {
    data: {
      error: boolean;
      data: {
        message: string;
      };
    };
  };
}

interface S3ImgUploadUrlResponse {
    data: {
      url: string;
    };
}

const AddPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(postSchema), mode: 'onBlur' });

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [checkImage, setCheckImage] = useState(false);
  const isValidFileType = (fileType: string) => {
    const validFileTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    return validFileTypes.includes(fileType);
  };
  const handleImageSelect = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files != null && isValidFileType(evt.target.files[0].type)) {
      setSelectedImage(evt.target.files[0]);
    } else {
      toast.error('Invalid image type, please choose another image');
      setCheckImage(true);
    }
  };

  const { isLoading, mutate } = useMutation(
    async (data: FormData) => {
      try {
        if (!checkImage) {
          if (selectedImage) {
            const s3ImgUploadUrlResponse = await uploadRoutes.getImageUrl<S3ImgUploadUrlResponse>();
            const s3ImgUploadUrl = s3ImgUploadUrlResponse.data;

            await axios.put(s3ImgUploadUrl.data.url, selectedImage);
            const imageUrl = s3ImgUploadUrl.data.url.split('?')[0];

            await postsRoutes.create({
              isPublic: true,
              content: data.postContent,
              image: imageUrl,
            });
          } else {
            await postsRoutes.create({
              isPublic: true,
              content: data.postContent,
              image: null,
            });
          }
          setSelectedImage(null);
        } else {
          toast.error('Post not created');
          setCheckImage(false);
        }
      } catch (err: unknown) {
        const errorMessage = (err as ReqError)?.response?.data?.data?.message || 'Failed to create post';
        toast.error(errorMessage);
      }
    },
    {
      onSuccess: () => {
        toast.success('Post created successfully');
        reset();
      },
      onError: (err: ReqError) => {
        const errorMessage = err.response.data.data.message;
        toast.error(errorMessage);
      },
    },
  );

  const handlePost = (data: FormData) => {
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(handlePost)}>
      <PostWrapper>
        <Avatar alt="Batra" src="Batra" sx={{ width: 45, height: 45 }} />
        <PostDetails>
          <TextArea
            placeholder="What's on your mind"
            id="postContent"
            {...register('postContent')}
          />
          <FormHelperText error={!!errors.postContent?.message}>
            {errors.postContent?.message}
          </FormHelperText>
          <FileAndBtn>
            <File>
              <FormLabel htmlFor="postImage">
                <RiAttachment2 />
              </FormLabel>
              <input
                type="file"
                name="postImage"
                id="postImage"
                hidden
                accept=".jpg,.jpeg,.png,.gif"
                onChange={handleImageSelect}
              />
            </File>
            <LoadingButton loading={isLoading} variant="contained" size="small" type="submit">
              Post
            </LoadingButton>
          </FileAndBtn>
        </PostDetails>
      </PostWrapper>
    </form>
  );
};

export default AddPost;
