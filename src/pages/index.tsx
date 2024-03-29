import React, { useContext } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "../components/header";
import Player from "../components/player";
import Playlist from "../components/playlist";

export default function Home() {
  return (
    <div
      className={`bg-black with-transition w-screen h-screen line-center items-start relative`}
    >
      <Header />
      <div className={`line-center w-full h-screen pt-10`}>
        <div
          className={`w-full h-full sm:w-5/6 sm:h-5/6 xl:w-3/4 flex-col sm:rounded-md sm:flex-row xl:h-3/4 sm:border line-between border-mainColor`}
        >
          <Player />
          <Playlist />
        </div>
      </div>
    </div>
  );
}
