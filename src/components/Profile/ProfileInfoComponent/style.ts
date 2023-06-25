import styled from 'styled-components';

const Card = styled.form`
  background: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  tbody {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
    width: 100%;
  }
`;

const SaveButton = styled.button`
  margin-top: 20px;
`;
export { Card, SaveButton };
