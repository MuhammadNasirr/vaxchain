import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import React, { Component } from 'react';
import { AuthLoading, Onboarding, Login, EmailSignUp, CheckEmail, ForgetPassword,PhoneSignUp, MobileOTP, SetPassword } from '../View';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from "react-native-splash-screen";

class AppNavigator extends Component {


  componentDidMount() {
    SplashScreen.hide()
  }

  render() {
    const Stack = createStackNavigator();

    const MyTheme = {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: '#fff'
      },
    };

    return (
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator headerMode={"none"} initialRouteName={"AuthLoading"}>
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="AuthLoading" component={AuthLoading} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="EmailSignUp" component={EmailSignUp} />
          <Stack.Screen name="PhoneSignUp" component={PhoneSignUp} />
          <Stack.Screen name="mobileOTP" component={MobileOTP} />
          <Stack.Screen name="forgetPassword" component={ForgetPassword} />
          <Stack.Screen name="CheckEmail" component={CheckEmail} />
          <Stack.Screen name="SetPassword" component={SetPassword} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default AppNavigator;
