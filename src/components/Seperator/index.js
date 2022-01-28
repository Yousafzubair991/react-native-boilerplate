import React from "react";
import { StyleSheet, View, Text } from "react-native";
import colors from "../../config/colors";


function Seperator({ ...otherProps }) {
    return (
        <View style={styles.root}{...otherProps}>

        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        borderBottomColor: colors.Seperator,
        borderBottomWidth: 1
        // backgroundColor: colors.DivColor,
        // flex: 1
    },

})


export default Seperator;
