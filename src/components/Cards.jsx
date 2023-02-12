import React from "react";
import Load from "../images/load.png";
import {
  AllCard,
  Loading,
  Logo,
  Main,
  Navbar,
  NoUser
} from "../styles/Styled-component";
import Card from "./Card";

const Cards = ({ getData, loading, setGetUser, getUser }) => {
  return (
    <Main>
      <div className="container">
        <Navbar>
          <Logo>CardBoard</Logo>
          <button onClick={() => setGetUser(true)}>Get Users</button>
        </Navbar>
        {getUser ? (
          loading ? (
            <Loading src={Load} alt="" />
          ) : (
            <AllCard>
              <Card getData={getData} />
            </AllCard>
          )
        ) : (
          <NoUser>NO USERS</NoUser>
        )}
      </div>
    </Main>
  );
};

export default Cards;
