import * as React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import _styles from '../../_styles'

interface Props {}

interface State {}

export default class HomeScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View style={_styles.flx1}>
                <Text>Okay</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
