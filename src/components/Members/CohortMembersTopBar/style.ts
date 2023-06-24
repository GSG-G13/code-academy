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
`;

const SelectElement = styled.select`
  padding: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: relative;
  text-align: center;
  &::after {
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
    content: 'hi';
  }
`;

export { MembersCountBox, SelectElement };
