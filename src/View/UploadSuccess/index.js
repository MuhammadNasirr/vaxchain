import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function UploadSuccess({ navigation }) {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('MainMenu')
    }, 3000);

  }, [])
  return (

    <View style={styles.container}>
      {/* Image Container */}

      <FontAwesome5 name="check-circle" size={RFPercentage(15)} color="#fff" />
      <Text style={styles.title}>Upload success</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F79150",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: RFPercentage(5),
    fontFamily:'Poppins-Bold',
    color: "#ffff",
    fontFamily:'Poppins-Regular',
  },

});
