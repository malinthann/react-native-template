import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import _styles from '../../_styles'

interface Props { }

export default ({ }: Props) => {
  return (
    <View style={_styles.flx1}>
      <SafeAreaView>
        <Text>Home Screen</Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {}
});
