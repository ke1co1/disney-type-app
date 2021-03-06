import React, { useEffect } from "react";
import { auth, provider } from "../firebase";
import Styled from "styled-components";
import { useHistory } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut,
} from "../../features/user/userSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        history.push("/");
      }
    });
  }, []);

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      // console.log(result);
      let user = result.user;
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
      history.push("/");
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      history.push("/login");
    });
  };

  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      {!userName ? (
        <LoginContainer>
          <Login onClick={signIn}>Login</Login>
        </LoginContainer>
      ) : (
        <>
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
          <UserImg onClick={signOut} src="/images/user.png" />
        </>
      )}
    </Nav>
  );
}

export default Header;

const Nav = Styled.nav`
height: 70px;
background: #090b13;
display: flex;
padding: 0 36px;
overflow-x: hidden;
`;

const Logo = Styled.img`
width: 80px;
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
margin-top: 11px;
width: 48px;
height: 48px;
border-radius: 50%;
cursor: pointer;
`;

const Login = Styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease 0s;
  cursor: pointer;
  margin-bottom: 11px;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const LoginContainer = Styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;
