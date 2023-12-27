import React, { useState } from "react";
import LabeledInput from "../components/LabeledInput";
import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import PrimeButton from "../components/PrimeButton";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/auth";
import Loader from "../components/Loader";
const Login = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const [payload, setPayload] = React.useState();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const loginInUser = async () => {
    // const base64String = encode(payload?.password);
    setIsLoading(true);
    dispatch(
      login(
        {
          username: payload?.username,
          password: payload?.password,
        },
        navigation.navigate,
        setIsLoading
      )
    );
  };
  return (
    <View style={[(styles.container, styles.darkBg), { height: height }]}>
      <View style={styles.boxed}>
        <Text
          style={{
            fontSize: 24,
            color: "#FFF",
            fontFamily: "Sora",
            fontWeight: "700",
          }}
        >
          Login
        </Text>
        <LabeledInput
          label={"Username"}
          type={"name-phone-pad"}
          placeholder="Enter your username"
          onInput={(value) =>
            setPayload((prevLoad) => {
              return { ...prevLoad, username: value };
            })
          }
        />
        <LabeledInput
          label={"Password"}
          type={"visible-password"}
          placeholder="Enter your  password"
          onInput={(value) =>
            setPayload((prevLoad) => {
              return { ...prevLoad, password: value };
            })
          }
        />
        <PrimeButton
          onPress={() => loginInUser()}
          buttonStyle={{ width: width * 0.7, marginTop: 20 }}
          text={"Login"}
        />
      </View>
      {isLoading && <Loader />}
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    gap: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  light: {
    backgroundColor: "#fff",
  },
  darkBg: {
    backgroundColor: "#10151C",
  },
  boxed: {
    height: 600,
    gap: 12,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 33,
    resizeMode: "contain",
  },
});
