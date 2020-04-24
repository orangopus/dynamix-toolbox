import axios from "axios";
import Head from "next/head";
import Player from "../components/Player";
import config from "../config.json";
import styled from "@emotion/styled";

const API = "http://localhost:3000/api";

class Go extends React.Component {
  static getInitialProps = async ctx => {
    let username = config.user.username;

    const _CHANNELS = "https://mixer.com/api/v1/channels";

    const res = await axios(`${_CHANNELS}/${username}`);

    return {
      mixer: res.data
    };
  };

  render() {
    let mixer = this.props.mixer;

    // Event Checker

    let id;
    let scene = config.user.currentScene;

    if (scene === "start") {
      id = 0;
    } else if (scene === "brb") {
      id = 1;
    } else if (scene === "end") {
      id = 2;
    } else {
      id = 3;
      return null;
    }

    let eventname = mixer.type.name;

    let findScene = config.scenes.find(item => item.id === config.currentScene);

    let sceneChecker = config.user.background;

    if (config.currentScene === "game") {
      sceneChecker = "transparent !important";
    } else {
      sceneChecker;
    }

    let userData = (
      <div
        className="container"
        style={{
          fontFamily: config.user.font,
          background: sceneChecker,
          borderRadius: config.user.corners
        }}
      >
        <div style={{ padding: "20px" }}>
          <div className="flex">
            <div className="item">
              <img className="itemimg" src={mixer.type.coverUrl} />
            </div>
            <div className="item">
              <h1
                style={{
                  textAlign: "center",
                  color: config.user.color
                }}
              >
                {mixer.numFollowers.toLocaleString("en-GB")}
              </h1>
              <p
                style={{
                  textAlign: "center",
                  fontSize: 14
                }}
              >
                followers
              </p>
            </div>
            <div className="item">
              <h1
                style={{
                  color: config.user.color,
                  textAlign: "center"
                }}
              >
                {mixer.viewersCurrent.toLocaleString("en-GB")}
              </h1>
              <p
                style={{
                  textAlign: "center",
                  fontSize: 14
                }}
              >
                viewers
              </p>
            </div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div>
            <p style={{ padding: 20, width: 400, color: "grey" }}>
              Please note that Touch &amp; Go is an experimental feature. Things
              MAY break and data isn't dynamically brought in... yet!
              <br />
              <br />
              Change up the colors in the{" "}
              <span style={{ color: config.user.color }}>config.json</span> file
            </p>
          </div>
          <Player />
          <div className="chat">
            <iframe
              className="chat"
              src={`https://mixer.com/embed/chat/${mixer.token}`}
            ></iframe>
          </div>
        </div>
      </div>
    );

    if (config.currentScene === "game") {
      return <body style={{ background: "transparent !important" }}></body>;
    } else {
      return userData;
    }
  }
}

export default Go;
