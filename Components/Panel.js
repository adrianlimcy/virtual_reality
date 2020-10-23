import React from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';

export default class Panel extends React.Component {

  constructor () {
    super()
    this.state = {
      open: true,
      opacity: new Animated.Value(1)
    }
  }

  componentDidUpdate() {
    const { open, opacity } = this.state
    Animated.timing(opacity, {
      toValue: open ? 1 : 0,
      duration: 800
    }).start()
  }

  render() {
    const { opacity } = this.state
    return (
      <Animated.View style={[styles.panel, { opacity } ]}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to this world!
          </Text>
        </View>
        <VrButton
          onClick={()=> this.setState({open: false})}
          style={styles.closeButton}
          >
            <Text style={styles.close}>Close X</Text>
          </VrButton>
      </Animated.View>
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
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20
  },
  close: {
    fontSize: 40,
    color: 'black'
  }
});
