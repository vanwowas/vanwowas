import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import React from "react";
import { createGlobalStyle } from "styled-components";
import Skeleton from "../components/Skeleton";
import colors from "../style/colors";

export const routes = {
  home: "/",
  inspiration: "/inspiration",
  category: "/category/:type"
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    background: ${colors.pageBackground};
    font-family: Arial, Helvetica, sans-serif;
  }
  html, body {
    height: 100%;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>vanwowas</title>
        <meta name="robots" content="noindex" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Skeleton>
        <Component {...pageProps} />
      </Skeleton>
      <GlobalStyle />
    </>
  );
}

export default MyApp;
