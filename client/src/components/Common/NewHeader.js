import React, { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { ThemeContext } from "../../context/Theme/ThemeContext";

function NewHeader({ page = "home" }) {
  const { user, dispatch } = useContext(AuthContext);
  const {  subTitleTextColor } = useContext(ThemeContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/">
            <img src={PF + "/logo.svg"} alt="logo" />
          </a>
        </Logo>

        <Nav>
          <NavListWrap>
            <NavList>
              <Link to="/">
                <span style={{ fontSize: "14px" }}>Dashboard</span>
              </Link>
            </NavList>
            <NavList>
              <Link to="/network">
                <span style={{ fontSize: "14px" }}>Job Board</span>
              </Link>
            </NavList>
            <NavList>
              <a href="/">
                <span style={{ fontSize: "14px" }}>Notifications</span>
              </a>
            </NavList>
            <NavList>
              <a href="/">
                <span style={{ fontSize: "14px" }}>About Us</span>
              </a>
            </NavList>

            <Dropdown>
              <Dropdown.Toggle
                style={{
                  backgroundColor: "white",
                  border: "none",
                  color: subTitleTextColor,
                  outline: "none",
                }}
                align="end"
                title="Dropdown end"
                id="dropdown-menu-align-end"
                className="fw-300 shadow-none"
              >
                <span>{`${user.username || "Chaitanya"}`}</span>
              </Dropdown.Toggle>

              <Dropdown.Menu className="w-100">
                <a class="dropdown-item" href="#">
                  Account
                </a>
                <div class="dropdown-divider"></div>
                <Dropdown.Item
                  onClick={() => dispatch({ type: "LOGOUT", payload: null })}
                  className="d-flex align-items-center gap-2"
                >
                  <i className="fa-solid fa-right-from-bracket fa-lg" />
                  <div>Logout</div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/*<User>
              <a href="/">
                <img src={user.profilePicture || PF + "/user.svg"} alt="user" />
                <span>
                  Me
                  <img src={PF + "/down-icon.svg"} alt="arrow" />
                </span>
              </a>

              <Signout>
                <a
                  href="/login"
                  onClick={() => {
                    dispatch({ type: "LOGOUT", payload: null });
                  }}
                >
                  Sign Out
                </a>
              </Signout>
            </User>*/}
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  width: 100%;
  max-width: 1128px;
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;

const SearchIcon = styled.span`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.15s;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 786px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  margin: 0;
  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    padding: 3px 0;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 42px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    margin-top: 3px;

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      padding-bottom: 2px;
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const Signout = styled.div`
  position: absolute;
  top: 45px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
  span {
    color: rgba(0, 0, 0, 0.6);
    text-align: center;
  }
`;

const User = styled(NavList)`
  a > svg {
    width: 24px;
    border-radius: 50%;
  }

  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  span {
    display: flex;
    align-items: center;
  }

  &:hover {
    ${Signout} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;
export default NewHeader;
