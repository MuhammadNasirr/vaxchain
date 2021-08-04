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
            style={styles.input}
          />
          <View style={styles.passwordContainer}>
            <TextInput
              keyboardType="default"
              secureTextEntry={true}
              placeholder="Password"
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
            <Text style={{ fontWeight: "bold", color: "#ffff" }}>Log In</Text>
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
              style={{ fontWeight: "bold", color: "#F5914E" }}
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
  },

  scroll: { height: "100%", width: "100%", backgroundColor: "#ffff" },
  imageContainer: { width: "50%", height: 200 },
  image: { width: "100%", height: "100%", resizeMode: "contain" },
  screenTitleContainer: { width: "100%", alignItems: "center" },
  title: {
    fontSize: RFPercentage(5),
    fontWeight: "bold",
    color: "#F5914E",
    marginBottom: 4,
  },
  titleTagline: { textAlign: "center", fontWeight: "bold" },
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
