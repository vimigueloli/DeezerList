import React, { useContext } from "react";
import { Selected, SelectedUpdater } from "@/src/contexts/selected";

interface MusicProps {
  music: {
    duration?: number;
    explicit_content_cover?: number;
    explicit_content_lyrics?: number;
    explicit_lyrics?: boolean;
    id: number;
    link: string;
    md5_image?: string;
    preview: string;
    rank?: number;
    readable?: boolean;
    time_add?: number;
    title: string;
    title_short?: string;
    title_version?: string;
    type?: string;
    artist?: any;
    album?: any;
  };
  topPosition?: number;
}

export default function MusicItem({ music, topPosition }: MusicProps) {
  const setSelected: any = useContext(SelectedUpdater).update;

  return (
    <div
      className={`w-full h-16 line-between text-white with-transition border-b border-mainColor
            cursor-pointer hover:bg-mainColor/30
            pl-0
        `}
      key={music.id}
      onClick={() => {
        setSelected(music);
      }}
    >
      <div className="w-12 sm:hidden text-center">{topPosition}</div>
      <div className={`w-1/6  h-full  line-center sm:line-left`}>
        <div className=" hidden w-12 sm:block text-center">{topPosition}</div>
        <img
          className={`w-10 h-10 rounded-md`}
          src={music.album.cover_small}
          alt={music.title_short}
        />
      </div>
      <div className="bg-transparent pl-4 h-full line-left w-4/6 flex-wrap with-transition">
        <div>{music.title_short}</div>
        <div className={`w-full text-xs opacity-30`}>{music.artist.name}</div>
      </div>
      <div className={`w-1/6 h-full line-center`}></div>
    </div>
  );
}
