import React, { useContext } from "react";
import styled from "styled-components";

import { AuthContext } from "../../context/AuthContext";

function Posts() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Container>
        <ShareBox>
          <div>
            <img src={user.profilePicture || PF + "/user.svg"} alt="logo" />
            <button onClick={() => {}}>Start a post</button>
          </div>
          <div>
            <button>
              <img src={PF + "/photo-icon.svg"} alt="icon" />
              <span>Photo</span>
            </button>

            <button>
              <img src={PF + "/video-icon.svg"} alt="icon" />
              <span>Video</span>
            </button>

            <button>
              <img src={PF + "/event-icon.svg"} alt="icon" />
              <span>Event</span>
            </button>

            <button>
              <img src={PF + "/article-icon.svg"} alt="icon" />
              <span>Write Article</span>
            </button>
          </div>
        </ShareBox>
      </Container>
    </div>
  );
}
const Container = styled.div`
  grid-area: main;
`;
const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;
const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 14px;
  background: white;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 2px solid rgba(0, 0, 0, 0.15);
        background-color: white;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;
      button {
        img {
          margin: 0 4px 0 -2px;
        }
        span {
          font-weight: 600;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
`;

export default Posts;
