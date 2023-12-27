import { CommonActions } from "@react-navigation/native";

let navigator;

function setTopLevelNavigator(ref) {
  navigator = ref;
}

function navigate(routeName, params) {
  navigator.dispatch(CommonActions.navigate(routeName, params));
}

export default {
  navigate,
  setTopLevelNavigator,
};
