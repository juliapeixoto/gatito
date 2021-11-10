import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";
import globalStyles, { colors } from "../../global";
import styles from "./styles";

export default function CommonScreen({ children }) {
  return (
    <>
      <SafeAreaView style={styles.adjustSreen}>
        <StatusBar backgroundColor={colors.purple} />
        <KeyboardAvoidingView
          style={globalStyles.fill}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
      <SafeAreaView style={styles.adjustBottomSreen} />
    </>
  );
}
