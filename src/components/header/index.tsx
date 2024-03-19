import React from "react";
import logo from "@/public/Deezer_logo.png";

export default function Header() {
  return (
    <div
      className={`
            w-screen h-10 bg-mainColor fixed text-white      
            line-center
        `}
    >
      <div
        className={`w-full text-xl font-semibold line-center absolute text-white with-transition`}
      >
        <img className="w-24 h-6" src={logo.src} />
      </div>
    </div>
  );
}
