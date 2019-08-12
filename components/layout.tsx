import React from "react";
import Header from "./header";
import Footer from "./footer";

export default (Component: React.ComponentType) => ({ ...props }) => (
  <>
    <Header />
    <Component {...props} />
    <Footer />
  </>
);
