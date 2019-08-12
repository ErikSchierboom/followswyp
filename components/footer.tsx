import React from "react";
import lastUpdated from "../data/last-updated.json";

const lastUpdatedDate = new Date(lastUpdated);

export default () => (
  <footer>
    <p>Last updated: {lastUpdatedDate.toLocaleString()}</p>
  </footer>
);
