import React from "react";
import { Analytics } from "@vercel/analytics/react";

export const wrapPageElement = ({ element }) => {
  return (
    <>
      {element}
      <Analytics />
    </>
  );
};
