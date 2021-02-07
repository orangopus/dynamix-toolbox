import axios from "axios";
import config from "../config.json";
import Head from "next/head";

class UserPage extends React.Component {
  render() {
    let userData = (
      <div
        className="container"
        style={{
          fontFamily: config.user.font,
          background: config.user.background,
          overflow: 'auto',
          borderRadius: config.user.corners,
        }}
      >
        <Head>
          <title>{config.web.title}</title>
        </Head>
        <div className="main padfix">

          <div className="flex">
          <h1 className="logo" style={{color: config.user.colorSecondary, textTransform: "uppercase", fontSize: config.logo.size}}> <span style={{color: config.user.color, fontSize: config.logo.size2, textTransform: "lowercase", marginRight: 15}}>{config.user.username}</span>{config.logo.portfolio}</h1>
          </div>
          <div className="herocont">
            <div>
              <img className="avatar" style={{height: config.avatar.size }} src="https://avatars2.githubusercontent.com/u/45247477" />
              <h1 className="title" style={{ color: config.user.color, fontSize: config.web.titleSize }}>{config.web.title}</h1>
              <p className="subtitle" style={{color: config.user.colorSecondary, fontSize: config.web.subtitleSize}}>{config.web.subtitle}</p>
            </div>
          </div>
            <div className="showcasecont">
              <img className="showcase" src="heroimage.png"/>
     <a href={config.web.link}> 
      <button className="mainbutton" 
      style={{color: config.web.mainbutton.color, background: config.web.mainbutton.background 
      }}><i class="fab fa-dribbble"></i> {config.web.mainbutton.text}</button></a>
            </div>
        </div>
      </div>
    );

    if (config.currentScene === "game") {
      return <body style={{ background: "transparent !important"}}></body>;
    } else {
      return userData;
    }
  }
}

export default UserPage;
