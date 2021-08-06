import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Header } from "../../Components";

export default function Selfie({ navigation }) {
  return (
    <View style={styles.container}>

      <Header title={"Get Ready for your Selfie"} crossIcon={true} transparent={false} />


      <View style={{fontFamily:'Poppins-Regular', backgroundColor: '#ffff', height: '65%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require("../../assets/images/selfie.png")}

          style={{fontFamily:'Poppins-Regular', width: '80%', height: 200, resizeMode: 'center' }} />
      </View>


      <View style={{fontFamily:'Poppins-Regular', paddingVertical: 20, backgroundColor: "#ffff", width: '100%', alignItems: 'center', justifyContent: 'center' }}>


        <Text style={{fontFamily:'Poppins-Regular', color: "grey", alignSelf: "center", marginBottom: 20 }}>please frame your face in a square</Text>

        <TouchableOpacity onPress={() => navigation.navigate('UploadSuccess')} style={{fontFamily:'Poppins-Regular', justifyContent: 'center', height: 50, backgroundColor: "#F79150", width: '80%', borderRadius: 15, alignSelf: 'center' }}>
          <Text style={{fontFamily:'Poppins-Regular', color: "#ffff", alignSelf: "center", fontWeight: 'bold' }}>TAKE SELFIE</Text>
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
