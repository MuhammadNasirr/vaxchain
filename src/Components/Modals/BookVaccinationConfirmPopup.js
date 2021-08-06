import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
} from "react-native";



export default function BookVaccinationConfirmPopup({ onClose, visible, buttonPress }) {
  return (
    <Modal
      transparent
      animationType="slide"

      visible={visible}
      onRequestClose={() => {
        onClose()
      }}>
      <View style={styles.modalBackGround}>

        <View style={{ width: '90%', backgroundColor: '#ffff', borderRadius: 20, paddingHorizontal: 5, paddingVertical: 30, }}>
          <Text style={{fontFamily:'Poppins-Regular', textAlign: 'center', color: 'grey', marginBottom: 20 }}>Please go to booking page{'\n'}to create new Schedule</Text>
          <View style={{ width: '100%', alignItems: 'center' }}>

            <View style={{ width: '90%', paddingHorizontal: 5 }}>
              <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                <Text style={{fontFamily:'Poppins-Regular', color: 'grey' }}>Location</Text>
                <Text style={{ fontFamily:'Poppins-Regular',backgroundColor: '#FFF5E9', width: 150, textAlign: 'right', paddingTop: 10, paddingRight: 20, borderRadius: 3, fontWeight: '600', height: 40 }}>Quenzen City</Text>
              </View>

              <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <Text style={{fontFamily:'Poppins-Regular', color: 'grey' }}>Vaccination Center</Text>
                <Text style={{fontFamily:'Poppins-Regular', backgroundColor: '#FFF5E9', width: 150, textAlign: 'right', paddingTop: 10, paddingRight: 20, borderRadius: 3, fontWeight: '600', height: 40 }}>Aratena Center</Text>
              </View>


              <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <Text style={{fontFamily:'Poppins-Regular', color: 'grey' }}>Date</Text>
                <Text style={{fontFamily:'Poppins-Regular', backgroundColor: '#FFF5E9', width: 150, textAlign: 'right', paddingTop: 10, paddingRight: 20, borderRadius: 3, fontWeight: '600', height: 40 }}>5-july-2021</Text>
              </View>

              <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <Text style={{ fontFamily:'Poppins-Regular',color: 'grey' }}>Time</Text>
                <Text style={{fontFamily:'Poppins-Regular', backgroundColor: '#FFF5E9', width: 150, textAlign: 'right', paddingTop: 10, paddingRight: 20, borderRadius: 3, fontWeight: '600', height: 40 }}>8:00 am</Text>
              </View>




            </View>


            <TouchableOpacity onPress={buttonPress} style={{ backgroundColor: '#F5914E', width: '90%', alignSelf: 'center', alignItems: 'center', paddingVertical: 12, borderRadius: 10, marginTop: 20 }}>
              <Text style={{ fontFamily:'Poppins-Regular',color: '#ffff', fontWeight: 'bold' }}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: 'space-around',
    height: "100%",
    width: "100%",
  },
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
