import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import {
  ErrorContainer,
  ItalicSpan,
  LeftSide,
  RightSide,
  SearchArea,
  Span,
} from "./styles";

const Error: React.FC = () => {
  return (
    <ErrorContainer>
      <SearchArea>
        <LeftSide>
          <Link
            to={"/"}
            style={{
              textDecoration: "none",
            }}
          >
            <Span>
              Github
              <div style={{ paddingRight: 10 }} />
              <ItalicSpan>Search</ItalicSpan>
            </Span>
          </Link>
        </LeftSide>
        <RightSide>
          <Header />
        </RightSide>
      </SearchArea>
      {/* <Error /> */}
    </ErrorContainer>
  );
};

export default Error;
