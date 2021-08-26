import styled from "styled-components";

export const SearchArea = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  flex-flow: wrap;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const LeftSide = styled.div`
  padding: 0 var(--horizontalPadding);
  flex: 1;

  @media (max-width: 768px) {
    flex: 1;
  }

  @media (max-width: 480px) {
    flex: 1;
    flex-direction: column;
  }
`;

export const RightSide = styled.div`
  flex: 2;
  padding: 0 var(--horizontalPadding);

  @media (min-width: 768px) {
    width: 75%;
  }
`;

export const Span = styled.span`
  display: inline-flex;
  text-align: center;
  font-weight: 500;
  font-size: 45px;
  color: #000;

  @media (max-width: 480px) {
    text-align: center;
  }
`;

export const ItalicSpan = styled.span`
  font-weight: lighter;
  font-style: italic;
`;

export const ErrorContainer = styled.div`
  --verticalPadding: 2.4rem;
  --horizontalPadding: 1.6rem;

  overflow-x: hidden;
  padding: var(--verticalPadding) var(--horizontalPadding);
`;
