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
            to your Health Vaccination Platform
          </Text>
        </View>

        {/* Login form  */}
        <View style={styles.LoginForm}>
          <TextInput
            keyboardType="email-address"
            placeholder="Email address"
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
              style={[styles.input, { width: "70%" }]}
            />
            <Text
              style={styles.forgetPasswordText}
              onPress={() => navigation.navigate("forgetPassword")}
            >
              Forget Password?
            </Text>
          </View>

          <TouchableOpacity activeOpacity={0.6} style={styles.logInButton}
            onPress={() => navigation.navigate("MainMenu")}>
            <Text style={{ fontFamily: 'Rubik-Bold', color: "#fff", fontSize: 18 }}>Log in</Text>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: "#ffff",
              width: "80%",
              height: 55,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text
              style={{ fontFamily: 'Rubik-Bold', fontSize: 18, color: "#F5914E" }}
              onPress={() => navigation.navigate("EmailSignUp")}
            >
              Sign Up
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
    fontSize: RFPercentage(5.5),
    color: "#F5914E",
    marginBottom: 4,
    // fontFamily: 'Poppins-Bold'
    fontFamily: 'Rubik-Bold'
  },
  titleTagline: { textAlign: "center", },
  LoginForm: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 50,
    fontFamily: 'Poppins-Regular'
  },
  input: {
    backgroundColor: "#F3F3F3",
    width: "90%",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontFamily: 'Poppins-Regular'
  },
  passwordContainer: {
    backgroundColor: "#F3F3F3",
    width: "90%",
    color: 'black',
    paddingVertical: 3,
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
    width: "90%",
    height: 55,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  forgetPasswordText: {
    color: "#F5914E",
    fontSize: RFPercentage(1.4),
    width: "35%",
    fontFamily: 'Rubik-Regular'
  },
});
