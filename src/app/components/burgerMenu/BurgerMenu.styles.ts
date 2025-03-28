import styled from "styled-components";

interface LineProps {
  isOpen: boolean;
}

interface WrapperProps {
  isOpen: boolean;
}

export const BurgerMenuContainer = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors.corporate};
  border-radius: 10px;
  cursor: pointer;
  z-index: 4000;
  display: none;
  padding: 5px 10px;
  
  @media (max-width: 1150px) {
    display: flex;
    flex-direction: row;
  }
`;

export const BurgerMenuWrapper = styled.div<WrapperProps>`
  display: none;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.spacing.small};
  
  @media (max-width: 1150px) {
    display: flex;
  }
`;

export const Line = styled.div<LineProps>`
  width: 25px;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 3px;
  transition: 0.4s;

  ${({ isOpen }) =>
    isOpen &&
    `
    &:nth-child(1) {
      transform: rotate(45deg) translate(10px, 5px);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
      position: relative;
      left: 2px;
    }
  `}
`;

export const MenuText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.white};
`;
