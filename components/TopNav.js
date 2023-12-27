import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  View,
  Pressable,
} from "react-native";
import Animated, { FlipInXDown, FlipInXUp } from "react-native-reanimated";
import BackIcon from "../assets/icons/backrrow.svg";
const TopNav = ({ prev, next, title, nextAction }) => {
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <Animated.View
      entering={FlipInXUp.duration(400).delay(100)}
      exiting={FlipInXDown.duration(400).delay(100)}
      style={[styles.nav_container, { width: width, zIndex: 1000 }]}
    >
      {prev && (
        <Pressable style={styles.navButton} onPress={() => navigation.goBack()}>
          <BackIcon style={[styles.navIcon, { height: 20 }]} />
        </Pressable>
      )}
      <Text style={styles.navtext}>{title}</Text>

      <Pressable
        style={styles.navButton}
        onPress={() => nextAction()}
      ></Pressable>
    </Animated.View>
  );
};

export default TopNav;
const styles = StyleSheet.create({
  nav_container: {
    position: "absolute",
    top: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: 12,
    marginTop: 50,
    alignItems: "center",
    height: 60,
    backgroundColor: "#FFFFFF",
  },
  navButton: {
    width: 30,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  navIcon: {
    width: 25,
    height: 25,
    objectFit: "contain",
  },
  navText: {
    fontFamily: "Sora",
    fontWeight: "800",
    fontSize: 15,
  },
});
