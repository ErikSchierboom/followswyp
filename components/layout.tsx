import React from "react";
import Header from "./header";

// TODO: add unit tests
// TODO: integrate with CircleCI
// TODO: automatic deployment

export default (Component: React.ComponentType) => ({ ...props }) => (
  <>
    <Header />
    <Component {...props} />
  </>
);
