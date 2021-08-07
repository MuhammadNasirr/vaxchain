
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


export default function CheckEmail({ navigation }) {
    return (

        <View style={styles.container}>


            {/* Screen Title */}
            <View style={{ width: '100%', alignItems: 'center', marginLeft: 30, marginTop: 40 }}>
                <Text
                    style={{
                        fontFamily: 'Rubik-Bold',
                        fontSize: RFPercentage(3),
                        
                        color: '#F5914E',
                        textAlign: 'center',
                        marginBottom: 4,
                        alignSelf: 'flex-start',

                    }}
                > Check your email</Text>
                <Text style={{ fontFamily: 'Poppins-Regular', alignSelf: 'flex-start', textAlign: 'justify', marginTop: 10, color: 'grey', fontWeight: '100' }}> Recovery email with reset password {'\n'} instructions has been sent to {'\n'} joseabaadboifico@gmail.com </Text>
                <Text style={{ fontFamily: 'Poppins-Regular', alignSelf: 'flex-start', textAlign: 'justify', marginTop: 30, color: 'grey', fontWeight: '100' }}> if you don't see the password recovery email {'\n'} in your inbox , check your spam folder</Text>


            </View>

            {/* Login form  */}

            <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: '50%' }}>
                {/* <TextInput keyboardType='email-address' placeholder="Email Address" style={{backgroundColor:'#F3F3F3',width:'80%',paddingVertical:15,paddingHorizontal:10,borderRadius:10}} /> */}
                {/* <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', backgroundColor:'#F3F3F3',width:'80%',paddingVertical:15,paddingHorizontal:10,borderRadius:10,marginTop:20}} >
                <TextInput keyboardType='default' secureTextEntry={true} placeholder="Password" style={{width:'65%'}}/>
                <Text style={{color:'#F5914E',fontSize:RFPercentage(1.4),width:'35%'}} onPress={()=>navigation.navigate('forgetPassword')}>Forget Password ?</Text>    
            </View> */}

                <TouchableOpacity activeOpacity={0.6} style={{ backgroundColor: '#F5914E', width: '80%', paddingVertical: 15, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}
                    onPress={() => {
                        navigation.navigate('SetPassword')
                    }}
                >
                    <Text style={{ fontFamily: 'Rubik-Bold',  color: '#ffff' }}>Open email app</Text>
                </TouchableOpacity>
                <View style={{ backgroundColor: '#ffff', width: '80%', paddingVertical: 15, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <Text style={{ fontFamily: 'Rubik-Bold',  color: 'grey' }} onPress={() => navigation.navigate('EmailSignUp')}>Skip, I'll confirm Later</Text>
                </View>
            </View>
          


        </View>

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
