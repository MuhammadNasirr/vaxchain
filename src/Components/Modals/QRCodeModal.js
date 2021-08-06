import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function QRCodeModal({ visible, onClose, mainText, isButton, buttonText, descriptionText, buttonPress, icon }) {
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
            {icon}
            <Text style={{ marginVertical: 10, fontSize: 20, textAlign: 'center', fontWeight: 'bold', color: '#F5914E', width: '70%' }}>
              {mainText}
            </Text>
            <Text style={{ textAlign: 'center', width: '80%' }}>{descriptionText}</Text>
            <AntDesign name="qrcode" size={RFPercentage(18)} color="black" />


            <View style={{ width: '90%', paddingHorizontal: 5, marginTop: 20 }}>
              <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                <Text style={{ color: 'grey' }}>Location</Text>
                <Text style={{ backgroundColor: '#FFF5E9', width: 150, textAlign: 'right', paddingTop: 10, paddingRight: 20, borderRadius: 3, fontWeight: '600', height: 40 }}>Quenzen City</Text>
              </View>

              <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <Text style={{ color: 'grey' }}>Vaccination Center</Text>
                <Text style={{ backgroundColor: '#FFF5E9', width: 150, textAlign: 'right', paddingTop: 10, paddingRight: 20, borderRadius: 3, fontWeight: '600', height: 40 }}>Aratena Center</Text>
              </View>


              <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <Text style={{ color: 'grey' }}>Date</Text>
                <Text style={{ backgroundColor: '#FFF5E9', width: 150, textAlign: 'right', paddingTop: 10, paddingRight: 20, borderRadius: 3, fontWeight: '600', height: 40 }}>5-july-2021</Text>
              </View>

              <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <Text style={{ color: 'grey' }}>Time</Text>
                <Text style={{ backgroundColor: '#FFF5E9', width: 150, textAlign: 'right', paddingTop: 10, paddingRight: 20, borderRadius: 3, fontWeight: '600', height: 40 }}>8:00 am</Text>
              </View>
            </View>
            <Text style={{ color: 'grey', fontSize: 16, marginTop: 10, width: '80%', textAlign: 'center' }}>Please wait for the notification Confirming your booking Schedule</Text>
            {
              isButton ?
                <TouchableOpacity onPress={buttonPress} style={{ backgroundColor: '#F5914E', width: '80%', alignSelf: 'center', alignItems: 'center', paddingVertical: 12, borderRadius: 15, marginTop: 20 }}>
                  <Text style={{ color: '#ffff', fontWeight: 'bold', fontSize: 16, textTransform: 'uppercase' }}>{buttonText}</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={buttonPress} style={{ width: '100%', alignItems: 'center' }}>
                  <Text style={{ color: '#F5914E', width: '80%', textAlign: 'center', marginTop: 20, fontWeight: 'bold', textDecorationLine: 'underline', fontSize: 18 }}>Cancel</Text>
                </TouchableOpacity>
            }
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({

  Header: {
    width: "100%",
    position: 'absolute',
    top: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
