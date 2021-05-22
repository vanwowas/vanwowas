import React from "react";
import Header from "./Header";

const Skeleton: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Skeleton;
