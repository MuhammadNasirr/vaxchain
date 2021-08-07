import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Image
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Icon } from "react-native-elements/dist/icons/Icon";

export default function SelfieTake({ visible, onClose, isButton, icon, mainText, descriptionText }) {
  return (
    <Modal
      transparent
      animationType="slide"

      visible={visible}
      onRequestClose={() => {
        onClose()
      }}>
      <View style={styles.modalBackGround}>

        <View style={{ width: '90%', backgroundColor: '#ffff', borderRadius: 20, paddingBottom: 30, paddingTop: 10 }}>
          <View style={styles.header}>
            <TouchableOpacity style={{ backgroundColor: '#ECECEC', width: '10%', justifyContent: 'center', alignItems: 'center', borderRadius: 5, alignSelf: 'flex-end', margin: 10, paddingVertical: 5 }} onPress={() => onClose()}>
              <Entypo name="cross" size={20} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{ width: '100%', alignItems: 'center' }}>

            <Text style={{fontFamily:'Poppins-Regular', marginVertical: 10, fontSize: 24, textAlign: 'center',  color: '#F5914E', width: '70%' }}>
              How to Take the Correct Photo
            </Text>
            <Image source={require("../../assets/images/selfie1.png")} />

            <View style={{ flexDirection: 'row', alignItems: 'flex-start', width: '90%', marginVertical: 20 }}>
              <Icon type={"entypo"} name={"dot-single"} color={"#000"} size={30} />
              <Text style={{fontFamily:'Poppins-Regular', marginLeft: 10 }}>Please present the QR Code for your 2nd dose with the following schedule</Text>
            </View>
            <Image source={require("../../assets/images/selfie2.png")} />
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', width: '90%', marginVertical: 5 }}>
              <Icon type={"entypo"} name={"dot-single"} color={"#000"} size={30} />
              <Text style={{ fontFamily:'Poppins-Regular',marginLeft: 10 }}>Use your original ID. (Not a photocopy or scanned version)</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', width: '90%', marginVertical: 5 }}>
              <Icon type={"entypo"} name={"dot-single"} color={"#000"} size={30} />
              <Text style={{fontFamily:'Poppins-Regular', marginLeft: 10 }}>ID details should be the same with your profile</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', width: '90%', marginVertical: 5 }}>
              <Icon type={"entypo"} name={"dot-single"} color={"#000"} size={30} />
              <Text style={{fontFamily:'Poppins-Regular', marginLeft: 10 }}>Wait for 4 corners to light up when taking photo</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', width: '90%', marginVertical: 5 }}>
              <Icon type={"entypo"} name={"dot-single"} color={"#000"} size={30} />
              <Text style={{fontFamily:'Poppins-Regular', marginLeft: 10 }}>Place behind a dark background</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                onClose()
              }}
              style={{ backgroundColor: '#F5914E', width: '80%', alignSelf: 'center', alignItems: 'center', paddingVertical: 12, borderRadius: 15, marginTop: 20 }}>
              <Text style={{ fontFamily:'Poppins-Regular',color: '#ffff',  fontSize: 16, textTransform: 'uppercase' }}>{"GOT IT"}</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </Modal>
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
    fontFamily:'Poppins-Bold',
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
    fontFamily:'Poppins-Bold',
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
    backgroundColor: 'rgba(0,0,0,0.7)',
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
