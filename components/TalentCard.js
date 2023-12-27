import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native";
import PrimeButton from "./PrimeButton";
const TalentCard = ({ product, action, extraStyle, onPress }) => {
  const { title, image, price } = product;
  const { width, height } = useWindowDimensions();

  return (
    <TouchableOpacity
      style={[styles.creatorCard, extraStyle, { width: "100%" }]}
      onPress={() => onPress(product)}
    >
      <Image source={{ uri: image }} style={styles.avatar} />
      <View style={styles.creatorStat}>
        <View style={styles.nameSect}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: "#fff",

              fontFamily: "Sora",
            }}
          >
            {title}
          </Text>
        </View>
      </View>
      <View style={styles.socialContain}>
        <PrimeButton
          text={`Price:${price}`}
          disabled={true}
          buttonStyle={{
            width: "fit-content",
            height: 38,
            justifyContent: "center",
            paddingHorizontal: 10,
          }}
          textStyle={{ fontSize: 14, fontWeight: "200" }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default TalentCard;
const styles = StyleSheet.create({
  creatorCard: {
    height: 63,
    borderRadius: 16,
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 3,
    paddingHorizontal: 12,
    backgroundColor: "#10151C",
    position: "relative",
    shadowColor: "#10151c",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 5,
    zIndex: 1,
  },
  avatar: {
    height: 35,
    width: 35,
    borderRadius: 50,
  },
  creatorStat: {
    width: "62%",
    flexDirection: "row",
    gap: 0,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  socialContain: {
    height: 50,
    gap: 9,
    flexDirection: "row",
    position: "absolute",
    right: 12,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  badge: {
    height: 30,
    width: 30,
    objectFit: "contain",
  },
});
