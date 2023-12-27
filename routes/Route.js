import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import Login from "../screens/Login";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn } from "../redux/actions/products";
import ProductsList from "../screens/ProductsList";
import ProductDetail from "../screens/ProductDetail";

const Route = () => {
  const Stack = createNativeStackNavigator();
  const [isLoading, setIsLoading] = useState(false);
  const token = AsyncStorage.getItem("token");
  const { height, width } = useWindowDimensions();
  const [routeName, setRouteName] = React.useState();

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const shouldHideTab = true; // Set your condition here

  return isLoading ? (
    <Loader />
  ) : (
    <Stack.Navigator
      initialRouteName={"login"}
      screenOptions={{
        headerShown: false, // Hides the header for all screens
      }}
    >
      <Stack.Screen name="login" component={Login} />

      <Stack.Screen name="products_list" component={ProductsList} />
      <Stack.Screen name="product_details" component={ProductDetail} />
    </Stack.Navigator>
  );
};

export default Route;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    gap: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
});
