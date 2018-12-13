import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Setting',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Links</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
