import React from "react";
import {
  SingleCard
} from "../styles/Styled-component";

const Card = ({ getData }) => {
  return (
    <>
      {getData.map((post) => (
        <SingleCard key={post.id}>
          <img src={post.avatar} alt="" />
          <h2>{`${post.first_name} ${post.last_name}`}</h2>
          <p>{post.email}</p>
          <button>Follow</button>
        </SingleCard>
      ))}
    </>
  );
};

export default Card;
