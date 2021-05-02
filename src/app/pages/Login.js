import React from "react";
import Styled from "styled-components";

function Login() {
  return (
    <Container>
      <Content>
        <LogoOne src="/images/cta-logo-one.svg" alt="" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Get Premier Access to Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Eum iure numquam quasi accusamus quo ratione cumque.
        </Description>
        <LogoTwo src="/images/cta-logo-two.png" />
      </Content>
    </Container>
  );
}

export default Login;

const Container = Styled.div`
position: relative;
height: calc(100vh - 70px);
display: flex;
align-items: top;
justify-content: center;

&:before {
  background-position: top;
  background-image: url("/images/login-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  content: "";
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.8;
  z-index: -1;
}

`;

const Content = Styled.div`
max-width: 650px;
padding: 80px 40px;
width: 90%;
display: flex;
flex-direction: column;
margin-top: 100px;
align-items: center

`;
const LogoOne = Styled.img`

`;

const SignUp = Styled.a`
width: 100%;
background-color: #0063e5;
font-weight: bold;
padding: 11px 0;
color: #f9f9f9;
border-radius: 4px;
text-align: center;
font-size: 18px;
cursor: pointer;
transition: all 250ms;
letter-spacing: 1.5px;
margin-top: 8px;
margin-bottom: 12px;

&:hover {
  background: #0483ee;
}

`;

const Description = Styled.p`
font-size: 11px;
letter-spacing: 1.5px;
text-align: center;
line-height: 1.5;
`;

const LogoTwo = Styled.img`
  width: 90%;
`;
