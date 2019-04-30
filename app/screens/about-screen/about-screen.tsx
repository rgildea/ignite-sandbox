import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"
import { color } from "../../theme"

export interface AboutScreenProps extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
}

// @inject("mobxstuff")
@observer
export class AboutScreen extends React.Component<AboutScreenProps, {}> {
  render() {
    return (
      <Screen style={ROOT} preset="fixedCenter">
        <Text preset="header" tx="aboutScreen.header" />
      </Screen>
    )
  }
}
