
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


export default function MobileOTP({ navigation }) {
  return (
    <ScrollView style={{
      fontFamily:'Poppins-Regular', height: '100%', width: '100%', backgroundColor: '#ffff' }}>
      <View style={styles.container}>

        {/* Image Container */}
        <View style={{
          fontFamily:'Poppins-Regular', width: '50%', height: 200 }}>
        </View>
        {/* Screen Title */}
        <View style={{
          fontFamily:'Poppins-Regular', width: '100%', alignItems: 'center' }}>
          <Text
            style={{
              fontFamily:'Poppins-Regular',
              fontSize: RFPercentage(5),
              fontWeight: 'bold',
              color: '#F5914E',
              textAlign: 'center',
              marginBottom: 4
            }}
          >Thank your for {'\n'} signing up</Text>


        </View>

        {/* Login form  */}

        <View style={{
          fontFamily:'Poppins-Regular', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', width: '90%', marginTop: 50 }}>

          <TextInput placeholderTextColor="#8D8D8D"
            color='black' keyboardType='phone-pad' maxLength={1} placeholder="" style={{
              fontFamily:'Poppins-Regular', backgroundColor: '#F3F3F3', width: '15%', paddingVertical: 15, paddingHorizontal: 10, borderRadius: 2 }} />
          <TextInput placeholderTextColor="#8D8D8D"
            color='black' keyboardType='phone-pad' maxLength={1} placeholder="" style={{
              fontFamily:'Poppins-Regular', backgroundColor: '#F3F3F3', width: '15%', paddingVertical: 15, paddingHorizontal: 10, borderRadius: 2 }} />
          <TextInput placeholderTextColor="#8D8D8D"
            color='black' keyboardType='phone-pad' maxLength={1} placeholder="" style={{
              fontFamily:'Poppins-Regular', backgroundColor: '#F3F3F3', width: '15%', paddingVertical: 15, paddingHorizontal: 10, borderRadius: 2 }} />
          <TextInput placeholderTextColor="#8D8D8D"
            color='black' keyboardType='phone-pad' maxLength={1} placeholder="" style={{
              fontFamily:'Poppins-Regular', backgroundColor: '#F3F3F3', width: '15%', paddingVertical: 15, paddingHorizontal: 10, borderRadius: 2 }} />
          <TextInput placeholderTextColor="#8D8D8D"
            color='black' keyboardType='phone-pad' maxLength={1} placeholder="" style={{
              fontFamily:'Poppins-Regular', backgroundColor: '#F3F3F3', width: '15%', paddingVertical: 15, paddingHorizontal: 10, borderRadius: 2 }} />
          <TextInput placeholderTextColor="#8D8D8D"
            color='black' keyboardType='phone-pad' maxLength={1} placeholder="" style={{
              fontFamily:'Poppins-Regular', backgroundColor: '#F3F3F3', width: '15%', paddingVertical: 15, paddingHorizontal: 10, borderRadius: 2 }} />

        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('BasicInformation')} style={{
          fontFamily:'Poppins-Regular', backgroundColor: '#ffff', width: '80%', paddingVertical: 15, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
          <Text style={{
            fontFamily:'Poppins-Regular', fontWeight: 'bold', color: 'black', textAlign: 'center' }}>Didn't receive the code ? send {'\n'} again in <Text style={{
            fontFamily:'Poppins-Regular', color: '#F5914E' }}>32</Text> Seconds  </Text>
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
