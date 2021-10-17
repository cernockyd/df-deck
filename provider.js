import React from "react";
import { useDeck } from "mdx-deck";

export default (props) => {
  const state = useDeck();

  return (
    <div>
      {props.children}

      <div
        style={{
          fontFamily: '"Inter", sans-serif', 
          position: "absolute",
          left: 0,
          right: 0,
          fontSize: 14,
          padding: "15px 30px",
          bottom: 0,
        }}
      >
        Use ← → or swipe to navigate.
      </div>
    </div>
  );
};
