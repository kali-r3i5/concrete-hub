import styled from "styled-components";

export const Container = styled.div``;

export const Flex = styled.div`
  display: grid;
  align-items: center;

  > div {
    > h1 {
      text-align: left;
      font-size: 2.6rem;
      font-weight: 600;
      line-height: 1.25;
      color: var(--gray-dark);
    }

    > h2 {
      font-size: 2rem;
      font-weight: 300;
      color: var(--username);
    }
  }

  @media (min-width: 768px) {
    flex-direction: column;
    margin-top: 5rem;

    > div {
      margin-left: 0;
      margin-top: 1.6rem;
    }
  }
`;

export const Avatar = styled.img`
  width: 16%;
  min-width: 100%;

  @media (min-width: 768px) {
    width: 100%;
    flex: 1;
  }

  @media (max-width: 430px) {
    width: 100%;
    flex: 2;
  }
`;

export const Row = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  margin: 2rem 0;

  > li {
    display: flex;
    align-items: center;

    > span {
      font-size: 1.4rem;
      color: var(--gray);
    }

    * {
      margin-right: 0.5rem;
    }
  }
`;

export const Column = styled.ul`
  li {
    margin-top: 2rem;
    display: flex;
    align-items: center;

    font-size: 1.4rem;
  }

  li + li {
    margin-top: 1rem;
  }

  span {
    margin-left: 0.5rem;
    overflow: hidden;
  }
`;

export const Icon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 1rem;
`;
