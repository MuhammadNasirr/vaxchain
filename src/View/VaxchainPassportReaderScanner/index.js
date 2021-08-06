import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

export default function VaxchainPassportReaderScanner({ navigation }) {

  useEffect(() => {
    navigation.addListener('focus', () => {
      setTimeout(() => {
        navigation.navigate('VaxchainPassportReaderPersonalInformation')
      }, 2000);
    });
    setTimeout(() => {
      navigation.navigate('VaxchainPassportReaderPersonalInformation')
    }, 2000);

  }, [])

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
        <Text style={styles.title}>Passport Reader</Text>
        {/* Screen Title */}
        <View style={styles.screenTitleContainer}>

          <Text style={styles.titleTagline}>
            Quixin city Health Office City Hall Gate !
          </Text>
        </View>

        {/* Login form  */}
        <View style={styles.LoginForm}>

          <Text>Scan Vacciation QR Code</Text>
          <Image
            style={{ marginVertical: 20 }}
            source={require("../../assets/images/scanner.png")}
          />
          {/* <MaterialCommunityIcons name="image-filter-center-focus-weak" size={RFPercentage(30)} color="#F5914E" /> */}
          <Text style={{ textAlign: 'center', width: '80%', marginTop: 20 }}>Please Move your camera to capture QR Code from other devices</Text>

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

  scroll: { height: "90%", width: "100%", backgroundColor: "#ffff" },
  imageContainer: { width: "50%", height: 50, marginTop: 40 },
  image: { width: "100%", height: "100%", resizeMode: "contain" },
  screenTitleContainer: { width: "100%", alignItems: "center" },
  title: {
    fontSize: RFPercentage(3),
    fontWeight: "bold",
    color: "#F5914E",
    marginBottom: 30,
  },
  titleTagline: { textAlign: "center", fontWeight: "bold", fontSize: RFPercentage(3), width: '80%' },
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