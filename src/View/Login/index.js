import React from "react";
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

export default function Login({ navigation }) {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        {/* Image Container */}
        <View style={styles.imageContainer}>
          <Image source={require("../../assets/images/logo-v.png")} style={styles.image} />
        </View>
        {/* Screen Title */}
        <View style={styles.screenTitleContainer}>
          <Text style={styles.title}>Welcome</Text>

          <Text style={styles.titleTagline}>
            To your Health Vaccination Platform
          </Text>
        </View>

        {/* Login form  */}
        <View style={styles.LoginForm}>
          <TextInput
            keyboardType="email-address"
            placeholder="Email Address"
            placeholderTextColor="#8D8D8D"
            color='black'
            style={styles.input}
          />
          <View style={styles.passwordContainer}>
            <TextInput
              keyboardType="default"
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor="#8D8D8D"
              color='black'
              style={{ width: "65%" }}
            />
            <Text
              style={styles.forgetPasswordText}
              onPress={() => navigation.navigate("forgetPassword")}
            >
              Forget Password ?
            </Text>
          </View>

          <TouchableOpacity activeOpacity={0.6} style={styles.logInButton}
            onPress={() => navigation.navigate("MainMenu")}>
            <Text style={{ fontFamily: 'Poppins-Bold', color: "#fff", fontSize: 16 }}>Log In</Text>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: "#ffff",
              width: "80%",
              paddingVertical: 15,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text
              style={{ fontFamily: 'Poppins-Bold', color: "#F5914E" }}
              onPress={() => navigation.navigate("EmailSignUp")}
            >
              SignUp
            </Text>
          </View>
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
    fontFamily: 'Poppins-Regular'
  },

  scroll: { height: "100%", width: "100%", backgroundColor: "#ffff", fontFamily: 'Poppins-Regular' },
  imageContainer: { width: "50%", height: 200, fontFamily: 'Poppins-Regular' },
  image: { width: "100%", height: "100%", resizeMode: "contain", fontFamily: 'Poppins-Regular' },
  screenTitleContainer: { width: "100%", alignItems: "center", fontFamily: 'Poppins-Regular' },
  title: {
    fontSize: RFPercentage(5),
    color: "#F5914E",
    marginBottom: 4,
    fontFamily: 'Poppins-Bold'
  },
  titleTagline: { textAlign: "center", fontFamily: 'Poppins-Regular' },
  LoginForm: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 50,
    fontFamily: 'Poppins-Regular'
  },
  input: {
    backgroundColor: "#F3F3F3",
    width: "80%",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontFamily: 'Poppins-Regular'
  },
  passwordContainer: {
    backgroundColor: "#F3F3F3",
    width: "80%",
    color: 'black',
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: 'Poppins-Regular',
    marginTop: 20,
  },
  logInButton: {
    backgroundColor: "#F5914E",
    width: "80%",
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  forgetPasswordText: {
    color: "#F5914E",
    fontSize: RFPercentage(1.4),
    width: "35%",
    fontFamily: 'Poppins-Regular'
  },
});
