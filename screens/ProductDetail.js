import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import TopNav from "../components/TopNav";
import { useDispatch } from "react-redux";

const ProductDetail = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const route = useRoute();
  const dispatch = useDispatch();
  const {} = route.params || {};

  const product = route?.params?.product;

  return (
    <View style={[(styles.container, styles.light), { height: height }]}>
      <TopNav prev={true} title={"Details"} />

      <View style={[styles.boxed]}>
        <Image source={{ uri: product?.image }} style={[styles.creatorImg]} />

        <Text style={[styles.creatorName]}>{product?.title}</Text>
        <Text style={[styles.contentType]}>Category:{product?.category}</Text>
        <Text style={[styles.contentType]}>Price:{product?.price}</Text>
      </View>
      <View style={styles.about}>
        <Text style={[styles.description]}>Product Description</Text>
        <Text style={[styles.textAbout]}>{product?.description}</Text>
      </View>
    </View>
  );
};

export default ProductDetail;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 0,
    flex: 1,
    display: "flex",
    height: "fit-content",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 100,
  },
  light: {
    backgroundColor: "#fff",
  },
  darkBg: {
    backgroundColor: "#10151C",
  },

  spreadFlex: {
    height: "fit-content",
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  spreadFill: {
    height: "fit-content",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    justifyContent: "space-between",
    height: 121,
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
    shadowColor: "rgba(228, 228, 228, 0.25)",
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowRadius: 24,
    shadowOpacity: 1,
    borderWidth: 1,
    borderColor: "rgba(241, 241, 241, 1.0)",
    position: "absolute",
    bottom: 0,
  },
  boxed: {
    height: "fit-content",
    gap: 12,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 14,
    marginTop: 130,
    position: "relative",
  },
  about: {
    borderTopWidth: 1,
    borderColor: "rgba(234, 234, 234, 1.0)",
    paddingVertical: 14,
    paddingHorizontal: 14,
    height: "fit-content",
  },
  description: {
    fontFamily: "Sora",
    fontSize: 16,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 16,
    color: "#2F2D2C",
    marginBottom: 10,
  },
  creatorImg: {
    width: "100%",
    height: 226,
    borderRadius: 16,
    marginBottom: 10,
    resizeMode: "cover",
  },
  creatorName: {
    height: 22,
    fontFamily: "Sora",
    fontSize: 22,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 22,
    color: "#2F2D2C",
  },
  available: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderTopLeftRadius: 12,
    backgroundColor: "rgba(2, 51, 13, 0.89)",
    position: "absolute",
    top: -6,
    left: 14,
    zIndex: 3,
  },
  contentType: {
    height: 18,
    fontFamily: "Sora",
    fontSize: 14,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 14,
    color: "#494444",
  },
  onlineStat: { width: 69, height: 19, marginBottom: 10 },
  textAbout: {
    fontFamily: "Sora",
    fontSize: 14,
    fontWeight: "400",
    color: "#9B9B9B",
    marginBottom: 14,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    resizeMode: "contain",
  },
  socialContain: {
    height: 50,
    gap: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  socialImg: {
    height: 30,
    width: 30,
    objectFit: "contain",
  },
  pill: {
    // display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-evenly",
    width: "90%",
    marginVertical: 24,
    backgroundColor: "#FFF",
    borderTopColor: "#fff",
    minHeight: 60,
    paddingVertical: 10,
    borderRadius: 20,
    boxShadow: " 0px 1px 12px 6px rgba(100, 151, 214, 0.60)",
  },
  pillIos: {
    shadowColor: "rgba(100, 151, 214, 0.60)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 12,
  },
  pillAndroid: {
    elevation: 6,
  },
});
