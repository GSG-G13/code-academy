import React from 'react';
import { styled } from 'styled-components';

interface IProps {
  children: React.ReactNode;
}

const PageTitle = ({ children }: IProps) => <Title>{children}</Title>;

const Title = styled.h1`
  font-weight: 600;
  margin-bottom: 30px;
  color: rgb(72, 70, 91);
`;

export default PageTitle;
