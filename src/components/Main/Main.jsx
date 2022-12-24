import React, { useContext, useEffect } from "react";
import { Content } from "./Content/Content";
import img from "../../assets/img.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import "./Main.scss";
import { musicContext } from "../../testFiles/testContexts/MusicContextProvider";

export const Main = () => {
  const { genres, getGenres } = useContext(musicContext);

  useEffect(() => {
    getGenres();
  }, []);

  //   const handleWheel = event => {
  //     event.preventDefault();

  //     const delta = Math.sign(event.deltaY);
  //     event.target.scrollLeft += delta * 50;
  //   };
  return (
    <div>
      <h1 className="main__title">Жанры</h1>
      <div
        className="main__content"
        //   onWheel={e => handleWheel(e)}
      >
        {genres ? (
          genres.map(item => (
            <Content key={item.genre} img={img} descr={item.genre} />
          ))
        ) : (
          <></>
        )}
      </div>

      <h1 className="main__title">Топ Артисты</h1>
      <div className="main__content">
        <Content img={img2} descr="Adele" />
        <Content img={img2} descr="The Weeknd" />
        <Content img={img2} descr="Billie Eilish" />
        <Content img={img2} descr="Dua Lipa" />
      </div>

      <h1 className="main__title">Топ Альбомы</h1>
      <div className="main__content">
        <Content img={img3} descr="The Rolling Stone - Tattoo You" />
        <Content img={img3} descr="Shakira - Dónde Están los Ladrones" />
        <Content img={img3} descr="The Stooges - The Stooges" />
        <Content img={img3} descr="John Mayer - Continuum" />
      </div>
    </div>
  );
};
