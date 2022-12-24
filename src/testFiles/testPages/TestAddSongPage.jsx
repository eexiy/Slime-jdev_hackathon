import React, { useContext, useState } from "react";
import { musicContext } from "../testContexts/MusicContextProvider";

const TestAddSongPage = () => {
  const { createSong } = useContext(musicContext);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [music, setMusic] = useState("");

  function saveSong() {
    let newSong = new FormData();
    newSong.append("title", title);
    newSong.append("genre", genre);
    newSong.append("music", music);

    createSong(newSong);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        style={{ color: "black" }}
      />
      <input
        type="text"
        value={genre}
        onChange={e => setGenre(e.target.value)}
        style={{ color: "black" }}
      />
      <input
        type="file"
        accept="music/*"
        onChange={e => setMusic(e.target.files[0])}
        style={{ color: "black" }}
      />

      <button
        onClick={() => {
          saveSong();
        }}>
        add
      </button>
    </div>
  );
};

export default TestAddSongPage;
