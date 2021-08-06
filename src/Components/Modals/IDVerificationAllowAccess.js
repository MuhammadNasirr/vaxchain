import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Modal,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import Entypo from 'react-native-vector-icons/Entypo';


export default function IDVerificationAllowAccess({ visible }) {
  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={styles.modalBackGround}>
        <View style={{ width: '95%', backgroundColor: '#ffff', borderRadius: 20, paddingBottom: 20, paddingHorizontal: 5, paddingVertical: 10, alignItems: 'center' }}>
          <Entypo name="camera" size={RFPercentage(7)} color="#F79150" />
          <View style={{ width: '100%', alignItems: 'center', marginTop: 10 }}>
            <View style={{ width: '100%', paddingHorizontal: 5 }}>
              <Text style={{fontFamily:'Poppins-Regular', textAlign: 'center', fontWeight: 'bold', color: '#F79150' }}>
                Allow Vaxchian to take pictures{'\n'}and record videos ?
              </Text>
            </View>
            <TouchableOpacity style={{ backgroundColor: '#F5914E', width: '80%', alignSelf: 'center', alignItems: 'center', paddingVertical: 12, borderRadius: 10, marginTop: 20 }}>
              <Text style={{fontFamily:'Poppins-Regular', color: '#ffff', fontWeight: 'bold' }}>Allow</Text>
            </TouchableOpacity>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#F79150', marginTop: 10 }}>
              DENY
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
