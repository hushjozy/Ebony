import React, { useEffect } from "react";
import { Image, Pressable, StyleSheet, Text } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

const WhiteButton = ({ onPress, text, buttonStyle, textStyle, icon }) => {
  const width = useSharedValue(100);
  const handlePress = () => {
    width.value = withSpring(width.value + 6);
  };
  useEffect(() => {
    setTimeout(() => {
      width.value = withSpring(width.value + 6);
    }, 400);
  }, [width.value]);

  return (
    <Animated.View style={[styles.whiteBtn, buttonStyle, { width }]}>
      <Pressable
        onPress={() => {
          onPress();
          handlePress();
        }}
        style={[styles.whiteBtn, buttonStyle]}
      >
        <Text style={[styles.whiteBtnText, textStyle]}>{text}</Text>
        {icon && (
          <Image
            source={`${icon?.src}`}
            style={[styles.iconStyle, icon.style]}
          />
        )}
      </Pressable>
    </Animated.View>
  );
};

export default WhiteButton;
const styles = StyleSheet.create({
  whiteBtn: {
    height: 45,
    gap: 8,
    borderRadius: 16,
    backgroundColor: "#F8F2EB",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    justifySelf: "center",
    alignSelf: "center",
  },
  whiteBtnText: {
    color: "#10151C",
    fontFamily: "Sora",
    fontSize: 14,
    fontWeight: "600",
  },
  iconStyle: { width: 18, height: 18 },
});
