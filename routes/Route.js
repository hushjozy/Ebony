import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import React from "react";
import Login from "../screens/Login";
import ProductsList from "../screens/ProductsList";
import ProductDetail from "../screens/ProductDetail";

const Route = () => {
  const Stack = createNativeStackNavigator();

  return (
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
