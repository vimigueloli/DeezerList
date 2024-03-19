import React, { useContext, useEffect, useState } from "react";
import { Theme } from "@/src/contexts/theme";
import toast from "react-hot-toast";
import api from "@/src/api";
import MusicItem from "../musicItem";
import { BiWorld, BiSolidStar } from "react-icons/bi";

export default function Playlist() {
  const theme = useContext(Theme);
  const [search, setSearch] = useState<string>("");
  const [musics, setMusics] = useState<any[]>([]);

  useEffect(() => {
    async function getMusics() {
      try {
        const response = await api.get(`playlist/3155776842`, {
          headers: {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": `${process.env.REACT_APP_DEEZER_KEY}`,
          },
        });
        console.log("response ->", response.data);
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
      <div className="w-full line-center flex-col h-1/6">
        <div
          className={`text-white w-full  line-evenly gap-8 text-sm sm:text-lg font-semibold`}
        >
          <BiWorld
            size={35}
            className={`cursor-pointer with-transition hover:opacity-70`}
          />
          <BiSolidStar
            size={35}
            className={`opacity-20 cursor-pointer with-transition hover:opacity-70`}
          />
        </div>
        <div className=" w-full text-center text-white font-semibold text-lg">
          As mais tocadas
        </div>
      </div>
      <div className="line-center h-5/6 overflow-auto w-full flex-wrap">
        {musics.map((item: any, idx: number) => (
          <MusicItem topPosition={idx + 1} key={item.id} music={item} />
        ))}
      </div>
    </div>
  );
}
