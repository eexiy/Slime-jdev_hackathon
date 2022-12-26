import React, { useContext, useEffect } from "react";
import { Content } from "./Content/Content";
import img from "../../assets/img.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import "./Main.scss";
import { musicContext } from "../../testFiles/testContexts/MusicContextProvider";
import { useHorizontalScroll } from "../CustomFunctions/useSideScroll";
import { useNavigate } from "react-router-dom";
import "../../testFiles/testPages/Alert.scss";

export const Main = () => {
  const { genres, getGenres, musics, getSongs, users, getUsers } =
    useContext(musicContext);
  const scrollRef = useHorizontalScroll();

  const navigate = useNavigate();

  useEffect(() => {
    getGenres();
  }, []);
  useEffect(() => {
    getSongs();
  }, []);
  useEffect(() => {
    getUsers();
  }, []);
  //   const handleWheel = event => {
  //     event.preventDefault();

  //     const delta = Math.sign(event.deltaY);
  //     event.target.scrollLeft += delta * 50;
  //   };
  return (
    <div>
      <div className="blockBackground">
        <div className="firstFlow"></div>
        <div className="secondFlow"></div>
        <div className="thirdFlow"></div>
      </div>
      <h1 className="main__title">Жанры</h1>
      <div className="main__content">
        {genres ? (
          genres.map(item => (
            <Content
              key={item.genre}
              img={img}
              descr={item.genre}
              genre={item.genre}
            />
          ))
        ) : (
          <></>
        )}
      </div>

      <h1 className="main__title">Топ Артисты</h1>
      <div className="main__content">
        {users ? (
          users.map(item => (
            <Content
              key={item.email}
              img={"http://34.116.147.191/media" + item.image.slice(21)}
              descr={item.user}
              artist={item.user}
            />
          ))
        ) : (
          <></>
        )}
      </div>

      <h1 className="main__title">Топ Треки</h1>
      <div className="main__content">
        {musics ? (
          musics.map(item => (
            <Content
              key={item.slug}
              img={item.image}
              descr={item.title + " - " + item.user}
              slug={item.slug}
            />
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
