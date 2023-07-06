import { styled } from 'styled-components';
import SinglePost from './SinglePost';

const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

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

const Posts = ({
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
  <PostsWrapper>
    <SinglePost
      alt={alt}
      src={src}
      username={username}
      publishDate={publishDate}
      postContent={postContent}
      postImg={postImg}
      postImgAlt={postImgAlt}
      likesCount={likesCount}
      commentsCount={commentsCount}
    />
  </PostsWrapper>
);

export default Posts;
