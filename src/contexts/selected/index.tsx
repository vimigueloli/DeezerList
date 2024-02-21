import { createContext, ReactNode, useState, useEffect } from "react";
import { setCookie, parseCookies } from "nookies";

export interface SelectedProps {
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

export const Selected = createContext<SelectedProps>({});
export const SelectedUpdater = createContext<UpdaterProps>({});

interface ProviderProps {
  children: ReactNode;
}

export default function SelectedProvider({ children }: ProviderProps) {
  const [selectedState, setSelectedState] = useState<SelectedProps>({});

  return (
    <Selected.Provider value={selectedState}>
      <SelectedUpdater.Provider value={{ update: setSelectedState }}>
        {children}
      </SelectedUpdater.Provider>
    </Selected.Provider>
  );
}
