import { createContext, ReactNode, useState, useEffect } from "react";
import { setCookie, parseCookies } from "nookies";

export interface themeProps {
  dark: boolean;
  mainGreen?: string;
  background?: string;
  text1?: string;
  text2?: string;
  changed?: boolean;
}

interface UpdaterProps {
  update?: Function;
}

export const Theme = createContext<themeProps>({
  dark: true,
});
export const ThemeUpdater = createContext<UpdaterProps>({});

interface ProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ProviderProps) {
  const [themeState, setThemeState] = useState<themeProps>({ dark: true });
  const [firstLoad, setFirstLoad] = useState<boolean>(true);

  useEffect(() => {
    async function getCookiesInfo() {
      const response = await parseCookies();
      console.log("theme->", response.theme);
      if (response.theme !== "dark") {
        setThemeState({
          dark: false,
          changed: false,
          background: "mainColor",
          text1: "black",
          text2: "white",
        });
      } else {
        setThemeState({
          dark: true,
          changed: false,
          background: "black",
          text1: "white",
          text2: "black",
        });
      }
    }

    if (themeState.changed) {
      switch (themeState.dark) {
        case true:
          setCookie(null, "theme", "dark", {
            maxAge: 12 * 30 * 24 * 60 * 60,
            path: "/",
          });
          setThemeState({
            dark: true,
            changed: false,
            background: "black",
            text1: "white",
            text2: "black",
          });
          break;
        case false:
          setCookie(null, "theme", "bright", {
            maxAge: 12 * 30 * 24 * 60 * 60,
            path: "/",
          });
          setThemeState({
            dark: false,
            changed: false,
            background: "mainColor",
            text1: "black",
            text2: "white",
          });
          break;
      }
    } else if (firstLoad) {
      getCookiesInfo();
      setFirstLoad(false);
    }
  }, [themeState]);

  return (
    <Theme.Provider value={themeState}>
      <ThemeUpdater.Provider value={{ update: setThemeState }}>
        {children}
      </ThemeUpdater.Provider>
    </Theme.Provider>
  );
}
