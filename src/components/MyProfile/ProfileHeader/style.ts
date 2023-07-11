import { styled } from 'styled-components';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 270px;
  padding: 30px;
  background: url('/public/profile-cover.jpg') center center;
  background-size: cover;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  column-gap: 25px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background-color: #222;
    opacity: 0.6;
  }
  &::after {
    content: '';
    display: block;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 0;
    background-image: linear-gradient(15deg, rgba(37, 37, 55, 0.45) 50%, transparent 100%);
    pointer-events: none;
  }
`;

const UserCardDiv = styled.div`
  width: 170px;
  height: 200px;
  background-color: #fff;
  z-index: 1000;
  border-radius: 0.3rem;
  img {
    width: 100%;
    height: 165px;
    border-top-right-radius: 0.3rem;
    border-top-left-radius: 0.3rem;
    object-fit: cover;
  }
`;

const UserInfoDiv = styled.div`
  z-index: 1000;
  color: #fff;
  letter-spacing: 1.5px;
  h2 {
    margin-bottom: 10px;
  }
`;

export { HeaderWrapper, UserCardDiv, UserInfoDiv };
