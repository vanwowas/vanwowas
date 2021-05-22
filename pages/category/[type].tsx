import { InferGetServerSidePropsType } from "next";
import React from "react";

import Page from "../../components/Page";

export async function getServerSideProps({ params }: any) {
  return {
    props: {
      type: params.type
    }
  };
}

function Category({
  type
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <Page>{type}</Page>;
}
export default Category;
