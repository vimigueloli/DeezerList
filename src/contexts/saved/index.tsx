import { createContext, ReactNode, useState, useEffect } from "react";
import { setCookie, parseCookies } from "nookies";

export interface ItemProps {
  duration?: number;
  explicit_content_cover?: number;
  explicit_content_lyrics?: number;
  explicit_lyrics?: boolean;
  id?: number;
  link?: string;
  md5_image?: string;
  preview?: string;
  rank?: number;
  readable?: boolean;
  time_add?: number;
  title?: string;
  title_short?: string;
  title_version?: string;
  type?: string;
  artist?: any;
  album?: any;
}

interface UpdaterProps {
  update?: Function;
}

export const Saved = createContext<ItemProps[]>([]);
export const SavedUpdater = createContext<UpdaterProps>({});

interface ProviderProps {
  children: ReactNode;
}

export default function SavedProvider({ children }: ProviderProps) {
  const [savedState, setSavedState] = useState<ItemProps[]>([]);

  useEffect(() => {
    async function loadFavorites() {
      const cookies = await parseCookies();
      if (
        cookies.favorites !== undefined &&
        cookies.favorites &&
        cookies.favorites.length > 0
      ) {
        console.log("cookies ->", JSON.parse(cookies.favorites));
        setSavedState(JSON.parse(cookies.favorites));
      }
    }
    loadFavorites();
  }, []);

  return (
    <Saved.Provider value={savedState}>
      <SavedUpdater.Provider value={{ update: setSavedState }}>
        {children}
      </SavedUpdater.Provider>
    </Saved.Provider>
  );
}
