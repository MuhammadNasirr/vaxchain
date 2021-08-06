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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
          <MaterialCommunityIcons name="thumb-up" size={RFPercentage(10)} color="#F5914E" />
          <Text style={{ fontSize: RFPercentage(3), color: '#F5914E', fontWeight: 'bold' }}>congratulations!</Text>
          <Text style={{ alignSelf: 'center', width: '80%', textAlign: 'center', marginTop: 10, color: 'grey' }}>your account is basic verified is now basic you can verify your account starting vaxchain pasportor book the vachination with local government unit </Text>
          <TouchableOpacity onPress={() => navigation.navigate('MainMenu')} activeOpacity={0.6} style={styles.singnUpButton}>
            <Text style={{ fontWeight: "bold", color: "#ffff" }}>Go to home</Text>
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

          <Text style={{ fontSize: RFPercentage(3), color: '#F5914E', fontWeight: 'bold' }}>Unlock Your Digital Wallet</Text>
          <Text style={{ alignSelf: 'center', width: '80%', textAlign: 'center', marginTop: 10, color: 'grey' }}>your account is basic verified is now basic you can verify your account starting vaxchain pasportor book the vachination with local government unit </Text>
          <TouchableOpacity onPress={() => navigation.navigate('IDVerification')} activeOpacity={0.6} style={styles.singnUpButton}>
            <Text style={{ fontWeight: "bold", color: "#ffff" }}>Unlock Verify-Id</Text>
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
  scroll: { height: "100%", width: "100%", backgroundColor: '#F7F7F9' },
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
  singnUpContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    flexDirection: 'row',
    marginTop: 50,
  },
  emailorphonenumber: {
    fontWeight: "bold",
    color: "#F5914E",
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#F3F3F3",
    width: "50%",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  singnUpButton: {
    backgroundColor: "#F5914E",
    width: "80%",
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  }
});
