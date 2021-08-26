import { useState } from "react";
import { ItalicSpan, Span, Form, Wrapper } from "./styles";
import searchIcon from "../../assets/search.svg";
import { useNavigate } from "react-router-dom";

type handleSubmitType = (event: React.FormEvent) => void;

export function Home() {
  const [inputError] = useState("");

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit: handleSubmitType = (event) => {
    event.preventDefault();

    navigate(`/${search.toLowerCase().trim()}`);
  };

  return (
    <Wrapper>
      <Span>
        Github
        <ItalicSpan> Search</ItalicSpan>
      </Span>

      <Form hasError={!!inputError} onSubmit={handleSubmit}>
        <label htmlFor="user">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
            placeholder="Enter Username or Repo..."
          />
        </label>

        <button type="submit">
          <img src={searchIcon} alt="search" />
        </button>
      </Form>
    </Wrapper>
  );
}
