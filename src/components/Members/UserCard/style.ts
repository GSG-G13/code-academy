import { styled } from 'styled-components';

const UserCardWrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 20px 0 0 0;
    border-radius: 0.3rem;
    box-shadow: 0 0 15px 0 rgba(82, 63, 105, .05);
    transition: 0.3s;
    border-bottom: 3px solid transparent;
    &:hover{
        transform: translateY(-5px);
        border-bottom-color: #0abb87;
    }
`;

const UserNameLink = styled.h2`
    margin-top: 20px;
    font-size: 1em;
    a{
        color: #48465b;
        text-decoration: none;
    }
`;

const UserJobTitle = styled.div`
  display:flex;
  margin-top: 10px;
  color: #6c7293;
  font-size: .85rem;
  p{
    margin-left: 10px;
    position: relative;
  }
  p::before {
    position: absolute;
    content: '';
    left: -7px;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.5;
    display: inline-block;
    vertical-align: middle;
    font-size: 0.7em;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: #6c7293;
  }
`;

const UserSocialLinks = styled.div`
  width: 100%;
  display:flex;
  justify-content: space-between;
  margin-top: 20px;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 20, 0.05);
  height: 40px
`;

const UserSocialLink = styled.a`
  width: 33.333%;
  display:flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  &:hover{
    background-color: rgba(0, 0, 20, 0.05);
  }
`;

export {
  UserCardWrapper, UserNameLink, UserJobTitle, UserSocialLinks, UserSocialLink,
};
