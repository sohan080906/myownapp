import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import {AppTabNavigator} from './components/AppTabNavigator';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class App extends Component {
  render() {
    return (
        <AppContainer />
    );
  }
}

const SwitchNavigator = createSwitchNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  LoginScreen: { screen: LoginScreen },
  AppTabNavigator: { screen: AppTabNavigator },
});

const AppContainer = createAppContainer(SwitchNavigator);
