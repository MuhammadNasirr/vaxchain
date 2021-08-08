
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


export default function ForgetPassword({ navigation }) {
    return (

        <View style={styles.container}>


            <View style={{ width: '100%', marginLeft: 30, marginTop: 40 }}>
                <Text
                    style={{
                        fontSize: RFPercentage(3),
                        fontFamily: 'Poppins-Bold',
                        color: '#F5914E',
                        textAlign: 'center',
                        marginBottom: 4,
                        alignSelf: 'flex-start',


                    }}
                > Forget Your Password?</Text>
                <Text style={{ lineHeight: 25, fontFamily: 'Poppins-Regular', alignSelf: 'flex-start', textAlign: 'justify', marginTop: 10, color: '#858585', fontSize: RFPercentage(2) }}> No Worries. Enter Your registered email. and {'\n'} we will send you password recovery {'\n'} instructions.</Text>


            </View>


            <View style={{ fontFamily: 'Poppins-Regular', alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: '20%' }}>
                <TextInput placeholderTextColor="#8D8D8D"
                    color='black' keyboardType='email-address' placeholder="Email Address" style={{ fontFamily: 'Poppins-Regular', backgroundColor: '#F3F3F3', width: '90%', height: 55, paddingHorizontal: 10, borderRadius: 10, fontFamily: 'Rubik-Regular' }} />

                <TouchableOpacity activeOpacity={0.6} style={{ fontFamily: 'Poppins-Regular', backgroundColor: '#F5914E', width: '90%', height: 55, borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginTop: 30 }}
                    onPress={() => {
                        navigation.navigate('CheckEmail')
                    }}
                >
                    <Text style={{ fontFamily: 'Rubik-Bold', color: '#fff', fontSize: 18 }}>Send reset email</Text>
                </TouchableOpacity>

            </View>


        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        fontFamily: 'Poppins-Regular',
    },


});
