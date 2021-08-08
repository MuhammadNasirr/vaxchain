
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
                <Text style={{ fontFamily: 'Poppins-Regular', alignSelf: 'flex-start', textAlign: 'justify', marginTop: 10, color: 'grey' }}> Recovery email with reset password {'\n'} instructions has been sent to {'\n'} joseabaadboifico@gmail.com </Text>
                <Text style={{ fontFamily: 'Poppins-Regular', alignSelf: 'flex-start', textAlign: 'justify', marginTop: 30, color: 'grey' }}> if you don't see the password recovery email {'\n'} in your inbox , check your spam folder</Text>


            </View>


            <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: '20%' }}>

                <TouchableOpacity activeOpacity={0.6} style={{ backgroundColor: '#F5914E', width: '90%', height: 55, borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}
                    onPress={() => {
                        navigation.navigate('SetPassword')
                    }}
                >
                    <Text style={{ fontFamily: 'Rubik-Bold', color: '#fff', fontSize: 18 }}>Open email app</Text>
                </TouchableOpacity>
                <View style={{ backgroundColor: '#ffff', width: '80%', height: 55, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <Text style={{ fontFamily: 'Rubik-Bold', color: 'grey', fontSize: 18 }} onPress={() => navigation.navigate('EmailSignUp')}>Skip, I'll confirm later</Text>
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
    },
});
