import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import font from "../../config/font";
import colors from "../../config/colors";

function AppButton({
  title,
  onPress,
  color = "primary",
  loading,
  width,
  disabledValue,
  buttonStyle,
}) {
  return (
    <TouchableOpacity
      style={[
        buttonStyle ? buttonStyle : styles.button,
        { backgroundColor: colors[color], width },
      ]}
      onPress={onPress}
      disabled={loading || disabledValue}
    >
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 13,
    color: colors.white,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    //fontWeight: "bold",
    fontFamily: 'Montserrat-Medium'
  },
});

export default AppButton;
