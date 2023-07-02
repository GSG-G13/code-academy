import { styled } from 'styled-components';

const MembersCountBox = styled.span`
  width: 25px;
  height: 25px;
  background-color: inherit;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 0 3px #ffffff;
  position: absolute;
  right: -15px;
  top: -15px;
  font-size: 0.7em;
  z-index: 1;
`;

const SearchBtn = styled.button`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  transition: 0.3s;
  &:hover {
    border-color: #4E64DD;
  }
`;

export { MembersCountBox, SearchBtn };
