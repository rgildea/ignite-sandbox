import { createSwitchNavigator } from "react-navigation"
import { SplashScreen } from "../screens/splash-screen/splash-screen"
import { AppNavigator } from "./app-navigator"

export const RootNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  App: AppNavigator,
})
