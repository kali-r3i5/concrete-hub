import styled, { css } from "styled-components";
import { RiBookMarkLine, RiStarLine } from "react-icons/ri";
import { AiOutlineFork } from "react-icons/ai";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 1.6rem;
  border-radius: 0.6rem;
  border: 0;

  h1 {
    color: #ac53f2;
    font-weight: lighter;
  }
`;

export const Topside = styled.div`
  > header {
    display: flex;
    align-items: center;

    > a {
      font-size: 1.4rem;
      font-weight: 600;
      margin-left: 0.8rem;
      text-decoration: none;
    }
  }

  > p {
    font-size: 1.2rem;
    margin: 0.8rem 0 1.6rem;
    letter-spacing: 0.1px;
  }
`;

const iconCSS = css`
  width: 1.6rem;
  height: 1.6rem;
  flex-shrink: 0;
`;

export const RepoIcon = styled(RiBookMarkLine)`
  ${iconCSS}
`;

export const Botside = styled.div`
  > ul {
    display: flex;
    align-items: center;

    > li {
      display: flex;
      align-items: center;

      margin-right: 1.6rem;

      > span {
        font-size: 1.2rem;
        margin-left: 0.5rem;
      }
    }
  }
`;

export const StarIcon = styled(RiStarLine)`
  ${iconCSS}
`;

export const ForkIcon = styled(AiOutlineFork)`
  ${iconCSS}
`;
