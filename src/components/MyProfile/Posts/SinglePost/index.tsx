import { Avatar } from '@mui/material';

import { RiBookmarkLine, RiChat1Line, RiHeart3Line, RiShareLine } from 'react-icons/ri';
import {
  PostContainer,
  PostContentWithImg,
  PostInteraction,
  PostUserInfo,
  UserNameWithPublish,
} from './style';

interface IPost {
  alt: string;
  src: string;
  username: string;
  publishDate: string;
  postContent: string;
  postImg: string;
  postImgAlt: string;
  likesCount: string;
  commentsCount: string;
}

const SinglePost = ({
  alt,
  src,
  username,
  publishDate,
  postContent,
  postImg,
  postImgAlt,
  likesCount,
  commentsCount,
}: IPost) => (
  <PostContainer>
    <PostUserInfo>
      <Avatar alt={alt} src={src} sx={{ width: 50, height: 50 }} />
      <UserNameWithPublish>
        <p>{username}</p>
        <p>{publishDate}</p>
      </UserNameWithPublish>
    </PostUserInfo>
    <PostContentWithImg>
      <p>{postContent}</p>
      <img src={postImg} alt={postImgAlt} />
      <PostInteraction>
        <span>
          {likesCount}
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
          <button type="button">
            <RiHeart3Line />
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

export default SinglePost;
