import { createContext, ReactNode, useState, useEffect } from "react";

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
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadFavorites() {
      const fav = await localStorage.getItem("favorites");
      if (fav && fav !== undefined) {
        console.log("cookies ->", JSON.parse(fav));
        setSavedState(JSON.parse(fav));
      }
      setLoading(false);
      console.log("loaded");
    }
    async function updateCookies() {
      console.log("update->", savedState);
      localStorage.setItem("favorites", JSON.stringify(savedState));
    }

    if (loading) {
      loadFavorites();
    } else {
      updateCookies();
    }
  }, [savedState]);

  return (
    <Saved.Provider value={savedState}>
      <SavedUpdater.Provider value={{ update: setSavedState }}>
        {children}
      </SavedUpdater.Provider>
    </Saved.Provider>
  );
}
