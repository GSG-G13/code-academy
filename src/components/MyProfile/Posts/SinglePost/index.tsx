import React from 'react';
import { Avatar } from '@mui/material';

import { RiBookmarkLine, RiChat1Line, RiHeart3Line, RiShareLine } from 'react-icons/ri';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import {
  PostContainer,
  PostContentWithImg,
  PostInteraction,
  PostUserInfo,
  UserNameWithPublish,
} from './style';
import { likesRoutes } from '../../../../services';
import { ReqError } from '../../../../utils';

interface IPost {
  id: number;
  alt: string;
  src: string;
  username: string;
  publishDate: string;
  postContent: string;
  postImg: string;
  postImgAlt: string;
  likesCount: string;
  commentsCount: string;
  isLiked: boolean;
}

const SinglePost = ({
  id,
  alt,
  src,
  username,
  publishDate,
  postContent,
  postImg,
  postImgAlt,
  likesCount,
  commentsCount,
  isLiked,
}: IPost) => {
  const [isLike, setIsLike] = React.useState(isLiked);
  const [likes, setLikes] = React.useState(likesCount);
  const { mutate: like } = useMutation((postId: number) => likesRoutes.send(postId), {
    onSuccess: (data) => {
      if (data.status === 200) {
        setLikes((prev) => `${Number(prev) - 1}`);
        setIsLike(false);
      } else if (data.status === 201) {
        setLikes((prev) => `${Number(prev) + 1}`);
        setIsLike(true);
      }
    },
    onError: (err: ReqError) => {
      toast.error(err.response.data.data.message);
    },
  });

  const handleLike = (postId: number) => {
    like(postId);
  };
  return (
    <PostContainer>
      <PostUserInfo>
        <Avatar alt={alt} src={src} sx={{ width: 50, height: 50 }} />
        <UserNameWithPublish>
          <p>{username}</p>
          <p>{publishDate}</p>
        </UserNameWithPublish>
      </PostUserInfo>
      <PostContentWithImg>
        <p>{postContent.length > 100 ? postContent : <strong>{postContent}</strong>}</p>
        {postImg ? <img src={postImg} alt={postImgAlt} /> : null}
        <PostInteraction>
          <span>
            {likes}
            {' '}
            <span>Likes</span>
          </span>
          <span>
            {commentsCount}
            {' '}
            <span>Comments</span>
          </span>
        </PostInteraction>
        <PostInteraction>
          <div>
            <button type="button" onClick={() => handleLike(id)}>
              <RiHeart3Line style={{ color: isLike ? 'red' : '#8d8d8d' }} />
            </button>
            <button type="button">
              <RiChat1Line />
            </button>
            <button type="button">
              <RiShareLine />
            </button>
          </div>
          <button type="button">
            <RiBookmarkLine />
          </button>
        </PostInteraction>
      </PostContentWithImg>
    </PostContainer>
  );
};
export default SinglePost;
