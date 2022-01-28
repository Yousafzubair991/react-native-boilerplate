import React from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import colors from "../../config/colors";
import font from "../../config/font";

function Loading() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFF",
        flexDirection: 'row',
      }}
    >
      {/* <Image
        style={{ height: 250, width: 250 }}
        source={require("../../../assets/loading.jpg")}
      /> */}
      <ActivityIndicator size='small' color={colors.ThemeColor} />
      <Text style={{ fontSize: 15, fontFamily: font.bold, color: colors.ThemeColor }}> LOADING...</Text>
    </View>
  );
}

export default Loading;
