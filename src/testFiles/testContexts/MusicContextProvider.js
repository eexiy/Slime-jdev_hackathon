import React, { useReducer, useState } from "react";
import axios from "axios";

export const musicContext = React.createContext();

const INIT_STATE = {
  musics: [],
  oneSong: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_MUSICS":
      return {
        ...state,

        musics: action.payload,
        // pages: Math.ceil(action.payload.count/3)
      };
    case "GET_ONE_SONG":
      return { ...state, oneSong: action.payload };
    default:
      return state;
  }
}

const API = "http://34.116.147.191";

const MusicContextProvider = ({ children }) => {
  const [genres, setGenres] = useState([]);

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function createSong(newSong) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}/music/note/`, newSong, config);
      console.log(res.data.slug);
    } catch (err) {
      console.log(err);
    }
  }

  async function getSongs() {
    try {
      const res = await axios(`${API}/music/note/`);
      console.log(res);
      dispatch({
        type: "GET_MUSICS",
        payload: res.data,
      });
      console.log(state.musics);
    } catch (err) {
      console.log(err);
    }
  }

  async function getGenres() {
    try {
      const res = await axios(`${API}/music/genre/`);
      console.log(res);
      setGenres(res.data);
      console.log(genres);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <musicContext.Provider
      value={{
        musics: state.musics,
        genres,

        setGenres,
        createSong,
        getSongs,
        getGenres,
      }}>
      {children}
    </musicContext.Provider>
  );
};

export default MusicContextProvider;
