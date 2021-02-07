import axios from "axios";
import Head from "next/head";
import config from "../config.json";
import pretzel from "../nowplaying.json";
import styled from "@emotion/styled";

console.log(config.discord.clientID);

const API = "http://localhost:3000/api";

class UserPage extends React.Component {

  componentDidMount() {
    setInterval(() => 1000);
  }

  render() {
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
      return (
      <div className="card">
        <div className="inline-block">
          <img className="album" src="pretzel.png" />
        </div>
        <div className="inline-block"> 
        <h1>
          {pretzel.track.title}
        </h1>
        <p>{pretzel.track.artistsString}</p>
        </div>
      </div>)
    }

    let eventname = config.events[0].name;
    let eventdesc = config.events[0].desc;

    let scenetitle = config.scenes[id].name;
    let scenedesc = config.scenes[id].desc;
    let prenup = config.scenes[id].prenup;

    if (config.eventName === "Creative") {
      eventname = config.events[0].name;
      eventdesc = config.events[0].desc;
    }
    if (config.eventName === "Development") {
      eventname = config.events[1].name;
      eventdesc = config.events[1].desc;
    }

    let findScene = config.scenes.find(
      item => item.id === config.user.currentScene
    );

    let logo = config.user.logo;

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
          <h1 className="logo" style={{color: config.user.colorSecondary, textTransform: "uppercase", fontSize: config.logo.size}}> <span style={{color: config.user.color, fontSize: config.logo.size2, textTransform: "lowercase", marginRight: 15}}>{config.user.username}</span>{config.logo.live}</h1>
            <div className="scenes">
              <h1 className="scenetitle">{scenetitle}</h1>
              <p className="scenedesc" style={{ color: config.user.color }}>
                {scenedesc}
              </p>
            </div>
          </div>
          <div className="gamecont">
            <div className="info">
              <h1 className="prenup">{prenup}</h1>
              <EventName>{eventname}</EventName>
              <p className="eventdesc">{eventdesc}</p>
            </div>
          </div>
        </div>
      </div>
    );

    let gameData = (
      <div
      className="container"
      style={{
        fontFamily: config.user.font,
        borderRadius: config.user.corners
      }}
    >
      <div className="main">
        <div className="flex">
        <h1 className="logo" style={{color: config.user.colorSecondary, textTransform: "uppercase", fontSize: config.logo.size}}> <span style={{color: config.user.color, fontSize: config.logo.size2, textTransform: "lowercase", marginRight: 15}}>{config.user.username}</span>{config.logo.live}</h1>
          <div className="scenes">
            <h1 className="scenetitle">{scenetitle}</h1>
            <p className="scenedesc" style={{ color: config.user.color }}>
              {scenedesc}
            </p>
          </div>
        </div>
        <div className="gamecont">
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
      return gameData;
    } else {
      return userData;
    }
  }
}

export default UserPage;