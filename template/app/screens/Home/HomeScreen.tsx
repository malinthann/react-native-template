import * as React from 'react'
import { View, Text } from 'react-native'
import _styles from '@styles'
import { styles } from './HomeStyle'
import SafeArea from 'components/SafeArea'

export interface Props {}

export default function HomeScreen(props: Props): React.ReactElement {
  return (
    <View style={_styles.flx1}>
      <SafeArea edges={'safeTop'}>
        <Text>Home Screen</Text>
      </SafeArea>
    </View>
  )
}
