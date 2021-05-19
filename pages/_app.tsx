import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import styled, { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    background:rgb(63,131,121);
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
  }
  html, body {
    height: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 3em;
  svg {
    width: 40vw;
    max-height: 40vh;
    margin: 5em;
  }
  a {
    color: rgb(225, 93, 69);
    text-decoration: none;
  }
  h2 {
    text-align: center;
  }
`;

function MyApp() {
  return (
    <>
      <Head>
        <title>vanwowas</title>
        <meta name="robots" content="noindex" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Container>
        <h1>Hier entsteht vanwowas</h1>
        <svg viewBox="0 0 67 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.7899 62.49H16.6785H14.5209C6.37586 61.4072 0.0816289 54.4554 0.00745327 45.9936V45.6992V44.6414C0.00745327 44.5894 0 44.5419 0 44.4917C0 44.4423 0.00745327 44.3948 0.00745327 44.3447C0.0362813 41.0432 1.01708 37.9737 2.68101 35.3877C3.56561 34.0147 4.63938 32.7805 5.87315 31.7205L11.7884 24.9285L11.6624 24.9266L33.4642 0L41.3699 9.07574C41.5762 9.25209 41.7829 9.44731 41.9892 9.67701C41.597 9.23549 41.1315 8.70645 42.0274 9.71638C42.466 10.2165 42.3815 10.1189 42.1677 9.87842L61.6095 32.3039C62.4189 33.0731 63.1516 33.9216 63.7949 34.8385C65.5158 37.2937 66.5967 40.2285 66.8011 43.406C66.8536 43.7629 66.8941 44.1218 66.9229 44.4846C66.9547 44.8786 66.9909 45.2707 66.9951 45.6709C66.9951 45.6855 66.9919 45.7001 66.9919 45.7167C66.9919 45.7747 67 45.8326 67 45.8931C66.9981 46.426 66.9725 46.9509 66.9226 47.4714V78.1303C66.9443 78.4729 66.9754 78.8148 66.9754 79.1653C66.9754 79.5137 66.9443 79.856 66.9226 80.2003C66.4105 88.6227 59.7489 95.361 51.3839 95.9395C50.9956 95.9665 50.6085 96 50.214 96C49.8207 96 49.4346 95.9665 49.0453 95.9395C40.3953 95.3401 33.5552 88.1623 33.4632 79.3416C33.4632 79.2814 33.4542 79.2235 33.4542 79.1653C33.4542 79.1487 33.4574 79.1344 33.4574 79.1194C33.3622 69.9373 25.9446 62.5209 16.7899 62.49Z"
            fill="currentColor"
          />
          <path
            d="M0 81.9227V82.1705C0.0621629 89.2403 5.33039 95.0508 12.1465 95.9565H14.5829C15.3123 96.0544 15.8515 95.9565 15.8515 95.9565C22.6943 95.0472 27.9814 89.1946 28 82.0834C28 82.0334 27.9928 81.9854 27.9928 81.9358C27.9928 81.9231 27.9958 81.911 27.9958 81.8982C27.9147 74.2248 21.7069 68.0251 14.0456 68H13.9522C6.28073 68.0245 0.0660684 74.2369 0 81.9227ZM7.0013 81.9913C7.03547 78.1494 10.141 75.0443 13.9759 75.0319H14.0228C17.8521 75.0443 20.9557 78.1431 20.9951 81.9789C20.9951 81.9851 20.9941 81.9913 20.9941 81.9913C20.9941 82.0227 20.9974 82.0475 20.9974 82.0726C20.9883 85.6249 18.3462 88.5533 14.9263 89.0065H16.5142C16.15 89.0545 15.7809 89.0878 15.4031 89.0878C15.0242 89.0878 14.6561 89.0545 14.291 89.0065H13.0731C9.66552 88.5553 7.03287 85.6498 7.00097 82.1141V81.9913H7.0013Z"
            fill="currentColor"
          />
        </svg>
        <h2>
          Verpasse nichts und melde dich bei unserem Newsletter an:
          <br />
          <a href="https://vanwowas.us1.list-manage.com/subscribe?u=2aca43110e641681aeff4c744&id=f0c212e36c">
            Hier gehts zum Newsletter
          </a>
        </h2>
      </Container>
      <GlobalStyle />
    </>
  );
}

export default MyApp;