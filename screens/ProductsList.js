import React, { useState } from "react";
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import TalentCard from "../components/TalentCard";
import { useSelector } from "react-redux";
import Animated, { SlideInDown, SlideInLeft } from "react-native-reanimated";

const ProductsList = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const [isLoading, setIsLoading] = useState(false);
  const { productsList } = useSelector((state) => state.user);

  return (
    <Animated.View
      entering={SlideInLeft.duration(300)}
      // exiting={FadeOutRight.duration(600)}
      style={[(styles.container, styles.light), { height: height }]}
    >
      <Animated.ScrollView
        entering={SlideInDown.duration(600).delay(200)}
        contentContainerStyle={styles.creatorBox}
      >
        <Text
          style={{
            fontSize: 20,
            marginBottom: 22,
            fontWeight: "900",
            color: "#000",
            textAlign: "center",
            width: "100%",
            fontFamily: "Inter",
          }}
        >
          Product Lists
        </Text>
        {productsList?.map((item, index) => {
          return (
            <TalentCard
              key={index}
              product={item}
              onPress={() =>
                navigation.navigate("product_details", { product: item })
              }
              action={{ text: null }}
            />
          );
        })}
      </Animated.ScrollView>
    </Animated.View>
  );
};

export default ProductsList;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    gap: 0,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 100,
  },
  light: {
    backgroundColor: "#F9F9F9",
  },
  darkBg: {
    backgroundColor: "#10151C",
  },
  gradly: {
    height: "fit-content",
    paddingTop: 60,
  },
  rankCard: {
    height: 115,
    alignSelf: "center",
    borderRadius: 16,
    gap: 19,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    shadowColor: "rgba(0, 0, 0, 0.45)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 5,
    marginVertical: 20,
  },
  badge: {
    height: 30,
    width: 30,
    objectFit: "contain",
    // position: "absolute",
    // right: 22,
  },
  spreadFlex: {
    height: "fit-content",
    gap: 8,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  spreadFill: {
    height: "fit-content",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  vertFlex: {
    height: "fit-content",
    gap: 2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  userInfoBoxed: {
    // gap: 12,
    paddingHorizontal: 22,
    marginBottom: 22,
  },

  promoBox: {
    height: 600,
    gap: 12,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  categoryBox: {
    height: 40,
    gap: 12,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 22,
    paddingVertical: 10,
    overflowY: "hidden",
  },

  image: {
    width: 100,
    height: 100,
    marginBottom: 33,
    resizeMode: "contain",
  },
  userImgs: {
    width: 30,
    height: 30,
    // marginBottom: 33,
    resizeMode: "contain",
  },

  promoCard: {
    width: 315,
    height: 140,
    borderRadius: 16,
    background: "#EAE7E7",
    overflow: "hidden",
  },
  creatorBox: {
    height: "fit-content",
    gap: 12,
    paddingHorizontal: 22,
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    alignItems: "flex-start",
    marginTop: 92,
    paddingBottom: 100,
  },
  talentBadge: {
    height: 30,
    width: 30,
    objectFit: "contain",
  },
});
