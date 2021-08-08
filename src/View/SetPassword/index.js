
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";
import EyeIcon from "../../assets/images/eye.png";


export default function SetPassword({ navigation }) {
    return (

        <View style={styles.container}>
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
                > Create New Password</Text>
                <Text style={{ fontFamily: 'Poppins-Regular', alignSelf: 'flex-start', textAlign: 'justify', marginTop: 10, color: 'grey', fontWeight: '100' }}> Email address joseabaadboifico@gmail.com </Text>



            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: '20%' }}>
                <View
                    style={{
                        backgroundColor: '#F3F3F3',
                        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
                        width: '90%', height: 55, paddingHorizontal: 10, borderRadius: 10
                    }}
                >

                    <TextInput placeholderTextColor="#8D8D8D"
                        color='black' keyboardType='default' placeholder="New Password"
                        style={{
                            fontFamily: 'Poppins-Regular',
                            width: '90%'
                        }}
                    />
                    <TouchableOpacity>
                        <Image source={EyeIcon} />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        backgroundColor: '#F3F3F3', marginTop: 20,
                        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
                        width: '90%', height: 55, paddingHorizontal: 10, borderRadius: 10
                    }}
                >

                    <TextInput placeholderTextColor="#8D8D8D"
                        color='black' keyboardType='default' placeholder="Re-type New Password"
                        style={{
                            fontFamily: 'Poppins-Regular',
                            width: '90%'
                        }}
                    />
                    <TouchableOpacity>
                        <Image source={EyeIcon} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={0.6} style={{ backgroundColor: '#F5914E', width: '90%', height: 55, borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginTop: 30 }}
                    onPress={() => {
                        navigation.navigate('Login')
                    }}
                >
                    <Text style={{ fontFamily: 'Rubik-Bold', color: '#fff', fontSize: 18 }}>Set New Password</Text>
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
    },
});
