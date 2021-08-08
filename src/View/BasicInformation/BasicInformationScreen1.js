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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CalendarIcon from '../../assets/images/calendar-three.png';

export default function BasicInformationScreen1({ navigation }) {
  return (

    <View style={styles.container}>

      {/* Screen Title */}


      {/* EmailSignUp form  */}

      <View style={styles.singnUpContainer}>
        <Text
          style={styles.emailorphonenumber}

        >
          Basic Information
        </Text>

        <Text style={{ fontFamily: 'Poppins-Regular', marginBottom: 30, width: '100%', color: 'grey', fontSize: 14 }}>
          Please fill up to verify yourr basic Information to access your vaccine paspport or to book for Vaccination
        </Text>


        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput
            placeholderTextColor="#8D8D8D"
            color='black'
            placeholder="First Name"
            style={{
              fontFamily: 'Poppins-Regular',
              backgroundColor: "#F3F3F3",
              width: "48%",
              paddingHorizontal: 10,
              borderRadius: 10,
            }}
          />

          <TextInput
            placeholderTextColor="#8D8D8D"
            color='black'
            placeholder="Last Name"
            style={{
              backgroundColor: "#F3F3F3",
              fontFamily: 'Poppins-Regular',
              width: "48%",
              height: 55,
              paddingHorizontal: 10,
              borderRadius: 10,
            }}
          />

        </View>

        <View style={{ width: '100%', flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' }}>
          <TextInput
            placeholderTextColor="#8D8D8D"
            color='black'
            placeholder="Middle Name"
            style={{
              fontFamily: 'Poppins-Regular',
              backgroundColor: "#F3F3F3",
              width: "48%",
              height: 55,
              paddingHorizontal: 10,
              borderRadius: 10,
            }}
          />

          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: "#F3F3F3",
            width: "48%",
            height: 55,
            paddingHorizontal: 10,
            borderRadius: 10,
          }}>

            <TextInput
              placeholderTextColor="#8D8D8D"
              color='black'
              placeholder="Date of Birth"
              style={{
                width: '80%',
                marginTop: 5,
                fontFamily: 'Poppins-Regular',
              }}
            />
            <TouchableOpacity>
              <Image source={CalendarIcon} />
            </TouchableOpacity>
          </View>

        </View>

        <TextInput
          placeholderTextColor="#8D8D8D"
          color='black'

          keyboardType="default"
          placeholder="Nationality"
          style={styles.input}
        />

        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.singnUpButton}
          onPress={() => navigation.navigate('BasicInformationScreen2')}

        >
          <Text style={{ fontFamily: "Rubik-Bold", color: "#fff", fontSize: 18 }}>Continue</Text>
          <AntDesign name="right" size={16} color="#fff" style={{ alignSelf: 'center', marginLeft: 5, marginTop: 0 }} />

        </TouchableOpacity>

      </View>

      <View style={{ width: '85%', marginTop: 'auto', marginBottom: 30, alignItems: 'flex-start', flexDirection: 'row', }}>
        <Ionicons name="alert-circle" size={20} color="#F5914E" />
        <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', marginLeft: 10, color: 'grey' }}>
          This Information is used to identify Verification only and will be kept secure by Vaxchain in accordance with Republic act 10173 Data privacy act philippines</Text>
      </View>
    </View>

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
    fontFamily: 'Poppins-Bold',
    color: "#F5914E",
    marginBottom: 4,

  },
  titleTagline: { textAlign: "center", fontWeight: "bold" },
  singnUpContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    marginTop: 50,

  },
  emailorphonenumber: {
    color: "#F5914E",
    alignSelf: "flex-start",
    marginBottom: 15,
    fontSize: 22,
    fontFamily: 'Poppins-Bold',


  },
  input: {
    backgroundColor: "#F3F3F3",
    width: "100%",
    fontFamily: 'Poppins-Regular',
    height: 55,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  singnUpButton: {
    backgroundColor: "#F5914E",
    width: "100%",
    height: 55,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    flexDirection: 'row'
  }
});



