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

  const [users, setUsers] = useState([]);

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const [oneUser, setOneUser] = useState(null);

  const [playlists, setPlaylists] = useState([]);

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
  async function getUsers() {
    try {
      const res = await axios(`${API}/account/users/`);
      console.log(res);
      setUsers(res.data);
      console.log(users);
    } catch (err) {
      console.log(err);
    }
  }

  async function getOneUser(email) {
    try {
      const res = await axios(`${API}/account/user/${email}`);
      setOneUser(res.data);
      console.log(res);
      console.log(oneUser);
    } catch (err) {
      console.log(err);
    }
  }

  async function getOneSong(slug) {
    try {
      const res = await axios(`${API}/music/note/${slug}`);
      dispatch({
        type: "GET_ONE_SONG",
        payload: res.data,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function getPlaylists() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(
        `${API}/playlist/crud-playlist/my-playlist/`,
        config
      );

      console.log(res.data);

      setPlaylists(res.data);

      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <musicContext.Provider
      value={{
        musics: state.musics,
        genres,
        users,
        oneSong: state.oneSong,
        oneUser,
        playlists,

        getOneUser,
        setGenres,
        createSong,
        getSongs,
        getGenres,
        getUsers,
        getOneSong,
        getPlaylists,
      }}>
      {children}
    </musicContext.Provider>
  );
};

export default MusicContextProvider;
