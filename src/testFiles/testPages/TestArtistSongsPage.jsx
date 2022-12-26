import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { musicContext } from "../testContexts/MusicContextProvider";
import { Nav } from "../../components/Header/Nav/Nav";
import { Footer } from "../../components/Footer/Footer";
import "./TestArtistSongsPage.scss";

const TestArtistSongsPage = () => {
  const { musics, getSongs, users, getUsers } = useContext(musicContext);

  const navigate = useNavigate();

  const location = useLocation();

  const { artist } = useParams();

  function newArr(arr, userApi) {
    let newArr = arr.filter(item => item.user.includes(userApi));
    console.log(newArr);
    console.log(userApi);
    return newArr;
  }

  useEffect(() => {
    getSongs();
  }, []);
  useEffect(() => {
    getSongs();
  }, [location]);

  useEffect(() => {
    getUsers();
  }, []);
  useEffect(() => {
    getUsers();
  }, [location]);

  return (
    <div>
      <Nav />
      {users ? (
        newArr(users, artist.replace(/\*/g, "/")).map(item => (
          <div>
            <div className="backgroundGrad"></div>
            <div className="artistInfo">
              <div className="imageDiv">
                <img
                  src={"http://34.116.147.191/media" + item.image.slice(21)}
                  alt=""
                  className="artistImage"
                />
              </div>
              <div>{item.user}</div>
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
      {musics ? (
        newArr(musics, artist.replace(/\*/g, "/")).map(item => (
          <div key={item.slug}>
            <div>{item.title}</div>
          </div>
        ))
      ) : (
        <></>
      )}
      <Footer />
    </div>
  );
};

export default TestArtistSongsPage;
