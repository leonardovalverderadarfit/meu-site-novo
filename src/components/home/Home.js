import React from "react";
import styled from "styled-components";
import logo from "../../static/img/logo.png";
import logoscroll from "../../static/img/logoscroll.png";
import { ReactComponent as Arrow } from "../../static/img/arrow.svg";

const Container = styled.div`
  min-height: 100vh;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Bg = styled.div`
  width: 110%;
  height: 110%;
  left: 0;
  top: 0;
  position: relative;
  background: url("/background.jpg") no-repeat left center / cover;
  z-index: 1;
`;

const TheContent = styled.div`
  z-index: 2;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const ContentContainer = styled.div`
  position: relative;
  width: 1200px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 250px;
  max-width: 300px;
  display: block;
`;

const LogoScroll = styled.img`
  width: 100px;
  max-width: 300px;
  display: block;
`;

const NavBar = styled.nav`
  display: flex;
`;

const Options = styled.ul`
  list-style: none;
  display: flex;
  width: 800px;
  height: 167px;
  align-items: center;
  justify-content: space-between;
`;

const OptionsScroll = styled.ul`
  list-style: none;
  display: flex;
  width: 800px;
  height: 70px;
  align-items: center;
  justify-content: space-between;
`;

const Menu = styled.li`
  display: inline-flex;
`;

const TheLink = styled.a`
  font-size: 36px;
  color: #dc0000;
  font-family: "Raleway", Arial, Helvetica, sans-serif;
  text-decoration: none;
  border: 2px solid transparent;
  padding: 15px;
  position: relative;
  vertical-align: middle;
  transition: color 0.5s ease;
  &::before,
  &::after {
    box-sizing: inherit;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
  }
  &::before,
  &::after {
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform-origin: center; // Ensure scaling is done from the center (expands outwards)
  }
  &:hover {
    color: #fff;
  }
  &::before {
    border-top: 2px solid #dc0000;
    border-bottom: 2px solid #dc0000;
    transform: scale3d(0, 1, 1); // Shrink only width
  }
  &::after {
    border-left: 2px solid #dc0000;
    border-right: 2px solid #dc0000;
    transform: scale3d(1, 0, 1); // Shrink only height
  }
  &:hover::before,
  &:hover::after {
    transform: scale3d(1, 1, 1); // Show full-size
    transition: transform 0.5s;
  }
`;

const TheLinkScroll = styled.a`
  font-size: 18px;
  color: #dc0000;
  font-family: "Raleway", Arial, Helvetica, sans-serif;
  text-decoration: none;
  border: 2px solid transparent;
  padding: 10px;
  position: relative;
  vertical-align: middle;
  transition: color 0.5s ease;
  &::before,
  &::after {
    box-sizing: inherit;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
  }
  &::before,
  &::after {
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform-origin: center; // Ensure scaling is done from the center (expands outwards)
  }
  &:hover {
    color: #fff;
  }
  &::before {
    border-top: 2px solid #dc0000;
    border-bottom: 2px solid #dc0000;
    transform: scale3d(0, 1, 1); // Shrink only width
  }
  &::after {
    border-left: 2px solid #dc0000;
    border-right: 2px solid #dc0000;
    transform: scale3d(1, 0, 1); // Shrink only height
  }
  &:hover::before,
  &:hover::after {
    transform: scale3d(1, 1, 1); // Show full-size
    transition: transform 0.5s;
  }
`;

const BigRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const QuoteContainer = styled.div`
  display: flex;
  margin-top: 50px;
`;

const FirstQuote = styled.span`
  font-family: "Crimson Text", Arial, Helvetica, serif;
  color: #dc0000;
  font-size: 170px;
  line-height: 0.8;
`;

const BigQuote = styled.span`
  font-family: "Crimson Text", Arial, Helvetica, serif;
  color: #dc0000;
  font-weight: 400;
  font-size: 48px;
`;

const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  color: #dc0000;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.3;
  font-family: "Raleway", Arial, Helvetica, sans-serif;
  margin-top: 25vh;
  cursor: pointer;
  span {
    margin-top: 20px;
  }
  svg path {
    fill: #dc0000;
  }
  svg #path372 {
    animation: fade1 5s linear 2s infinite alternate;
  }
  svg #path382 {
    animation: fade2 5s linear 2s infinite alternate;
  }
  svg #path370 {
    animation: fade3 5s linear 2s infinite alternate;
  }
  svg #path366 {
    animation: fade4 5s linear 2s infinite alternate;
  }
  svg #path368 {
    animation: fade5 5s linear 2s infinite alternate;
  }

  @keyframes fade1 {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade2 {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade3 {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade4 {
    0% {
      opacity: 0;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade5 {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

const ScrollMenuContent = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  height: 70px;
  background: #eee;
  width: 100%;
`;

const ScrollMenu = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  z-index: 200;
`;

function handleMove(event) {
  const windowWidth = window.innerWidth / 5;
  const windowHeight = window.innerHeight / 5;
  const mouseX = event.clientX / windowWidth;
  const mouseY = event.clientY / windowHeight;
  const fx = document.getElementsByClassName("background-image");
  fx[0].style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
}

function handleArrowClick() {
  const scroll = document.getElementsByClassName("testing");
  scroll[0].scrollIntoView({ behavior: "smooth" });
}

const Home = () => {
  return (
    <>
      <ScrollMenuContent>
        <ScrollMenu>
          <div>
            <LogoScroll src={logoscroll} />
          </div>
          <div>
            <NavBar>
              <OptionsScroll>
                <Menu>
                  <TheLinkScroll href="#">Início</TheLinkScroll>
                </Menu>
                <Menu>
                  <TheLinkScroll href="#">Sobre</TheLinkScroll>
                </Menu>
                <Menu>
                  <TheLinkScroll href="#">Portfólio</TheLinkScroll>
                </Menu>
                <Menu>
                  <TheLinkScroll href="#">Contato</TheLinkScroll>
                </Menu>
              </OptionsScroll>
            </NavBar>
          </div>
        </ScrollMenu>
      </ScrollMenuContent>
      <Container onMouseMove={handleMove}>
        <TheContent>
          <ContentContainer>
            <Header>
              <div>
                <Logo src={logo} />
              </div>
              <div>
                <NavBar>
                  <Options>
                    <Menu>
                      <TheLink href="#">Início</TheLink>
                    </Menu>
                    <Menu>
                      <TheLink href="#">Sobre</TheLink>
                    </Menu>
                    <Menu>
                      <TheLink href="#">Portfólio</TheLink>
                    </Menu>
                    <Menu>
                      <TheLink href="#">Contato</TheLink>
                    </Menu>
                  </Options>
                </NavBar>
              </div>
            </Header>
            <BigRowContainer>
              <QuoteContainer>
                <FirstQuote>S</FirstQuote>
                <BigQuote>
                  eja o protagonista da sua <br></br> própria história!
                </BigQuote>
              </QuoteContainer>
              <ArrowContainer onClick={handleArrowClick}>
                <span>
                  N <br></br>A <br></br>V <br></br>E <br></br>G <br></br>A{" "}
                  <br></br>Ç <br></br>Ã <br></br>O <br></br>
                </span>
                <Arrow />
              </ArrowContainer>
            </BigRowContainer>
          </ContentContainer>
        </TheContent>
        <Bg className="background-image" />
      </Container>
      <p className="testing">teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p> <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
    </>
  );
};

export default Home;
