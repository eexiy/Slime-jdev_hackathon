import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { musicContext } from "../testContexts/MusicContextProvider";
import { Nav } from "../../components/Header/Nav/Nav";
import { Footer } from "../../components/Footer/Footer";
import "./TestProfile.scss";

import useOutsideAlerter from "../../components/CustomFunctions/useOutside";

const TestProfilePage = () => {
  const { getOneUser, oneUser, playlists, getPlaylists } =
    useContext(musicContext);

  const { email } = useParams();

  const { ref, isShow, setIsShow } = useOutsideAlerter(false);

  const [modal, setModal] = useState(false);

  useEffect(() => {
    getOneUser(email);
  }, []);

  useEffect(() => {
    getPlaylists();
  }, []);

  return (
    <div>
      {modal ? <div className="profileModalBackground"></div> : <></>}
      <Nav />
      {localStorage.getItem("tokens") ? (
        <div className="profileBlock">
          <div className="profileInnerBlock">
            <div className="profileInfo">
              {oneUser ? (
                <div className="profileInfoDiv">
                  <div className="profileImageDiv">
                    <div
                      style={{
                        background: `url(http://34.116.147.191${oneUser.image})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      className="profileImage"></div>
                  </div>
                  <div className="profileTitles">
                    <div>
                      <b>{oneUser.username}</b>
                    </div>
                    <div>{oneUser.email}</div>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className="playListBlock">
              <div className="playListDiv">
                <div className="addPlayListBtn">
                  <button
                    onClick={() => {
                      setModal(true);
                    }}>
                    Создать плейлист
                  </button>
                </div>
                <div className="playListsList">
                  <h3>Мои плейлисты</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>Войдите что бы просмотреть эту страницу</>
      )}
      <Footer />
    </div>
  );
};

export default TestProfilePage;
