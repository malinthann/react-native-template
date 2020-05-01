import * as React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import _styles from '../../_styles';

export interface Props {
}

export default function HomeScreen(props: Props): React.ReactElement {
  return (
    <View style={_styles.flx1}>
      <SafeAreaView>
        <Text>Home Screen</Text>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({

});