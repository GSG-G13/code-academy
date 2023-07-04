import { styled } from 'styled-components';

const PostWrapper = styled.div`
  width: 100%;
  display: flex;
  column-gap: 10px;
  background-color: #fff;
  padding: 1rem;
  border-radius: 4px;
`;

const PostDetails = styled.div`
  width: 100%;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  border-radius: 0.3rem;
  resize: none;
  background-color: rgba(0, 0, 20, 0.05);
  outline: none;
  border: none;
  padding: 1rem;
  font-size: 14px;
  margin-bottom: 5px;
  &::placeholder {
    font-size: 14px;
    color: #848484;
  }
`;

const FileAndBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const File = styled.div`
  display: flex;
  label {
    cursor: pointer;
    width: 35px;
    height: 35px;
    border-radius: 4px;
    background-color: #d8e1f3;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #4e64dd;
    transition: 0.3s;
    &:hover {
      background-color: #4e64dd;
      color: #fff;
    }
  }
`;

export { PostWrapper, PostDetails, TextArea, FileAndBtn, File };
