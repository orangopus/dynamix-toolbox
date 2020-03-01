import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Player() {
  function SetArtist() {
    const [song, setSong] = useState();

    useEffect(() => {
      const runEffect = async () => {
        const song = await axios.get(`http://localhost:3000/song.txt`);
        setSong(song);
      };
      runEffect();
    }, [setSong]);

    return (
      <div>
        <h1>{song}</h1>
        <p>Artist</p>;
      </div>
    );
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

  useEffect(() => {
    const interval = setInterval(() => {
      SetAvatar();
      axios
        .get("http://localhost:3000/album.jpg", {
          responseType: "arraybuffer"
        })
        .then(function(album) {
          arrayBufferToBase64(album.data);
        });
    }, 1000);
    return () => clearTimeout(interval);
  }, []);

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
