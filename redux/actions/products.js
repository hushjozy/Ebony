import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "../../constants/globalConstants";

export const getProductsList = (navigate, setIsLoading) => (dispatch) => {
  Promise.resolve().then(async () => {
    try {
      const response = await fetch(`${BASE_URL}products`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${await AsyncStorage.getItem("token")}`,
          sub_token: `${await AsyncStorage.getItem("token")}`,
        },
        credentials: "include",
      });
      if (!response.ok) {
        const error = await response.text();
        console.log(error);
        // Handle specific error messages from the server, if available
        const errorMessage = error;
        return false;
      } else {
        const data = await response.json();
        dispatch({
          type: "PRODUCTS_LIST",
          payload: data,
        });
        navigate("products_list");
        return data;
      }
    } catch (error) {
      setIsLoading(false);
      return false;
    }
  });
};
export const getAllBanners = (roleId) => (dispatch) => {
  Promise.resolve().then(async () => {
    try {
      const response = await fetch(`${BASE_URL}banners/${roleId}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${await AsyncStorage.getItem("token")}`,
          sub_token: `${await AsyncStorage.getItem("token")}`,
        },
        credentials: "include",
      });
      const data = await response.json();
      dispatch({
        type: "BANNERS",
        payload: data.banners,
      });
      // Handle response and dispatch actions accordingly
    } catch (error) {
      return false;
    }
  });
};
