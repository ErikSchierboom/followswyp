import React from "react";

export default ({ ...props }) => (
  <>
    <img width="15px" height="15px" {...props} />
    <style jsx>{`
      img {
        vertical-align: middle;
      }
    `}</style>
  </>
);
