import { styled } from 'styled-components';

interface IBarTitle{
  barTitle: string
}

const BarTitle = ({ barTitle }:IBarTitle) => (
  <BarTitleDiv>
    <p>{barTitle}</p>
  </BarTitleDiv>
);

const BarTitleDiv = styled.div`
  padding: .6rem;
  border-bottom: 1px solid #d7d7d7;
  border-left: 2px solid #4E64DD;
  p{
    font-weight: 600;
  }
`;

export default BarTitle;
