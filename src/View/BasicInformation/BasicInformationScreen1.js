import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function BasicInformationScreen1({ navigation }) {
  return (

    <View style={styles.container}>

      {/* Screen Title */}


      {/* EmailSignUp form  */}

      <View style={styles.singnUpContainer}>
        <Text
          style={styles.emailorphonenumber}

        >
          Basic Information
        </Text>

        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput
          placeholderTextColor="#8D8D8D"
            color='black'
            placeholder="First Name"
            style={{
              fontFamily:'Poppins-Regular',
              marginTop: 5, backgroundColor: "#F3F3F3",
              width: "48%",
              paddingVertical: 15,
              paddingHorizontal: 10,
              borderRadius: 10,
            }}
          />

          <TextInput
          placeholderTextColor="#8D8D8D"
            color='black'
            placeholder="Last Name"
            style={{
              marginTop: 5, backgroundColor: "#F3F3F3",
              width: "48%",
              paddingVertical: 15,
              paddingHorizontal: 10,
              borderRadius: 10,
            }}
          />

        </View>

        <View style={{ width: '100%', flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' }}>
          <TextInput
          placeholderTextColor="#8D8D8D"
            color='black'
            placeholder="Middle Name"
            style={{
              backgroundColor: "#F3F3F3",
              width: "48%",
              paddingVertical: 15,
              paddingHorizontal: 10,
              borderRadius: 10,
            }}
          />

          <TextInput
          placeholderTextColor="#8D8D8D"
            color='black'
            placeholder="Date of Birth"
            style={{
              marginTop: 5, backgroundColor: "#F3F3F3",
              width: "48%",
              paddingVertical: 15,
              paddingHorizontal: 10,
              borderRadius: 10,
            }}
          />

        </View>





        <TextInput
        placeholderTextColor="#8D8D8D"
            color='black'
          keyboardType="default"

          placeholder="Nationality"
          style={styles.input}
        />

        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.singnUpButton}
          onPress={() => navigation.navigate('BasicInformationScreen2')}

        >
          <Text style={{ fontWeight: "bold", color: "#ffff" }}>Continue</Text>
          <AntDesign name="right" size={16} color="#ffff" style={{ alignSelf: 'center', marginLeft: 5 }} />

        </TouchableOpacity>

      </View>

      <View style={{ width: '85%', marginTop: 'auto', marginBottom: 30, alignItems: 'flex-start', flexDirection: 'row', }}>
        <Ionicons name="alert-circle" size={20} color="#F5914E" />
        <Text style={{ fontSize: 14, marginLeft: 10, color: 'grey' }}>

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
  },
  scroll: { height: "100%", width: "100%", backgroundColor: "#ffff" },
  imageContainer: { width: "50%", height: 200 },
  image: { width: "100%", height: "100%", resizeMode: "contain" },
  screenTitleContainer: { width: "100%", alignItems: "center" },
  title: {
    fontSize: RFPercentage(5),
    fontWeight: "bold",
    color: "#F5914E",
    marginBottom: 4,

  },
  titleTagline: { textAlign: "center", fontWeight: "bold" },
  singnUpContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    marginTop: 50,

  },
  emailorphonenumber: {
    fontWeight: "bold",
    color: "#F5914E",
    alignSelf: "flex-start",
    marginBottom: 15,
    fontSize: 18,
    fontFamily:'Poppins-Regular',
    

  },
  input: {
    backgroundColor: "#F3F3F3",
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  singnUpButton: {
    backgroundColor: "#F5914E",
    width: "100%",
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    flexDirection: 'row'
  }
});




// import React from 'react';
// import { StyleSheet, Text, View,TouchableOpacity,Image , TextInput,ScrollView} from 'react-native';
// import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


// export default function App({navigation}) {
//   return (
//     <ScrollView style={{height:'100%',width:'100%',backgroundColor:'#ffff'}}>
//     <View style={styles.container}>

//         {/* Image Container */}
//         <View style={{width:'50%',height:200}}>
//             <Image source={require('../../assets/images/logo-v.png')} style={{width:'100%',height:'100%',resizeMode:'contain'}}/>
//         </View>
//         {/* Screen Title */}
//         <View style={{width:'100%',alignItems:'center'}}>
//             <Text 
//             style={{
//                 fontSize:RFPercentage(5),
//                 fontWeight:'bold',
//                 color:'#F5914E',
//                 marginBottom:4
//             }}
//             >Welcome</Text>

//             <Text style={{textAlign:'center',fontWeight:'bold'}}>To your Health Vaccination Platform</Text>    
//         </View>  

//         {/* Login form  */}

//         <View style={{alignItems:'center',justifyContent:'center',width:'80%',marginTop:50}}>
//         <Text style={{fontWeight:'bold',color:'#F5914E',alignSelf:'flex-end',marginBottom:10}} onPress={()=>navigation.navigate('EmailSignUp')}>SignUp With Email</Text>    
//             <TextInput keyboardType='phone-pad' placeholder="Mobile Number" style={{backgroundColor:'#F3F3F3',width:'100%',paddingVertical:15,paddingHorizontal:10,borderRadius:10}} />


//             <TextInput keyboardType='default'  placeholder="Username" style={{backgroundColor:'#F3F3F3',width:'100%',paddingVertical:15,paddingHorizontal:10,borderRadius:10,marginTop:20}} />

//             <TextInput keyboardType='default' secureTextEntry={true} placeholder="Assign Password" style={{backgroundColor:'#F3F3F3',width:'100%',paddingVertical:15,paddingHorizontal:10,borderRadius:10,marginTop:20}} />
//             <TextInput keyboardType='default' secureTextEntry={true} placeholder="Confirm Password" style={{backgroundColor:'#F3F3F3',width:'100%',paddingVertical:15,paddingHorizontal:10,borderRadius:10,marginTop:20}} />

//         <TouchableOpacity activeOpacity={0.6} style={{backgroundColor:'#F5914E',width:'100%',paddingVertical:15,borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:20}} onPress={()=>navigation.navigate('mobileOTP')}>
//             <Text style={{fontWeight:'bold',color:'#ffff'}}>Sign Up</Text>    
//         </TouchableOpacity>    
//         {/* <View style={{backgroundColor:'#ffff',width:'80%',paddingVertical:15,borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:20}}>
//             <Text style={{fontWeight:'bold',color:'#F5914E'}}>SignUp</Text>    
//         </View> */}
//         </View>


//     </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
