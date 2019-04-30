import { createBottomTabNavigator } from "react-navigation"
import { HomeScreen } from "../screens/home-screen"
import { SettingsScreen } from "../screens/settings-screen"
import { AboutScreen } from "../screens/about-screen"

export const AppNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen,
    About: AboutScreen,
  },
  {
    initialRouteName: "Home",
  },
)
