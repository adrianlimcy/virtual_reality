import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-360';

export default class Panel extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to this world!
          </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 25,
    backgroundColor: 'black',
    borderColor: 'green',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});
