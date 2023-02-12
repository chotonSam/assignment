import styled from "styled-components";

export const Global = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Lobster+Two:wght@400;700&display=swap");

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: Montserrat, sans-serif;
  }
`;

export const Main = styled.div`
  max-width: 1000px;
  margin: auto;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;
  margin-bottom: 60px;
  width: 1000px;
  button {
    padding: 10px 15px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    border-radius: 15px;
    background: linear-gradient(35deg, rgb(73, 73, 73), rgb(49, 49, 49));
    color: white;
    font-weight: 500;
    &:focus {
      background: linear-gradient(
        to right,
        rgb(242, 113, 33),
        rgb(233, 64, 87)
      );
    }
  }
`;

export const Logo = styled.div`
  font-family: "Lobster Two", cursive;
  font-size: 24px;
  font-weight: bold;
  color: #171f35;
`;

export const AllCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 50px;
  justify-content: center;
`;

export const Loading = styled.img`
  margin-top: 200px;
  width: 50px;
`;

export const NoUser = styled.h1`
  margin-top: 200px;
`;

export const SingleCard = styled.div`
  background-color: white;
  padding: 40px 60px;
  border-radius: 5px;
  box-shadow: 2px 2px 15px 1px rgb(234 234 234);
  img {
    border-radius: 50%;
    margin-bottom: 15px;
    width: 100px;
    height: 100px;
  }
  p {
    font-size: 18px;
    color: #646d87;
    margin-top: 5px;
  }
  h2 {
    font-size: 20px;
    color: #171f35;
  }
  button {
    margin-top: 30px;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    border-radius: 50px;
    border: 1px solid #646d875b;
    background-color: white;
    color: #424c6d;
    font-weight: 500;
    &:hover {
      background-color: #10182f;
      color: white;
    }
  }
`;
