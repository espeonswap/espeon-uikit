import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 228 228" {...props}>
      <image width="228" height="228" href="/images/token.png" />
    </Svg>
  );
};

export default Icon;
