import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import colors from "../../config/colors";
import font from "../../config/font";
const AppButton = ({ onPress, Title, loading, disabledValue }) => (
  <View>
    <TouchableOpacity
      onPress={onPress}
      style={styles.Btn}
      disabled={loading || disabledValue}
    >
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={styles.text}>{Title}</Text>
      )}
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  Btn: {
    backgroundColor: colors.ThemeColor,
    padding: 17,
    borderRadius: 100,
    overflow: 'hidden',
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    display: "flex",
    color: colors.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#0000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    marginBottom: 20,
    elevation: 9,
  },
  text: {
    color: colors.white,
    textAlign: "center",
    paddingHorizontal: 8,
    fontSize: 15,
    fontFamily: 'Montserrat-Medium',
  },

});

export default AppButton;
