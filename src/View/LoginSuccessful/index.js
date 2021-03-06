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
import Thumb from '../../assets/images/thumb.png';

export default function LoginSuccessful({ navigation }) {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>

        <View style={{
          backgroundColor: '#ffff', width: '90%', justifyContent: 'center', alignItems: 'center', borderRadius: 15, paddingVertical: 20, shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 2.2,
          elevation: 1,
          marginVertical: 50
        }}>
          <Image source={Thumb} />
          <Text style={{ fontFamily: 'Poppins-Bold', fontSize: RFPercentage(3), color: '#F5914E', marginTop: 20 }}>congratulations!</Text>
          <Text style={{ fontFamily: 'Poppins-Regular', alignSelf: 'center', width: '80%', textAlign: 'center', marginTop: 10, color: 'grey' }}>your account is basic verified is now basic you can verify your account starting vaxchain pasportor book the vachination with local government unit </Text>
          <TouchableOpacity onPress={() => navigation.navigate('MainMenu')} activeOpacity={0.6} style={styles.singnUpButton}>
            <Text style={{ fontFamily: 'Rubik-Bold', color: "#fff", fontSize: 18 }}>Go to home</Text>
          </TouchableOpacity>
        </View>


        <View style={{
          backgroundColor: '#ffff', width: '90%', justifyContent: 'center', alignItems: 'center', borderRadius: 15, paddingVertical: 50, marginBottom: 20, shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 2.2,
          elevation: 3,
        }}>

          <Text style={{ fontFamily: 'Poppins-Bold', fontSize: RFPercentage(3), color: '#F5914E', }}>Unlock Your Digital Wallet</Text>
          <Text style={{ fontFamily: 'Poppins-Regular', alignSelf: 'center', width: '80%', textAlign: 'center', marginTop: 10, color: 'grey' }}>your account is basic verified is now basic you can verify your account starting vaxchain pasportor book the vachination with local government unit </Text>
          <TouchableOpacity onPress={() => navigation.navigate('IDVerification')} activeOpacity={0.6} style={styles.singnUpButton}>
            <Text style={{ fontFamily: 'Rubik-Bold', color: "#ffff", fontSize: 18 }}>Unlock - Verify ID</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F9",
    alignItems: "center",
    justifyContent: "center",
  },
  scroll: {
    fontFamily: 'Poppins-Regular', height: "100%", width: "100%", backgroundColor: '#F7F7F9'
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
    fontSize: RFPercentage(5),

    color: "#F5914E",
    marginBottom: 4,
  },
  titleTagline: {
    fontFamily: 'Poppins-Regular', textAlign: "center", fontWeight: "bold"
  },
  singnUpContainer: {
    fontFamily: 'Poppins-Regular',
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    flexDirection: 'row',
    marginTop: 50,
  },
  input: {
    fontFamily: 'Poppins-Regular',
    backgroundColor: "#F3F3F3",
    width: "50%",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  singnUpButton: {
    fontFamily: 'Poppins-Regular',
    backgroundColor: "#F5914E",
    width: "80%",
    height: 55,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  }
});
