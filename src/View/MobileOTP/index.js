
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image , TextInput,ScrollView} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


export default function MobileOTP({navigation}) {
  return (
    <ScrollView style={{height:'100%',width:'100%',backgroundColor:'#ffff'}}>
    <View style={styles.container}>
        
        {/* Image Container */}
        <View style={{width:'50%',height:200}}>
            {/* <Image source={require('../../assets/images/logo-v.png')} style={{width:'100%',height:'100%',resizeMode:'contain'}}/> */}
        </View>
        {/* Screen Title */}
        <View style={{width:'100%',alignItems:'center'}}>
            <Text 
            style={{
                fontSize:RFPercentage(5),
                fontWeight:'bold',
                color:'#F5914E',
                textAlign:'center',
                marginBottom:4
            }}
            >Thank your for {'\n'} signing up</Text>
            
            
        </View>  
        
        {/* Login form  */}

        <View style={{alignItems:'center',justifyContent:'space-between',flexDirection:'row',width:'90%',marginTop:50}}>
        
            <TextInput keyboardType='phone-pad' placeholder="" style={{backgroundColor:'#F3F3F3',width:'15%',paddingVertical:15,paddingHorizontal:10,borderRadius:2}} />
            <TextInput keyboardType='phone-pad' placeholder="" style={{backgroundColor:'#F3F3F3',width:'15%',paddingVertical:15,paddingHorizontal:10,borderRadius:2}} />
            <TextInput keyboardType='phone-pad' placeholder="" style={{backgroundColor:'#F3F3F3',width:'15%',paddingVertical:15,paddingHorizontal:10,borderRadius:2}} />
            <TextInput keyboardType='phone-pad' placeholder="" style={{backgroundColor:'#F3F3F3',width:'15%',paddingVertical:15,paddingHorizontal:10,borderRadius:2}} />
            <TextInput keyboardType='phone-pad' placeholder="" style={{backgroundColor:'#F3F3F3',width:'15%',paddingVertical:15,paddingHorizontal:10,borderRadius:2}} />
            <TextInput keyboardType='phone-pad' placeholder="" style={{backgroundColor:'#F3F3F3',width:'15%',paddingVertical:15,paddingHorizontal:10,borderRadius:2}} />

            
            
            
            
        {/* <TouchableOpacity activeOpacity={0.6} style={{backgroundColor:'#F5914E',width:'100%',paddingVertical:15,borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:20}}>
            <Text style={{fontWeight:'bold',color:'#ffff'}}>Sign Up</Text>    
        </TouchableOpacity>      */}
        
        </View>
        <View style={{backgroundColor:'#ffff',width:'80%',paddingVertical:15,borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:20}}>
            <Text style={{fontWeight:'bold',color:'black',textAlign:'center'}}>Didn't receive the code ? send {'\n'} again in <Text style={{color:'#F5914E'}}>32</Text> Seconds  </Text>    
        </View>
      
      
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
