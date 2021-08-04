import React, { useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { View, useWindowDimensions, TouchableOpacity, Text } from 'react-native';
import { AuthLoading, Onboarding, Login, EmailSignUp, CheckEmail, ForgetPassword, PhoneSignUp, MobileOTP, SetPassword, Wallet, Home, Booking, IDVerificationScanDocument, PassportReaderScanner, MyAccount, MyAccount1, Selfie, UploadSuccess, VerificationScanDocumentConfirmation } from '../View';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from "react-native-splash-screen";
import { RFPercentage } from "react-native-responsive-fontsize";
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff'
  },
};


function AppNavigator() {

  useEffect(() => {
    SplashScreen.hide()
  }, [])


  return (
    <NavigationContainer theme={MyTheme} >
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
        <Stack.Screen name="MainMenu" component={MainMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeStack() {

  return (
    <Stack.Navigator headerMode={"none"} initialRouteName={"Home"}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="IDVerificationScanDocument" component={IDVerificationScanDocument} />
      <Stack.Screen name="PassportReaderScanner" component={PassportReaderScanner} />
      <Stack.Screen name="MyAccount" component={MyAccount} />
      <Stack.Screen name="MyAccount1" component={MyAccount1} />
      <Stack.Screen name="Selfie" component={Selfie} />
      <Stack.Screen name="UploadSuccess" component={UploadSuccess} />
      <Stack.Screen name="VerificationScanDocumentConfirmation" component={VerificationScanDocumentConfirmation} />
    </Stack.Navigator>
  );
}


function BottomNavigation() {
  return (


    <Tab.Navigator screenOptions={{
      swipeEnabled: true,
      animationEnabled: true,
      gestureEnabled: true,
    }}
      tabBarOptions={{
        activeTintColor: '#F5914E',
        inactiveTintColor: '#B3B3B3',
        labelStyle: {
          fontSize: RFPercentage(1.5),
        },
        style: {
          backgroundColor: '#ffff',
          height: 50,

        },
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} options={{ tabBarIcon: ({ color }) => (<Entypo name="home" size={25} color={color} />) }} />
      <Tab.Screen name="Passport" component={EmailSignUp} options={{ tabBarIcon: ({ color }) => (<AntDesign name="qrcode" size={25} color={color} />) }} />
      <Tab.Screen name="Booking" component={Booking} options={{ tabBarIcon: ({ color }) => (<FontAwesome name="calendar" size={25} color={color} />) }} />
      <Tab.Screen name="Wallet" component={Wallet} options={{ tabBarIcon: ({ color }) => (<Entypo name="wallet" size={25} color={color} />) }} />
    </Tab.Navigator>


  );
}


const CustomDrawer = (props) => {
  return (
    <View style={{ backgroundColor: '#EC5317', flex: 1 }}>
      <DrawerContentScrollView>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()} activeOpacity={0.8}
          style={{ marginLeft: 10, marginTop: 8 }}
        >
          <MaterialCommunityIcons
            name="menu-open"
            size={24}
            color="#ffff"

          />
        </TouchableOpacity>
        <View style={{ alignSelf: 'center', width: '100%', marginTop: 30 }}>
          <TouchableOpacity onPress={() => props.navigation.navigate('MyAccount')} style={{ alignSelf: 'center', width: '70%', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: '#ffff' }}>
              My Vaccination Details
            </Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="#ffff" />
          </TouchableOpacity>
          <TouchableOpacity style={{ alignSelf: 'center', width: '70%', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15, marginBottom: 0 }}>
            <Text style={{ color: '#ffff' }}>
              Legal
            </Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="#ffff" />
          </TouchableOpacity>
          <TouchableOpacity style={{ alignSelf: 'center', width: '70%', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 }}>
            <Text style={{ color: '#ffff' }}>
              Change Password
            </Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="#ffff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')} style={{ alignSelf: 'center', width: '70%', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: '#ffff' }}>
              Logout
            </Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="#ffff" />
          </TouchableOpacity>

        </View>
        <DrawerItemList {...props}
          activeTintColor='#f43f5e'
        />
      </DrawerContentScrollView>
    </View>


  )

}

function MainMenu() {
  const dimensions = useWindowDimensions();
  const drawerType = dimensions.width >= 700 ? 'permanent' : 'front'
  return (
    <Drawer.Navigator initialRouteName="Home"

      drawerStyle={{
      }}
      drawerType={drawerType}
      edgeWidth={100}
      drawerContent={(props) => <CustomDrawer {...props} />}
      drawerContentOptions={{
        labelStyle: { fontSize: RFPercentage(1.5) }
      }}
    >
      <Drawer.Screen name="Home" component={BottomNavigation} />
      {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
    </Drawer.Navigator>
  )
}

export default AppNavigator;
