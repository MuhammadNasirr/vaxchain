import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Alert,
  Modal,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Home({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../../assets/images/imageback.png")}
    >
      <View style={styles.container}>
        {/* Header */}
        <View
          style={styles.Header}
        >
          <View style={styles.drawericonView}>
            <TouchableOpacity onPress={() => navigation.openDrawer()} activeOpacity={0.8}>
              <MaterialCommunityIcons
                name="menu-open"
                size={24}
                color="#ffff"
              />
            </TouchableOpacity>
          </View>
          <View
            style={styles.headerTitleView}
          >
            <Text
              style={styles.HeaderTitle}
            >
              VaxChain Passport
            </Text>
          </View>
          <View
            style={styles.headerIconsView}
          >
            <TouchableOpacity
              style={styles.headerIcon}
              activeOpacity={0.8}
              onPress={() => setModalVisible(true)}
            >
              <SimpleLineIcons name="bell" size={24} color="#F5914E" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.headerIcon}
              activeOpacity={0.8}
            >
              <MaterialIcons name="perm-identity" size={24} color="#F5914E" />
            </TouchableOpacity>
          </View>
        </View>

        {/* body */}
        <View style={styles.body}>
          <Text
            style={styles.bodyTitle}
          >
            Jose Abad Bonifico
          </Text>
          <Text style={styles.BodySubTitle}>
            Passport no: <Text style={{ fontWeight: "bold" }}>EB1221213</Text>
          </Text>

          <View
            style={styles.vaccinationView}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("VaxchainPassportReaderPersonalInformation")}
              style={styles.bookandRecordVaccination}
            >
              <Fontisto
                name="injection-syringe"
                size={RFPercentage(5)}
                color="#F5914E"
              />
              <Text
                style={styles.bookandRecordVaccinationText}
              >
                Vaccination{"\n"}Record
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Booking")}
              style={styles.bookandRecordVaccination}
            >
              <FontAwesome
                name="calendar"
                size={RFPercentage(5)}
                color="#F5914E"
              />
              <Text
                style={styles.bookandRecordVaccinationText}
              >
                Book{"\n"}Vaccination
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.qrCodeContainer}>
            <Text style={styles.qrCodeHeading}>QR Codes</Text>
            <View style={styles.qrCodeView}>
              <View style={styles.qrCode}>
                <AntDesign name="qrcode" size={RFPercentage(12)} color='#333333' />
                <Text style={styles.qrCodeText}>COVID-19{'\n'}vaccine</Text>
              </View>
              <View style={styles.qrCode}>
                <AntDesign name="qrcode" size={RFPercentage(12)} color='#333333' />
                <Text style={styles.qrCodeText}>Manda Track</Text>
              </View>
              <View style={styles.qrCode}>
                <AntDesign name="qrcode" size={RFPercentage(12)} color='#333333' />
                <Text style={styles.qrCodeText}>Kyusi Pass</Text>
              </View>

            </View>
          </View>
        </View>
      </View>
      <Modal
        transparent
        animationType="slide"

        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.modalBackGround}>

          <View style={{ width: '80%', backgroundColor: '#ffff', borderRadius: 20, paddingBottom: 20 }}>
            <View style={styles.header}>
              <TouchableOpacity style={{ backgroundColor: '#ECECEC', width: '10%', justifyContent: 'center', alignItems: 'center', borderRadius: 5, alignSelf: 'flex-end', margin: 10, paddingVertical: 5 }} onPress={() => setModalVisible(false)}>
                <Entypo name="cross" size={20} color="black" />
              </TouchableOpacity>
            </View>
            <View style={{ width: '100%', alignItems: 'center' }}>
              <Fontisto name="injection-syringe" size={RFPercentage(10)} color="#F5914E" />
              {/* <Ionicons name="md-thumbs-up-outline" size={RFPercentage(10)} color="#F5914E" /> */}
              {/* <MaterialCommunityIcons name="party-popper" size={RFPercentage(10)} color="#F5914E" /> */}
              <Text style={{ marginVertical: 10, fontSize: 20, textAlign: 'center', fontWeight: 'bold', color: '#F5914E' }}>
                {/* You are Cancelling your{'\n'}Booking appointment,{'\n'}Please Confirm */}
                {/* Congratulation you have{'\n'}already Completed your{'\n'}Covid-19 Vaccination */}
                {/* You Booking Cancelling your{'\n'}Booking appointment,{'\n'}please confirm  */}
                {/* You information{'\n'}is being Processed. */}
                You have  Cancelled your{'\n'}Booking appointment
              </Text>
              <Text style={{ textAlign: 'center', }}>Please go to booking page{'\n'}to create new Schedule</Text>
              <TouchableOpacity style={{ backgroundColor: '#F5914E', width: '80%', alignSelf: 'center', alignItems: 'center', paddingVertical: 12, borderRadius: 10, marginTop: 20 }}>
                {/* <Text style={{color:'#ffff',fontWeight:'bold'}}>Cancel</Text> */}
                {/* <Text style={{color:'#ffff',fontWeight:'bold'}}>Go to Passport</Text> */}
                <Text style={{ color: '#ffff', fontWeight: 'bold' }}>Go to Home</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* <View style={{alignItems: 'center'}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Image
                // source={require('./assets/x.png')}
                style={{height: 30, width: 30}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <Image
            // source={require('./assets/success.png')}
            style={{height: 150, width: 150, marginVertical: 10}}
          />
        </View> */}




        </View>
      </Modal>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    //  backgroundColor: "#ffff",
    alignItems: "center",
    // justifyContent: "center",
    // justifyContent:'space-between',
    justifyContent: 'space-around',
    // backgroundColor: "red",
    height: "100%",
    //  marginTop:20,
    width: "100%",
  },

  scroll: { height: "100%", width: "100%", backgroundColor: "#ffff" },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  Header: {
    width: "100%",
    position: 'absolute',
    top: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  drawericonView: { width: "10%", alignItems: "center" },
  headerTitleView: {
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
  },
  HeaderTitle: {
    color: "#ffff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: RFPercentage(2),
    alignSelf: "center",
  },
  headerIconsView: {
    flexDirection: "row",
    width: "20%",
    justifyContent: "space-around",
  },

  headerIcon: { backgroundColor: "#ffff", borderRadius: 5, padding: 5 },
  body: { width: "100%", alignItems: "center", marginTop: 100 },
  bodyTitle: {
    color: "#ffff",
    fontWeight: "bold",
    fontSize: RFPercentage(3),
  },
  BodySubTitle: { color: "#ffff", fontSize: RFPercentage(1.8) },
  vaccinationView: { width: "100%", alignItems: "center", paddingVertical: 20 },
  bookandRecordVaccination: {
    backgroundColor: "#ffff",
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 25,
    borderRadius: 15,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.2,
    elevation: 3,
  },
  bookandRecordVaccinationText: {
    textAlign: "center",
    color: "#F5914E",
    fontSize: RFPercentage(2),
    marginTop: 20,
  },
  qrCodeContainer: { width: '100%', paddingVertical: 15 },
  qrCodeHeading: { color: '#F5914E', marginLeft: 10, fontWeight: 'bold' },
  qrCodeView: {
    width: '95%', backgroundColor: '#ffff', alignSelf: 'center', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5, paddingVertical: 10, shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.2,
    elevation: 2,
  },
  qrCode: { alignItems: 'center', justifyContent: 'center' },
  qrCodeText: { fontSize: RFPercentage(1.3), textAlign: 'center', color: '#333333' },
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  // header: {
  //   width: '100%',
  //   height: 40,
  //   alignItems: 'flex-end',
  //   justifyContent: 'center',
  // },
});
