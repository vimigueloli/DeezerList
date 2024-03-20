import React, { useContext, useEffect, useState } from "react";
import {
  Selected,
  SelectedUpdater,
  SelectedProps,
} from "@/src/contexts/selected";
import Loading from "react-loading";
import { BiSolidStar, BiStar } from "react-icons/bi";
import { Saved, SavedUpdater } from "@/src/contexts/saved";

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
  const selected: SelectedProps = useContext(Selected);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const favorites = useContext(Saved);
  const setFavorites: any = useContext(SavedUpdater).update;

  useEffect(() => {
    if (selected.id === music.id) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [selected]);

  async function favSong() {
    let output = [...favorites, music];
    setFavorites(output);
  }

  async function unfavSong() {
    let output = favorites.filter((item: any) => item.id !== music.id);
    setFavorites(output);
  }

  return (
    <div className={`w-full h-16 relative line-right`}>
      <div className={`w-full h-16 relative line-right`}>
        <div
          className={`w-full h-16 line-between absolute text-white with-transition border-b border-mainColor
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
            <div className=" hidden w-12 sm:block text-center">
              {topPosition}
            </div>
            <div className="w-10 h-10">
              <div
                className={`w-10 h-10 rounded-md line-center position relative`}
              >
                {isSelected && (
                  <div className="absolute -translate-y-2 line-center ">
                    <Loading width={25} height={8} type="bars" />
                  </div>
                )}
                <img
                  className={`w-10 h-10 position absolute rounded-md ${
                    isSelected ? "opacity-30" : ""
                  }`}
                  src={music.album.cover_small}
                  alt={music.title_short}
                />
              </div>
            </div>
          </div>
          <div className="bg-transparent pl-4 h-full line-left w-4/6 flex-wrap with-transition">
            <div>{music.title_short}</div>
            <div className={`w-full text-xs opacity-30`}>
              {music.artist.name}
            </div>
          </div>
          <div className={`w-1/6 h-full line-center`}></div>
        </div>
        <div className="absolute  pr-2 text-white">
          {favorites.map((item: any) => item.id).includes(music.id) ? (
            <BiSolidStar
              size={30}
              onClick={() => unfavSong()}
              className={` cursor-pointer with-transition hover:opacity-30`}
            />
          ) : (
            <BiStar
              size={30}
              onClick={() => favSong()}
              className={` cursor-pointer with-transition hover:opacity-30`}
            />
          )}
        </div>
      </div>
    </div>
  );
}
