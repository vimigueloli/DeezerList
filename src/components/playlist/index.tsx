import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "@/src/api";
import MusicItem from "../musicItem";
import { BiWorld, BiSolidStar } from "react-icons/bi";
import { Saved } from "@/src/contexts/saved";

export default function Playlist() {
  const [musics, setMusics] = useState<any[]>([]);
  const [showFav, setShowFav] = useState<boolean>(false);
  const favorites = useContext(Saved);

  useEffect(() => {
    async function getMusics() {
      try {
        const response = await api.get(`playlist/3155776842`, {
          headers: {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": `${process.env.REACT_APP_DEEZER_KEY}`,
          },
        });
        // console.log("response ->", response.data);
        setMusics(response.data.tracks.data);
      } catch (e: any) {
        toast.error("Falha ->", e.message);
      }
    }
    getMusics();
  }, []);

  return (
    <div
      className={`w-full sm:w-1/2 h-full bg-mainColor/10 overflow-hidden line-center items-start flex-wrap `}
    >
      <div className="w-full line-center sm:gap-0 gap-2 flex-col h-1/4 sm:h-1/6">
        <div
          className={`text-white w-full  line-evenly gap-8 text-sm sm:text-lg font-semibold`}
        >
          <BiWorld
            size={35}
            className={`${
              showFav ? "opacity-20 cursor-pointer hover:opacity-70" : ""
            } with-transition `}
            onClick={() => setShowFav(false)}
          />
          <BiSolidStar
            size={35}
            className={`${
              !showFav ? "opacity-20 cursor-pointer hover:opacity-70" : ""
            } with-transition hover:opacity-70`}
            onClick={() => setShowFav(true)}
          />
        </div>
        <div className=" w-full text-center text-white font-semibold text-lg">
          {showFav ? "Suas Favoritas" : "As mais tocadas"}
        </div>
      </div>
      <div className="line-left relative flex-col justify-start items-start h-5/6 pb-16 overflow-auto w-full ">
        {showFav
          ? favorites.map((item: any, idx: number) => (
              <MusicItem topPosition={idx + 1} key={item.id} music={item} />
            ))
          : musics.map((item: any, idx: number) => (
              <MusicItem topPosition={idx + 1} key={item.id} music={item} />
            ))}
      </div>
    </div>
  );
}
