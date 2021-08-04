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
          <Text style={{textAlign:'center'}}>Please Move your camera to capture QR Code from other devices</Text>
          
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  scroll: { height: "100%", width: "100%", backgroundColor: "#ffff" },
  imageContainer: { width: "50%", height: 200 },
  image: { width: "100%", height: "100%", resizeMode: "contain" },
  screenTitleContainer: { width: "100%", alignItems: "center" },
  title: {
    fontSize: RFPercentage(3),
    fontWeight: "bold",
    color: "#F5914E",
    marginBottom: 4,
  },
  titleTagline: { textAlign: "center", fontWeight: "bold",fontSize: RFPercentage(4), },
  LoginForm: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 50,
  },
  input: {
    backgroundColor: "#F3F3F3",
    width: "80%",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  passwordContainer: {
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
    backgroundColor: "#F5914E",
    width: "80%",
    paddingVertical: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  forgetPasswordText: {
    color: "#F5914E",
    fontSize: RFPercentage(1.4),
    width: "35%",
  },
});
