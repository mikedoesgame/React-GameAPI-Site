import React, { useState } from "react";

//Import Redux
import { useDispatch } from "react-redux";
import { fetchSearch } from "../actions/gamesAction";

//Import Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { navAnim } from "../animations";

//Import Image
import logo from "../img/logo.svg";

const Nav = () => {
  //Searchbar
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return (
    <StyledNav variants={navAnim} initial="hidden" animate="show">
      <Logo onClick={clearSearched}>
        <img src={logo} alt="Logo" />
        <h1>Ignite Games</h1>
      </Logo>
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    border: none;
    border: 0.15rem solid black;
    margin-top: 1rem;
    padding: 0.5rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    font-size: 1.5rem;
  }
  button {
    border: none;
    margin: 0rem 1rem;
    padding: 0.65rem 2rem;
    font-size: 1.5rem;
    background: #ff7676;
    color: white;
    cursor: pointer;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;

export default Nav;
