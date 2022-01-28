import React from "react";
import { Input } from "react-native-elements";
import { StyleSheet, View, TextInput } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from "../../config/colors";

const FormInput = ({
  iconName,
  iconColor,
  returnKeyType,
  keyboardType,
  name,
  placeholder,
  ...rest
}) => (
  <View style={styles.inputContainer}>
    <Input
      {...rest}
      leftIcon={<Ionicons name={iconName} size={28} color={iconColor} />}
      leftIconContainerStyle={styles.iconStyle}
      placeholderTextColor="grey"
      name={name}
      placeholder={placeholder}
      style={styles.input}
    />
    {/* <TextInput
      style={styles.input}
      //   onChangeText={onChangeNumber}
      //   value={number}
      placeholder="useless placeholder"
      keyboardType="numeric"
      style={styles.input}
    /> */}
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    margin: 15,
  },
  iconStyle: {
    marginRight: 10,
  },
  input: {
    borderColor: colors.ThemeColor,
    borderWidth: 2,
    margin: 3,
    padding: 10,
  },
});

export default FormInput;
