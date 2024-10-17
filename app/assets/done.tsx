import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

function Done(props) {
  return (
    <Svg
      viewBox="-0.5 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M3 21.32l18-18M3 3.32l18 18" />
      </G>
    </Svg>
  );
}

export default Done;
