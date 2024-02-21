import React, { useContext, useEffect, useState } from "react";
import { Theme } from "@/src/contexts/theme";
import toast from "react-hot-toast";
import api from "@/src/api";
import MusicItem from "../musicItem";

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
      className={`w-full sm:w-1/2 h-full bg-green-500/10 overflow-hidden line-center items-start flex-wrap `}
    >
      <div className="line-between h-1/6">
        {/*<input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          type="search"
        />*/}
        <div className={`text-${theme.text1} text-sm sm:text-lg font-semibold`}>
          Top 100 mais tocadas mundialmente
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
