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
import Feather from 'react-native-vector-icons/Feather';

export default function IDVerificationScanDocument({ navigation }) {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <View style={{paddingVertical:20,backgroundColor: "#F79150",width:'100%',flexDirection:'row'}}>
          <View style={{width:'90%'}}>
          <Text style={{color: "#ffff",alignSelf:"center"}}>Scan Document</Text>
          </View>
          <View style={{width:'10%'}}>
          <TouchableOpacity style={{backgroundColor:"#EBEBEB",borderRadius:5,width:25,alignItems:'center',justifyContent:'center',marginLeft:'auto'}}>
            <Feather name="x" size={24} color="#F79150" />
          </TouchableOpacity>
          </View>
        </View>
        
        <View style={{backgroundColor:'#727272',paddingVertical:57,width:'100%',justifyContent:'center',alignItems:'center'}}>
          <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/6/6a/Greek_passport_biodata_page.png'}} 
          
          style={{width:'80%',height:450,resizeMode:'center'}}/>
        </View>


         <View style={{paddingVertical:20,backgroundColor: "#ffff",width:'100%'}}>
          
          <Text style={{color: "#F79150",alignSelf:"center"}}>Scan Document</Text>
          
          <Text style={{color: "grey",alignSelf:"center"}}>Place your document with in the frame untill all edges are aligned and captured automatically</Text>
          
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "space-between",
     
  },

  scroll: { height: "100%", width: "100%", backgroundColor: "#ffff" },
  imageContainer: { width: "50%", height: 200 },
  image: { width: "100%", height: "100%", resizeMode: "contain" },
  screenTitleContainer: { width: "100%", alignItems: "center" },
  title: {
    fontSize: RFPercentage(3),
    fontWeight: "bold",
    color: "#F5914E",
    marginBottom: 4,
  },
  titleTagline: { textAlign: "center", fontWeight: "bold",fontSize: RFPercentage(4), },
  LoginForm: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 50,
  },
  input: {
    backgroundColor: "#F3F3F3",
    width: "80%",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  passwordContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F3F3F3",
    width: "80%",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  logInButton: {
    backgroundColor: "#F5914E",
    width: "80%",
    paddingVertical: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  forgetPasswordText: {
    color: "#F5914E",
    fontSize: RFPercentage(1.4),
    width: "35%",
  },
});
