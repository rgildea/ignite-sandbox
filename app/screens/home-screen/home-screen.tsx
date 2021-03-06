import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle, TextStyle } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"
import { color } from "../../theme"
import { Button } from "../../components/button"

export interface HomeScreenProps extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  backgroundColor: color.background,
}

const TEXT: TextStyle = {
  color: color.primaryDarker,
}
// @inject("mobxstuff")
@observer
export class HomeScreen extends React.Component<HomeScreenProps, {}> {
  render() {
    return (
      <Screen style={ROOT} preset="fixedCenter">
        <Text style={TEXT} preset="header" tx="homeScreen.header" />
        <Button onPress={() => this.props.navigation.popToTop}>
          <Text>Go To Splash</Text>
        </Button>
      </Screen>
    )
  }
}
