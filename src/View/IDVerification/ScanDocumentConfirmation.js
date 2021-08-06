import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { Header } from "../../Components";

export default function ScanDocumentConfirmation({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title={"Scan Document"} crossIcon={true} transparent={false} />


      <View style={{ backgroundColor: '#ffff', width: '100%', height: '65%', justifyContent: 'center', alignItems: 'center' }}>
        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Greek_passport_biodata_page.png' }}

          style={{fontFamily:'Poppins-Regular', width: '80%', height: 450, resizeMode: 'center' }} />
      </View>


      <View style={{fontFamily:'Poppins-Regular', paddingVertical: 20, backgroundColor: "#ffff", width: '100%', alignItems: 'center', justifyContent: 'center' }}>


        <Text style={{fontFamily:'Poppins-Regular', color: "grey", alignSelf: "center", marginBottom: 20 }}>Ensure that all the data in your document is readible and visible </Text>

        <TouchableOpacity onPress={() => navigation.navigate('Selfie')} style={{fontFamily:'Poppins-Regular', justifyContent: 'center', height: 50, backgroundColor: "#F79150", width: '80%', borderRadius: 15, alignSelf: 'center' }}>
          <Text style={{fontFamily:'Poppins-Regular', color: "#ffff", alignSelf: "center", fontWeight: 'bold' }}>Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('IDVerificationScanDocument')} style={{fontFamily:'Poppins-Regular', justifyContent: 'center', height: 50, backgroundColor: "transparent", width: '80%', borderRadius: 15, alignSelf: 'center', marginTop: 10, marginBottom: 20 }}>
          <Text style={{fontFamily:'Poppins-Regular', color: "#F79150", alignSelf: "center", fontWeight: 'bold' }}>Retake</Text>
        </TouchableOpacity>



      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    fontFamily:'Poppins-Regular',
  },
});
