import React, { useContext, useEffect } from "react";
import { musicContext } from "../testContexts/MusicContextProvider";

const TestList = () => {
  const { musics, getSongs } = useContext(musicContext);
  useEffect(() => {
    getSongs();
  }, []);
  return (
    <div>
      {musics ? (
        musics.map(item => (
          <div key={item.slug}>
            <div>{item.title}</div>
            {/* <img src={item.image} alt="" /> */}
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default TestList;
