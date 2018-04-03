/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import store from './Src/Store';
import MainScreen from './Src/Screens/MainScreen'

export default class App extends Component {
  render() {
    const MainNavigator = StackNavigator({
      main: {
        screen: MainScreen
      }
    })
    return (
      <Provider store = {store} >
        <MainNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
