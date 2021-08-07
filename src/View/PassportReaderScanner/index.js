import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function PassportReaderScanner({ navigation }) {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        {/* Image Container */}
        <View style={styles.imageContainer}>
          <Image
            // source={{uri:'https://www.pikpng.com/pngl/m/59-596262_wolf-png-logo-for-free-download-on-wolf.png'}}
            source={require("../../assets/images/logo-v.png")}
            style={styles.image} />
        </View>
        {/* Screen Title */}
        <View style={styles.screenTitleContainer}>
          <Text style={styles.title}>Passport Reader</Text>

          <Text style={styles.titleTagline}>
            Quixin city Health Office City Hall Gate !
          </Text>
        </View>

        {/* Login form  */}
        <View style={styles.LoginForm}>

          <Text>Scan Vacciation QR Code</Text>
          <MaterialCommunityIcons name="image-filter-center-focus-weak" size={RFPercentage(30)} color="#F5914E" />
          <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Regular', }}>Please Move your camera to capture QR Code from other devices</Text>

        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Poppins-Regular',
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  scroll: {
    fontFamily: 'Poppins-Regular', height: "100%", width: "100%", backgroundColor: "#ffff"
  },
  imageContainer: {
    fontFamily: 'Poppins-Regular', width: "50%", height: 200
  },
  image: {
    fontFamily: 'Poppins-Regular', width: "100%", height: "100%", resizeMode: "contain"
  },
  screenTitleContainer: {
    fontFamily: 'Poppins-Regular', width: "100%", alignItems: "center"
  },
  title: {
    fontSize: RFPercentage(3),
    fontFamily:'Poppins-Bold',
    color: "#F5914E",
    marginBottom: 4,
  },
  titleTagline: {
    fontFamily: 'Poppins-Regular', textAlign: "center", fontFamily:'Poppins-Bold', fontSize: RFPercentage(4),
  },
  LoginForm: {
    fontFamily: 'Poppins-Regular',
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 50,
  },
  input: {
    fontFamily: 'Poppins-Regular',
    backgroundColor: "#F3F3F3",
    width: "80%",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  passwordContainer: {
    fontFamily: 'Poppins-Regular',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F3F3F3",
    width: "80%",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  logInButton: {
    fontFamily: 'Poppins-Regular',
    backgroundColor: "#F5914E",
    width: "80%",
    paddingVertical: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  forgetPasswordText: {
    fontFamily: 'Poppins-Regular',
    color: "#F5914E",
    fontSize: RFPercentage(1.4),
    width: "35%",
  },
});
