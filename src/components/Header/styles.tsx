import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  text-align: center;
  background-color: var(--header);

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 1.1rem 1.6rem;
  }
  @media (max-width: 700px) {
    padding: 1.1rem 1.6rem;
  }
`;

export const Span = styled.span`
  flex: 2;
  font-weight: 500;
  font-family: "Monaco";
  font-size: 60px;
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

export const Form = styled.form`
  flex: 1;
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 260px;
  align-items: center;
  position: relative;
  @media (max-width: 480px) {
    flex-direction: column;
  }

  label {
    display: flex;
    flex: 5;
    flex-direction: column;
    width: 100%;

    input {
      border: 0;
      max-width: 650px;
      width: 100%;
      height: 70px;
      color: #3a3a3a;
      padding: 0 24px;
      border: 2px solid #e5e5e5;

      border-radius: 2px;

      &::placeholder {
        @media (max-width: 480px) {
          font-size: 80%;
        }
      }

      @media (max-width: 480px) {
        flex: none;
        margin-bottom: 4px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    }
  }

  button {
    flex: 1;
    border: 0;
    color: #fff;
    width: 100%;
    height: 70px;
    font-weight: bold;
    background-color: #ac53f2;
    border-radius: 2px;
    transition: background-color 0.2s;

    @media (max-width: 700px) {
      flex: 2;
      padding: 5px;
      font-size: 90%;
    }

    &:hover {
      background: #ac53f2;
    }
  }
`;
