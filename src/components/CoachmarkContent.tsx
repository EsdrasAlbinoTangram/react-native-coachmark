import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { CoachmarkContentProps } from '../types';

export default class CoachmarkContent extends Component<CoachmarkContentProps> {
  static defaultProps: Pick<CoachmarkContentProps, 'buttonText'> = {
    buttonText: 'OK',
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.message}>
          <Text style={styles.messageText}>{this.props.message || ''}</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{this.props.buttonText}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginHorizontal: 16,
    paddingVertical: 15,
    backgroundColor: '#FFF',
    flexDirection: 'column',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 150,
  },
  message: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    flex: 1,
  },
  messageText: {
    fontSize: 14,
    textAlign: 'center',
    //lineHeight: 22,
    letterSpacing: -0.15,
    height: 300,
  },
  button: {
    width: '90%',
    height: 35,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6347D2',
  },
  buttonText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
});
