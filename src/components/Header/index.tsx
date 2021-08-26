import React, { useState } from "react";
import { Container, Form } from "./styles";
import searchIcon from "../../assets/search.svg";
import { useNavigate } from "react-router-dom";

type handleSubmitType = (event: React.FormEvent) => void;

const Header: React.FC = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit: handleSubmitType = (event) => {
    event.preventDefault();

    navigate(`/${search.toLowerCase().trim()}`);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
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
    </Container>
  );
};

export default Header;
