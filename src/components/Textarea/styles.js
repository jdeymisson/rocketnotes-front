import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 150px;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900 };
  color: ${({ theme }) => theme.COLORS.WHITE };
  
  resize: none;
  border: none;
  
  margin-bottom: 8px;
  padding: 16px;
  border-radius: 10px;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300 };
  }
`;