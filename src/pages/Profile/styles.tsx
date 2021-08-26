import styled from "styled-components";
import { RiBookMarkLine } from "react-icons/ri";

export const Span = styled.span`
  text-align: center;
  font-weight: 500;
  font-family: "Monaco";
  font-size: 42px;
  color: #000;

  @media (max-width: 480px) {
    text-align: center;
  }
`;

export const ItalicSpan = styled.span`
  font-family: "Raleway";
  font-weight: 200;
  font-style: italic;
`;

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

export const Container = styled.div`
  --verticalPadding: 2.4rem;
  --horizontalPadding: 1.6rem;

  overflow-x: hidden;
  padding: var(--verticalPadding) var(--horizontalPadding);
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
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

export const Repos = styled.div`
  > h2 {
    font-size: 1.6rem;
    font-weight: normal;
  }

  > div {
    display: column;
    grid-gap: 1.6rem;
    grid-template-columns: 1fr;

    margin-top: 3rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: minmax(min-content, max-content);
    }
  }
`;

export const RepoIcon = styled(RiBookMarkLine)`
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 0.4rem;
`;
