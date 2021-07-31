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

export default function PhoneSignUp({ navigation }) {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        {/* Image Container */}
        <View style={styles.imageContainer}>
          <Image source={require("../../assets/images/logo-v.png")} style={styles.image} />
        </View>
        {/* Screen Title */}
        <View style={styles.screenTitleContainer}>
          <Text style={styles.title}>Welcome</Text>

          <Text style={styles.titleTagline}>
            To your Health Vaccination Platform
          </Text>
        </View>

        {/* EmailSignUp form  */}

        <View style={styles.singnUpContainer}>
          <Text
            style={styles.emailorphonenumber}
            onPress={() => navigation.navigate("EmailSignUp")}
          >
            SignUp With Email.
          </Text>
          <TextInput
          keyboardType='phone-pad' placeholder="Mobile Number"
            style={[styles.input, { marginTop: 5 }]}
          />

          <TextInput
            keyboardType="default"
            placeholder="Username"
            style={styles.input}
          />

          <TextInput
            keyboardType="default"
            secureTextEntry={true}
            placeholder="Assign Password"
            style={styles.input}
          />
          <TextInput
            keyboardType="default"
            secureTextEntry={true}
            placeholder="Confirm Password"
            style={styles.input}
          />

          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.singnUpButton}
            onPress={()=>navigation.navigate('mobileOTP')}
          >
            <Text style={{ fontWeight: "bold", color: "#ffff" }}>Sign Up</Text>
          </TouchableOpacity>
          {/* <View style={{backgroundColor:'#ffff',width:'80%',paddingVertical:15,borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:20}}>
            <Text style={{fontWeight:'bold',color:'#F5914E'}}>SignUp</Text>    
        </View> */}
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
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#F3F3F3",
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  singnUpButton:{
    backgroundColor: "#F5914E",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
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