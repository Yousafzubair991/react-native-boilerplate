import React from "react";
import { Image } from "react-native";

const Logo = require("../../assets/BidGenie.png");

const AppLogo = ({ height, width, alignItems, justifyContent }) => (
  <Image
    source={Logo}
    style={{
      height: height,
      width: width,
      alignItems: alignItems,
      justifyContent: justifyContent,
    }}
  />
);
export default AppLogo;
