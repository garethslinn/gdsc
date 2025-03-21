import styled from 'styled-components';

export const QuoteToolWrapper = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 1024px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.white};
  padding-bottom: 20px;
  
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 18px;

  @media (max-width: 640px) {
    margin-top: 20px;
  };
`;

export const ElementWrapper = styled.div`
  padding-top: 30px;
  width: var(--width-full);
  display: flex;
  justify-content: center;

  @media (max-width: 450px) {
    padding-top: 20px;
  }
`;

export const ChildWrapper = styled.div`
  width: var(--width-full);
  max-width: var(--width-max);
  display: flex;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const LeftColumn = styled.div`
  width: var(--left-column-width, 250px);
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-left: 40px;

  @media (max-width: 1100px) {
    padding-left: 50px;
    width: 100%;
    flex-direction: row;
    justify-content: start;
    margin-bottom: var(--spacing-small);
  }
  @media (max-width: 450px) {
    display: none;
  }};
`;

export const QuoteText = styled.div`
  @media (max-width: 1100px) {
    font-size: var(--font-size-title);
    margin-top: 35px;
    margin-left: var(--spacing-small);
  }
`;

export const Icon = styled.img`
  width: var(--icon-large);
  height: var(--icon-large);

  @media (max-width: 1100px) {
    width: calc(var(--icon-large) / 2);
    height: calc(var(--icon-large) / 2);
  }
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  
  @media (max-width: 1100px) {
    align-items: stretch;
  }
  
  @media (max-width: 450px) {
    padding: 0 20px;
  };

`;

export const Title = styled.h3`
  margin: 10px 0 50px 0;
  font-size: 30px;

  @media (max-width: 1100px) {
    font-size: calc(var(--font-size-title));
  }

  @media (max-width: 450px) {
    text-align: center;
    margin: 10px 0 10px 0;
  };
`;

export const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin: var(--spacing-small) 0;
`;

export const Paragraph = styled.p`
  margin: var(--spacing-small) 0;
  font-size: 20px;

  @media (max-width: 1100px) {
    font-size: calc(var(--font-size-medium) / 2);
    text-align: start;
  }
`;

export const Line = styled.div`
  flex-grow: 1;
  height: 1px;
  background: ${({ theme }) => theme.colors.containerBackground};
  margin: 0 var(--spacing-small);

  @media (max-width: 1100px) {
    width: 100%;
    margin: var(--spacing-small) 0;
  }
`;


