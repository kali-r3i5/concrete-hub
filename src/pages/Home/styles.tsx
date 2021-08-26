import styled from "styled-components";

export const Span = styled.span`
  text-align: center;
  font-weight: 500;
  font-family: "Monaco";
  font-size: 60px;
  justify-content: center;
  color: #000;
`;

export const ItalicSpan = styled.span`
  font-family: "Raleway";
  font-weight: 200;
  font-style: italic;
`;

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 20%;
  justify-content: center;
  align-items: center;
`;

interface FormProps {
  hasError: boolean;
}

export const Form = styled.form<FormProps>`
  margin-top: 10px;
  max-width: 700px;
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
  }

  label {
    display: flex;
    flex: 3;
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
    flex: 0.5;
    border: 0;
    color: #fff;
    width: 100%;
    height: 70px;
    font-weight: bold;
    background-color: #ac53f2;
    border-radius: 2px;
    transition: background-color 0.2s;

    @media (max-width: 480px) {
      flex: none;
      padding: 5px;
      font-size: 90%;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    &:hover {
      background: #ac53f2;
    }
  }
`;
