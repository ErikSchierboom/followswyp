import "milligram";
import React from "react";

const withLayout = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> => ({ ...props }) => <Component {...(props as P)} />;

export default withLayout;
