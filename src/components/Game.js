import React from "react";
import { Link } from "react-router-dom";

//Import Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

//Import Util
import { smallImage } from "../util";

//Import Styling
import styled from "styled-components";

//Import Animation
import { motion } from "framer-motion";
import { popup } from "../animations";

const Game = ({ name, released, id, image }) => {
  const stringPathID = id.toString();
  //Load Game Details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame
      layoutId={stringPathID}
      onClick={loadDetailHandler}
      variants={popup}
      initial="hidden"
      animate="show"
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathID}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${stringPathID}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.75);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
