import React, { useContext, useEffect, useRef, useState } from "react";
import { Theme } from "@/src/contexts/theme";
import { IoIosMusicalNotes } from "react-icons/io";
import api from "@/src/api";
import toast from "react-hot-toast";
import { Selected, SelectedProps } from "@/src/contexts/selected";
import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
} from "react-icons/io5";

export default function Player() {
  const theme = useContext(Theme);
  const selected: SelectedProps = useContext(Selected);
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  useEffect(() => {
    let audio = document.getElementById("audio");
    if (audio != undefined) {
      //@ts-ignore
      audio.load();
      //@ts-ignore
      audio.play();
      setIsPlaying(true);
    }
  }, [selected]);

  async function handlePause() {
    //@ts-ignore
    audioRef.current.pause();
    setIsPlaying(false);
  }

  async function handlePlay() {
    //@ts-ignore
    audioRef.current.play();
    setIsPlaying(true);
  }

  return (
    <div
      className={`
            line-center flex-wrap flex-col items-between
            sm:w-1/2 h-full
        `}
    >
      {selected.id !== undefined && (
        <div
          className={`text-center
            text-${theme.text1}
        `}
        >
          <div className="text-lg font-semibold">{selected.title}</div>
          <div className="opacity-50">{selected.artist.name}</div>
        </div>
      )}
      <a
        className="cursor-pointer"
        title={
          selected.id !== undefined ? "clique para ouvir a musica completa" : ""
        }
        target="_blank"
        href={selected.id !== undefined ? selected.link : ""}
      >
        <div
          className={`
                    w-48 h-48 sm:w-72 sm:h-72 rounded-lg 
                    relative
                    overflow-hidden
                    line-right
                    items-end
                    bg-cover
                    bg-center
                `}
          style={{
            backgroundImage: `url(${
              selected.id !== undefined ? selected.album.cover_big : null
            })`,
          }}
        >
          <div
            className={`
                            w-full h-full
                            bg-${theme.text1} opacity-10
                            absolute line-center
                            with-transition
                            text-${theme.text2}
                            ${selected.id !== undefined ? "hidden" : ""}
                        `}
          >
            <IoIosMusicalNotes size="120px" />
          </div>
          <div
            className={`
                            mr-4 mb-4 w-24 rounded-sm h-10 
                            z-10 font-bold p-1
                            bg-white line-center
                            border border-black
                        `}
          >
            <div className="bg-black leading-3 line-center text-xs text-center text-white w-full h-full">
              OFERED BY DEEZER
            </div>
          </div>
        </div>
      </a>
      {selected.id !== undefined && (
        <div>
          <audio
            id="audio"
            src={selected.preview}
            //@ts-ignore
            ref={audioRef}
            autoPlay
          />
          <div className={`w-full text-${theme.text1} gap-4 line-between p-4 `}>
            <IoPlayBackSharp />
            {isPlaying ? (
              <IoPauseSharp onClick={() => handlePause()} />
            ) : (
              <IoPlaySharp onClick={() => handlePlay()} />
            )}
            <IoPlayForwardSharp />
          </div>
        </div>
      )}
    </div>
  );
}
