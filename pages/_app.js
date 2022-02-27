import "../styles/globals.css";
import "nprogress/nprogress.css"
import NProgress from 'nprogress'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Loading from "../components/Loading";

const ICT = ({ Component, pageProps }) => {
  const router = useRouter();

  const [state, setState] = useState({
    isRouteChanging: false,
    loadingKey: 0,
  });

  useEffect(() => {
    const handleRouteChangeStart = () => {
      NProgress.start()
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: true,
        loadingKey: prevState.loadingKey ^ 1,
      }));
    };

    const handleRouteChangeEnd = () => {
      NProgress.done()
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: false,
      }));
    };

    console.log("router events: ", router.events)
    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeEnd);
    router.events.on("routeChangeError", handleRouteChangeEnd);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeEnd);
      router.events.off("routeChangeError", handleRouteChangeEnd);
    };
  }, [router.events]);

  return (
    <>
      <Loading isRouteChanging={state.isRouteChanging} key={state.loadingKey} />
      <Component {...pageProps} />
    </>
  );
};

export default ICT;
