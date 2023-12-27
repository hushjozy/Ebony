import React, { useEffect, useState } from "react";
import { View, Easing, Image, Pressable, StyleSheet, Text } from "react-native";
import Animated, {
  FadingTransition,
  Keyframe,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const PrimeButton = ({ onPress, text, buttonStyle, textStyle, icon }) => {
  // const transform = useSharedValue([{ scaleX: 1 }]);
  // const backgroundColor = useSharedValue(
  //   buttonStyle.backgroundColor || styles.primeBtn.backgroundColor
  // );
  const color = useSharedValue(buttonStyle.color);
  const [show, setShow] = useState(false);

  // const handlePress = () => {
  //   transform.value = [{ scaleX: withSpring(1.9) }];
  //   backgroundColor.value = withTiming("#03499F", {
  //     duration: 500,
  //     easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  //   });
  //   color.value = "#fff";
  //   setTimeout(() => {
  //     transform.value = [{ scaleX: withSpring(1) }];
  //     backgroundColor.value = withTiming("#6497D6", {
  //       duration: 900,
  //       easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  //     });
  //     color.value = buttonStyle.color;
  //   }, 500);
  //   // setShow((last) => !last);
  //   console.log(show);
  // };
  // useEffect(() => {}, [width.value]);
  const enteringAnimation = new Keyframe({
    0: {
      transform: [{ scaleX: withSpring(1) }],
      backgroundColor: buttonStyle.backgroundColor,
    },
    30: {
      transform: [{ scaleX: withSpring(1.2) }],
      backgroundColor: "#00c2f7",
    },
    100: {
      transform: [{ scaleX: withSpring(1) }],
      backgroundColor: "#03499F",
      easing: Easing.quad,
    },
  }).duration(2000);

  const exitingAnimation = new Keyframe({
    0: {
      transform: [{ scaleX: withSpring(1) }],
      backgroundColor: "#03499F",
    },
    30: {
      transform: [{ scaleX: withSpring(1.2) }],
      backgroundColor: "#00c2f7",
      easing: Easing.exp,
    },
    100: {
      transform: [{ scaleX: withSpring(1) }],
      backgroundColor: buttonStyle.backgroundColor,
    },
  }).duration(2000);
  return (
    <Pressable
      onPress={() => {
        onPress();
        // handlePress();
      }}
      style={[
        styles.primeBtn,
        buttonStyle,
        // { transform, backgroundColor, color },
      ]}
    >
      {text && <Text style={[styles.primeBtnText, textStyle]}>{text}</Text>}
      {icon}
    </Pressable>
  );
};

export default PrimeButton;
const styles = StyleSheet.create({
  primeBtn: {
    height: 45,
    gap: 8,
    borderRadius: 16,
    backgroundColor: "#6497D6",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    justifySelf: "center",
    alignSelf: "center",
  },
  primeBtnText: {
    color: "#F8F2EB",
    fontFamily: "Sora",
    fontSize: 14,
    fontWeight: "600",
  },
  iconStyle: { width: 18, height: 18 },
});
