import "@/src/styles/globals.css";
import type { AppProps } from "next/app";
import ThemeProvider from "../contexts/theme";
import { Toaster } from "react-hot-toast";
import SelectedProvider from "../contexts/selected";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <SelectedProvider>
        <Toaster position="top-center" />
        <Component {...pageProps} />
      </SelectedProvider>
    </ThemeProvider>
  );
}
