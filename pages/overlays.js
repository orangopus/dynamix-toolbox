import axios from "axios";
import Head from "next/head";
import config from "../config.json";
import styled from "@emotion/styled";

console.log(config.discord.clientID);

const API = "http://localhost:3000/api";

class UserPage extends React.Component {
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
    let eventdesc = mixer.type.description;

    let scenetitle = config.scenes[id].name;
    let scenedesc = config.scenes[id].desc;
    let prenup = config.scenes[id].prenup;

    if (eventname === "Creative") {
      eventname = config.events[0].name;
      eventdesc = config.events[0].desc;
    }
    if (eventname === "Development") {
      eventname = config.events[1].name;
      eventdesc = config.events[1].desc;
    }

    let findScene = config.scenes.find(
      item => item.id === config.user.currentScene
    );

    let logo = config.user.logo;

    if (logo === " ") {
      logo = `https://mixer.com/api/v1/users/${mixer.userId}/avatar`;
    } else {
      logo = config.user.logo;
    }

    let logoText = config.user.logoText;

    if(logoText === true) {
      logoText = config.user.name;
    }

    const EventName = styled("h1")`
      color: ${config.user.color};
      font-size: 56px;
      &:before {
        content: "";
        border-left: 2px solid ${config.user.color};
        border-radius: 20px;
        border-left-width: 15px;
        margin-right: 40px;
      }
    `;

    const LogoAvatar = styled("div")`
      border-radius: 100px !important;
    `;

    let sceneChecker = config.user.background;

    if (config.user.currentScene === "game") {
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
        <div className="main">
          <div className="flex">
            <img className="logo" src={logo} />
            <h1>{logoText}</h1>
            <div className="scenes">
              <h1 className="scenetitle">{scenetitle}</h1>
              <p className="scenedesc" style={{ color: config.user.color }}>
                {scenedesc}
              </p>
            </div>
          </div>
          <div className="gamecont">
            <img className="game" src={mixer.type.coverUrl} />
            <div className="info">
              <h1 className="prenup">{prenup}</h1>
              <EventName>{eventname}</EventName>
              <p className="eventdesc">{eventdesc}</p>
            </div>
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

export default UserPage;