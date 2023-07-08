import { styled } from 'styled-components';

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 15px 0px rgba(82, 63, 105, 0.05);
  padding: 1.25rem;
  border-radius: 0.3rem;
`;

const PostUserInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 10px;
`;

const UserNameWithPublish = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 10px;
  p:first-child {
    font-size: 0.9rem;
    font-weight: bold;
    color: #48465b;
  }
  p {
    font-size: 0.7rem;
    color: #6c7293;
  }
`;

const PostContentWithImg = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 20, 0.05);
  border-radius: 0.3rem;
  border-left: 2px solid #eaeaea;
  padding: 1rem;
  p {
    font-size: 0.9rem;
    margin-bottom: 10px;
  }
  img {
    width: 100%;
    object-fit: cover;
    margin-bottom: 5px;
    height: 200px;
    border-radius: 0.2rem;
  }
`;

const PostInteraction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid #e7e7e7;
  margin-bottom: 10px;
  &:last-child {
    border-bottom: 1px solid transparent;
    margin-bottom: 0;
  }
  span {
    margin-bottom: 10px;
    font-size: 0.8rem;
    color: #8d8d8d;
  }
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
    color: #8d8d8d;
    font-size: 1.2rem;
  }
`;

export { PostContainer, PostUserInfo, UserNameWithPublish, PostContentWithImg, PostInteraction };
