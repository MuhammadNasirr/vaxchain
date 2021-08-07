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

export default function PhoneSignUp({ navigation }) {
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

        {/* EmailSignUp form  */}

        <View style={styles.singnUpContainer}>
          <Text
            style={styles.emailorphonenumber}
            onPress={() => navigation.navigate("EmailSignUp")}
          >
            Sign up with Email.
          </Text>
          <TextInput
            placeholderTextColor="#8D8D8D"
            color='black'
            keyboardType='phone-pad' placeholder="Mobile no."
            style={[styles.input, { marginTop: 5 }]}
          />

          <TextInput
            placeholderTextColor="#8D8D8D"
            color='black'
            keyboardType="default"
            placeholder="Username"
            style={styles.input}
          />

          <TextInput
            placeholderTextColor="#8D8D8D"
            color='black'
            keyboardType="default"
            secureTextEntry={true}
            placeholder="Assign Password"
            style={styles.input}
          />
          <TextInput
            placeholderTextColor="#8D8D8D"
            color='black'
            keyboardType="default"
            secureTextEntry={true}
            placeholder="Confirm Password"
            style={styles.input}
          />

          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.singnUpButton}
            onPress={() => navigation.navigate('mobileOTP')}
          >
            <Text style={{ fontFamily:'Poppins-Bold', color: "#ffff" }}>Sign Up</Text>
          </TouchableOpacity>
          {/* <View style={{backgroundColor:'#ffff',width:'80%',paddingVertical:15,borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:20}}>
            <Text style={{color:'#F5914E'}}>SignUp</Text>    
        </View> */}
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
    fontFamily: 'Poppins-Regular',
    fontSize: RFPercentage(5.5),
    fontFamily:'Rubik-Bold',
    color: "#F5914E",
    marginBottom: 4,
  },
  
  titleTagline: {
    // fontFamily: 'Poppins-Regular',
    width: "100%", alignItems: "center" , textAlign: "center", 
  },
  singnUpContainer: {
    fontFamily: 'Poppins-Regular',
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    marginTop: 50,
  },
  emailorphonenumber: {
    // fontFamily:'Poppins-Bold',
    color: "#F5914E",
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  input: {
    fontFamily: 'Poppins-Regular',
    backgroundColor: "#F3F3F3",
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  singnUpButton: {
    backgroundColor: "#F5914E",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  }
});



