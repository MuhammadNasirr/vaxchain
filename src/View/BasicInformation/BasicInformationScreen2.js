import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Select } from "native-base";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function BasicInformation({ navigation }) {
  return (

    <View style={styles.container}>
      <View style={styles.singnUpContainer}>
        <Text
          style={styles.emailorphonenumber}

        >Basic Information
        </Text>

        <Text style={{ fontFamily: 'Poppins-Regular', width: '100%', color: 'grey', fontSize: 14 }}>
          Please fill up to verify yourr basic Information to access your vaccine paspport or to book for Vaccination
        </Text>
        <View style={styles.pickerView}>
          <Select mode={"dropdown"}
            variant={'unstyled'}
            placeholder={"Country"}
            style={styles.picker}>
            <Select.Item label="Country" value="Country" />
          </Select>
        </View>

        <View style={styles.pickerView}>
          <Select
            variant={'unstyled'}
            placeholder={"Province"}
            mode={"dropdown"} style={styles.picker}>
            <Select.Item label="Province" value="Province" />
          </Select>
        </View>

        <View style={styles.pickerView}>
          <Select mode={"dropdown"}
            variant={'unstyled'}
            placeholder={"City/Municipality"}
            style={styles.picker}
          >
            <Select.Item label="City/Municipality" value="City/Municipality" />
          </Select>
        </View>

        <View style={styles.pickerView}>
          <Select mode={"dropdown"}
            variant={'unstyled'}
            placeholder={"Barangey"}
            style={styles.picker}>
            <Select.Item label="Barangey" value="Barangey" />
          </Select>
        </View>

        <TextInput
          keyboardType="default"
          placeholderTextColor="#8D8D8D"
          color='black'
          placeholder="Street Address"
          style={styles.input}
        />
        <TextInput
          keyboardType="default"
          placeholderTextColor="#8D8D8D"
          color='black'
          placeholder="Postal Code"
          style={styles.input}
        />
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.singnUpButton}
          onPress={() => navigation.navigate('LoginSuccessful')}
        >
          <Text style={{ fontFamily: "Rubik-Bold", color: "#fff", fontSize: 18 }}>Continue</Text>
          <AntDesign name="right" size={16} color="#ffff" style={{ alignSelf: 'center', marginLeft: 5 }} />

        </TouchableOpacity>
        {/* <View style={{backgroundColor:'#ffff',width:'80%',paddingVertical:15,borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:20}}>
            <Text style={{color:'#F5914E'}}>SignUp</Text>    
        </View> */}
      </View>
      <View style={{ width: '85%', marginTop: 'auto', marginBottom: 30, alignItems: 'flex-start', flexDirection: 'row' }}>
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
    // width:'100%'
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
  picker: { color: "#858585", fontSize: 14, fontFamily: 'Poppins-Regular', borderWidth: 0 },
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
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  pickerView: {
    backgroundColor: "#F3F3F3",
    width: "100%",
    fontFamily: 'Poppins-Regular',
    height: 55,
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
