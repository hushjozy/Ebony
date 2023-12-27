// import { isLoggedIn } from "./profile";
import { BASE_URL } from "../../constants/globalConstants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getProductsList } from "./products";

export const login = (payload, navigate, setIsLoading) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const error = await response.text();
      // Handle specific error messages from the server, if available
      const errorMessage = error;
      return false;
    } else {
      const data = await response.json();
      const token = data?.token;
      await AsyncStorage.setItem("token", token);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: token,
      });
      dispatch(getProductsList(navigate, setIsLoading));
    }
    return data;
  } catch (error) {
    setIsLoading(false);
    return false;
  }
};
