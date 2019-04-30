import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle, TextStyle } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"
import { color, timing } from "../../theme"

export interface SplashScreenProps extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  backgroundColor: color.primaryDarker,
}

const TEXT: TextStyle = {
  color: color.palette.white,
}

// @inject("mobxstuff")
@observer
export class SplashScreen extends React.Component<SplashScreenProps, {}> {
  performTimeConsumingTask = async () => new Promise(resolve => setTimeout(() => {
    resolve("result")
  }, timing.slow))

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask()

    if (data !== null) {
      console.tron.logImportant("Navigating to App")
      this.props.navigation.navigate("App")
    }
  }

  render() {
    return (
      <Screen style={ROOT} preset="fixedCenter">
        <Text style={TEXT} preset="header" tx="splashScreen.header" />
      </Screen>
    )
  }
}
