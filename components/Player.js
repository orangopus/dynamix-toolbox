import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Player() {
  function SetArtist() {
    const song = axios.get("api/song.txt");
    return null;
  }

  function SetAvatar() {
    return (
      <div>
        <img className="itemimg album" src="album.jpg" />;
      </div>
    );
  }

  function arrayBufferToBase64(buffer) {
    let binary = "";
    let bytes = new Uint8Array(buffer);
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  return (
    <div className="player flex">
      <div className="flex">
        <div>
          <SetAvatar />
        </div>
        <div
          style={{ paddingLeft: 30, paddingTop: 15, alignContent: "middle" }}
        >
          <SetArtist />
        </div>
      </div>
    </div>
  );
}
