import { InferGetServerSidePropsType } from "next";
import React from "react";

export async function getStaticProps() {
  return {
    props: {
      name: "inspiration"
    }
  };
}

function InspirationPage({
  name
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  return <div>{name}</div>;
}

export default InspirationPage;
