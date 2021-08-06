import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
} from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';


export default function CustomModal({ visible, buttonPress, onClose, isButton, icon, buttonText, mainText, descriptionText }) {
  return (
    <Modal
      transparent
      animationType="slide"

      visible={visible}
      onRequestClose={() => {
        onClose()
      }}>
      <View style={styles.modalBackGround}>

        <View style={{ width: '80%', backgroundColor: '#ffff', borderRadius: 20, paddingBottom: 30, paddingTop: 10 }}>
          <View style={styles.header}>
            <TouchableOpacity style={{ backgroundColor: '#ECECEC', width: '10%', justifyContent: 'center', alignItems: 'center', borderRadius: 5, alignSelf: 'flex-end', margin: 10, paddingVertical: 5 }} onPress={() => onClose()}>
              <Entypo name="cross" size={20} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{ width: '100%', alignItems: 'center' }}>
            {icon}
            <Text style={{ marginVertical: 10, fontSize: 20, textAlign: 'center', fontWeight: 'bold', color: '#F5914E', width: '80%' }}>
              {mainText}
            </Text>
            <Text style={{ textAlign: 'center', width: '80%' }}>{descriptionText}</Text>
            {
              isButton &&
              <TouchableOpacity onPress={buttonPress} style={{ backgroundColor: '#F5914E', width: '80%', alignSelf: 'center', alignItems: 'center', paddingVertical: 12, borderRadius: 15, marginTop: 20 }}>
                <Text style={{ color: '#ffff', fontWeight: 'bold', fontSize: 16, textTransform: 'uppercase' }}>{buttonText}</Text>
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
