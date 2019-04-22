import { AppRegistry, I18nManager, YellowBox } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

I18nManager.allowRTL(false);
YellowBox.ignoreWarnings(["Warning: ..."]);
console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
