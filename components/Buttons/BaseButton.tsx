import styled from 'styled-components';

export const BaseButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 8px 10px;
  border-radius: 50%;
  font-size: 42px;
  color: #fff;
  width: 70px;
  height: 70px;
  cursor: pointer;

  &:active {
    opacity: 0.8;
  }
`;
