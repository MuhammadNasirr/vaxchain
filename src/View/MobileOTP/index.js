
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


export default function MobileOTP({ navigation }) {
  return (
    <ScrollView style={{
      height: '100%', width: '100%', backgroundColor: '#ffff'
    }}>
      <View style={styles.container}>

        {/* Image Container */}
        <View style={{
          width: '50%', height: 200
        }}>
        </View>
        {/* Screen Title */}
        <View style={{
          width: '100%', alignItems: 'center'
        }}>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: RFPercentage(5),
              color: '#F5914E',
              textAlign: 'center',
              marginBottom: 4
            }}
          >Thank you for {'\n'} signing up</Text>


        </View>

        {/* Login form  */}
        <Text style={{textAlign:'center',color:'#858585',fontFamily:'Rubik-Regular'}}>Please enter the confirmation code sent{'\n'}to your mobile number</Text>
        <View style={{
          alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', width: '90%', marginTop: 50
        }}>

          <TextInput placeholderTextColor="#8D8D8D"
            color='black' keyboardType='phone-pad' maxLength={1} placeholder="" style={{
              fontFamily: 'Poppins-Regular', backgroundColor: '#F3F3F3', width: '15%', paddingVertical: 15, paddingHorizontal: 10, borderRadius: 2
              ,textAlign:'center',textAlignVertical:'center'
            }} />
          <TextInput placeholderTextColor="#8D8D8D"
            color='black' keyboardType='phone-pad' maxLength={1} placeholder="" style={{
              fontFamily: 'Poppins-Regular', backgroundColor: '#F3F3F3', width: '15%', paddingVertical: 15, paddingHorizontal: 10, borderRadius: 2
            ,textAlign:'center',textAlignVertical:'center'}} />
          <TextInput placeholderTextColor="#8D8D8D"
            color='black' keyboardType='phone-pad' maxLength={1} placeholder="" style={{
              fontFamily: 'Poppins-Regular', backgroundColor: '#F3F3F3', width: '15%', paddingVertical: 15, paddingHorizontal: 10, borderRadius: 2
            ,textAlign:'center',textAlignVertical:'center'}} />
          <TextInput placeholderTextColor="#8D8D8D"
            color='black' keyboardType='phone-pad' maxLength={1} placeholder="" style={{
              fontFamily: 'Poppins-Regular', backgroundColor: '#F3F3F3', width: '15%', paddingVertical: 15, paddingHorizontal: 10, borderRadius: 2
            ,textAlign:'center',textAlignVertical:'center'}} />
          <TextInput placeholderTextColor="#8D8D8D"
            color='black' keyboardType='phone-pad' maxLength={1} placeholder="" style={{
              fontFamily: 'Poppins-Regular', backgroundColor: '#F3F3F3', width: '15%', paddingVertical: 15, paddingHorizontal: 10, borderRadius: 2
            ,textAlign:'center',textAlignVertical:'center'}} />
          <TextInput placeholderTextColor="#8D8D8D"
            color='black' keyboardType='phone-pad' maxLength={1} placeholder="" style={{
              fontFamily: 'Poppins-Regular', backgroundColor: '#F3F3F3', width: '15%', paddingVertical: 15, paddingHorizontal: 10, borderRadius: 2
            ,textAlign:'center',textAlignVertical:'center'}} />

        </View>
        <TouchableOpacity onPress={() => navigation.navigate('BasicInformation')} style={{
          fontFamily: 'Poppins-Regular', backgroundColor: '#ffff', width: '80%', paddingVertical: 15, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 20
        }}>
          <Text style={{
            fontFamily: 'Poppins-Regular', color:'#858585', textAlign: 'center'
          }}>Didn't receive the code ? send {'\n'} again in <Text style={{
            fontFamily: 'Poppins-Regular', color: '#F5914E'
          }}>32</Text> Seconds  </Text>
        </TouchableOpacity>


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
