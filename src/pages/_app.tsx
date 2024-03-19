import "@/src/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import SelectedProvider from "../contexts/selected";
import SavedProvider from "../contexts/saved";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SavedProvider>
      <SelectedProvider>
        <Toaster position="top-center" />
        <Component {...pageProps} />
      </SelectedProvider>
    </SavedProvider>
  );
}
