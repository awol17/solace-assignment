import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const SearchArea = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: 600px;
  width: 100%;
  font-family: 'Lato', sans-serif;
`;

export const SearchInput = styled.input`
  flex: 1;
  font-size: 20px;
  line-height: 1;
  color: rgba(0, 0, 0, 0.87);
  padding: 10px 14px;
  border: 1px solid #9a9a9a;
  border-radius: 8px;
  box-sizing: border-box;
`;

export const ResetButton = styled.button`
  font-weight: 600;
  padding: 10px 24px;
  border-radius: 8px;
  background-color: #d7a13b;
  color: black;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-size: 14px;
  font-family: 'Lato', sans-serif;

  &:hover {
    opacity: 0.85;
  }
`;