import React from "react";
import Styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt="" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="/images/user.png" />
    </Nav>
  );
}

export default Header;

const Nav = Styled.nav`
height: 70px;
background: #090b13;
display: flex;
padding: 0 36px;
`;

const Logo = Styled.img`
width: 80px
`;

const NavMenu = Styled.div`
display: flex;
flex: 1; 
margin-left: 25px;
align-items: center;

a {
  display: flex;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;

  img {
    height: 20px;
  }

  span {
    font-size: 13px;
    letter-spacing: 1.42px;
    position: relative;

    // line marker
    &:after {
      content: "";
      height: 2px;
      background: white;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -6px;
      opacity: 0;
      transform: scaleX(0);
      transform-origin: left center;
      //fuegooo
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
  }

  &:hover {
    span:after {
      transform: scaleX(1);
      opacity: 1;
    }
  }
}
`;

const UserImg = Styled.img`
margin-top: 10px;
width: 50px;
height: 48px;
border-radius: 50%;
curson: pointer;
display: flex-end;
`;