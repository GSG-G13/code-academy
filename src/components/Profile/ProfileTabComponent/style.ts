import { styled } from 'styled-components';
import { Link } from '@mui/material';

const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  column-gap: 8px;
  padding: 0 1rem;
  background-color: white;
  gap: 20px;
  font-size: 20px;
`;

const TabContent = styled.div`
  padding: 0rem 2.014rem;
  background-color: #eff2f3;
`;

const Tab2 = styled(Link)`
  margin-top: -50px;

  padding: 27px 13px;
  color: #48465b;
  font-weight: bold;
  border-bottom: 2px solid transparent;
  transition: border 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #5f73e0;
    border-bottom: 2px solid #5f73e0;
  }

  &.active {
    color: #5f73e0;
    border-bottom: 2px solid #5f73e0;
  }
`;
const countSpan = styled.span`
  margin-left: 5px;
  padding: 2px 5px;
  border-radius: 50%;
  background-color: #5f73e0;
  color: white;
  font-size: 12px;
  font-weight: bold;
  line-height: 1;
`;
export { TabsContainer, TabContent, Tab2, countSpan };
