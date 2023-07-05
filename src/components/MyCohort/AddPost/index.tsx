import { Avatar, FormLabel, FormHelperText } from '@mui/material';
import { RiAttachment2 } from 'react-icons/ri';
import { LoadingButton } from '@mui/lab';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { useMutation } from 'react-query';
import { AxiosResponse } from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { PostDetails, PostWrapper, TextArea, FileAndBtn, File } from './style';
import { postsRoutes } from '../../../services';
import { postSchema } from '../../../utils/validation';

interface FormData {
  postContent: string;
  postImage: string | null;
}

interface ReqError extends AxiosResponse {
  response: {
    data: {
      error: boolean;
      data: {
        message: string;
      };
    };
  };
}

const AddPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(postSchema), mode: 'onBlur' });

  const { isLoading, mutate, error } = useMutation(
    (data: FormData) => postsRoutes.create({
      isPublic: true,
      content: data.postContent,
      image: data.postImage || null, // Include the first file in the request payload
    }),
    {
      onSuccess: () => {
        toast.success('Post created successfully');
      },
      onError: (err: ReqError) => {
        toast.error(err.response.data.data.message);
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
          <FormHelperText error={!!errors.postContent?.message || !!error}>
            {errors.postContent?.message || error?.response.data.data.message}
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
