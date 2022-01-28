import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import colors from "../../config/colors";

import defaultStyles from "../../config/style";

function AppTextInput({
  icon,
  height,
  width = "100%",
  comment,
  backgroundColor,
  borderRadius,
  iconLib,
  FiledIconType,
  ...otherProps
}) {
  // console.log("@ data", borderRadius);
  return (
    <View
      style={[
        comment ? styles.textAreaContainer : styles.container,
        {
          width,
          height: height ? height : 60,
          borderRadius: borderRadius !== undefined ? borderRadius : 8,
          backgroundColor: backgroundColor
            ? backgroundColor
            : defaultStyles.colors.textFieldBackground,
        },
      ]}
    >
      {icon && (
        <FiledIconType
          name={icon}
          size={20}
          color={defaultStyles.colors.textFieldColor}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.HeadingText}
        style={defaultStyles.text}
        numberOfLines={1}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 40,
    paddingLeft: 15,
    marginVertical: 10,
    alignItems: "center",
    borderColor: colors.ThemeColor,
    borderWidth: 0.7,

  },
  textAreaContainer: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 15,
    height: 120,
    textAlignVertical: "top",
    paddingLeft: 15,
    paddingVertical: 0,
    textAlignVertical: "top",
    paddingTop: 20,
    paddingRight: 15,
    width: 200,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
