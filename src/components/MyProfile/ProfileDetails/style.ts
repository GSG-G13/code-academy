import { styled } from 'styled-components';

const ProfileDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 15px 0px rgba(82, 63, 105, 0.05);
  padding: 1.25rem;
  border-radius: 0.3rem;
`;

const DetailsDiv = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 20, 0.05);
  transition: 0.3s;
  column-gap: 50px;
  p:first-child {
    font-weight: 600;
    width: 200px;
  }
  &:hover {
    background-color: rgba(0, 0, 20, 0.05);
  }
  &:last-child{
    border-bottom: none;
  }
`;

export { ProfileDetailsContainer, DetailsDiv };
