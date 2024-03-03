/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

const Social: React.FC<{
  social: any;
}> = ({ social }) => {
  const [hovered, setHovered] = useState(false);
  const { link, hoverIcon, icon } = social;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        src={hovered ? hoverIcon : icon}
        alt="logo"
      />
    </a>
  );
};

export default Social;
