import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { musicContext } from "../testContexts/MusicContextProvider";
import { Nav } from "../../components/Header/Nav/Nav";
import { Footer } from "../../components/Footer/Footer";
import AudioPlayer from "react-h5-audio-player";
import "./TestSongDetails.scss";

const TestSongDetails = () => {
  const { slug } = useParams();

  const navigate = useNavigate();

  const location = useLocation();

  const { oneSong, getOneSong, musics, getSongs } = useContext(musicContext);

  useEffect(() => {
    getOneSong(slug);
  }, []);
  useEffect(() => {
    getSongs();
  }, []);

  useEffect(() => {
    getOneSong(slug);
  }, [location]);
  useEffect(() => {
    getSongs();
  }, [location]);

  function newArr(arr, user) {
    let newArr = arr.filter(item => item.user.includes(user));
    console.log(newArr);
    return newArr;
  }

  return (
    <div>
      <Nav />
      <div className="detailsBlock">
        {oneSong ? (
          <div className="detailsInnerBlock">
            <div className="backgroundGrad"></div>
            <div className="songInfo">
              <div className="imageDiv">
                <img src={oneSong.image} alt="" className="songInnerImage" />
              </div>
              <div className="songTitles">
                <div className="songInnerTitles">
                  <h3
                    className="songUser"
                    onClick={() => {
                      navigate(`/artist/${oneSong.user}`);
                    }}>
                    {oneSong.user}
                  </h3>
                  <h3>{oneSong.title}</h3>
                </div>
                <div className="songBnts">
                  <button>Добавить в плейлист +</button>
                  {/* <button></button> */}
                </div>
              </div>
            </div>
            <AudioPlayer
              autoPlay
              src={oneSong.music}
              onPlay={e => console.log("onPlay")}
              // showSkipControls={true}
              // onClickNext={() => {
              //   navigate("/songs/loser20221219101671462642");
              // }}
              // other props here
            />
            <div className="userSongs">
              <div className="tracks">Еще треки от этого автора</div>
              <div className="usersSongsList">
                {musics ? (
                  newArr(musics, oneSong.user).map(item => {
                    if (item.title === oneSong.title) return;
                    if (musics.indexOf(item.slug) > 6) {
                      return;
                    } else {
                      return (
                        <div
                          className="listCardBlock"
                          onClick={() => {
                            navigate(`/songs/${item.slug}`);
                          }}>
                          <div className="listCard">
                            <div className="listImageDiv">
                              <img
                                src={item.image}
                                alt=""
                                className="listImage"
                              />
                            </div>
                            <div key={item} className="listSongTitle">
                              {item.title}
                            </div>
                          </div>
                          <div className="listSongBnts">
                            <button>Добавить</button>
                            {/* <button></button> */}
                          </div>
                        </div>
                      );
                    }
                  })
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default TestSongDetails;
