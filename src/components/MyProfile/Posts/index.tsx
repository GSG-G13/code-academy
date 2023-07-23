import { styled } from 'styled-components';
import SinglePost from './SinglePost';

const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

interface IPost {
  id: number;
  alt: string;
  src: string;
  username: string;
  publishDate: string;
  isLiked:boolean;
  postContent: string;
  postImg: string;
  postImgAlt: string;
  likesCount: string;
  commentsCount: string;
}

const Posts = ({
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
}: IPost) => (
  <PostsWrapper>
    <SinglePost
      id={id}
      alt={alt}
      src={src}
      username={username}
      publishDate={publishDate}
      postContent={postContent}
      postImg={postImg}
      postImgAlt={postImgAlt}
      likesCount={likesCount}
      commentsCount={commentsCount}
      isLiked={isLiked}
    />
  </PostsWrapper>
);

export default Posts;
