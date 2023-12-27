import { store } from "./redux/store";
import { Provider } from "react-redux";
import Route from "./routes/Route";
import { NavigationContainer } from "@react-navigation/native";
import NavigationService from "./components/NavigationService";
import * as Font from "expo-font";
import { useEffect, useState } from "react";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      Inter: require("./assets/fonts/Inter.ttf"),
      Sora: require("./assets/fonts/Sora.ttf"),
      Moon: require("./assets/fonts/Moon.otf"),
      MoonBold: require("./assets/fonts/MoonBold.otf"),

      // Add more fonts if needed
    });
    setFontsLoaded(true);
  };
  useEffect(() => {
    if (!fontsLoaded) {
      loadFonts();
    }
  }, []);

  return (
    <Provider store={store}>
      {fontsLoaded && (
        <NavigationContainer
          ref={(navigatorRef) =>
            NavigationService.setTopLevelNavigator(navigatorRef)
          }
        >
          <Route />
        </NavigationContainer>
      )}
    </Provider>
  );
}
