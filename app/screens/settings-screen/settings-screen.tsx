import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle, TextStyle } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"
import { color } from "../../theme"

export interface SettingsScreenProps extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  backgroundColor: color.background,
}

const TEXT: TextStyle = {
  color: color.primaryDarker,
}

// @inject("mobxstuff")
@observer
export class SettingsScreen extends React.Component<SettingsScreenProps, {}> {
  render() {
    return (
      <Screen style={ROOT} preset="fixedCenter">
        <Text style={TEXT} preset="header" tx="settingsScreen.header" />
      </Screen>
    )
  }
}
