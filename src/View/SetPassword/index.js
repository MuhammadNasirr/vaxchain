
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


export default function SetPassword({ navigation }) {
    return (

        <View style={styles.container}>


            {/* Screen Title */}
            <View style={{fontFamily:'Poppins-Regular', width: '100%', alignItems: 'center', marginLeft: 30, marginTop: 40 }}>
                <Text
                    style={{fontFamily:'Poppins-Regular',
                        fontSize: RFPercentage(3),
                        fontWeight: 'bold',
                        color: '#F5914E',
                        textAlign: 'center',
                        marginBottom: 4,
                        alignSelf: 'flex-start',

                    }}
                > Create New Password</Text>
                <Text style={{fontFamily:'Poppins-Regular', alignSelf: 'flex-start', textAlign: 'justify', marginTop: 10, color: 'grey', fontWeight: '100' }}> Email address joseabaadboifico@gmail.com </Text>



            </View>

            {/* Login form  */}

            <View style={{fontFamily:'Poppins-Regular', alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: '50%' }}>
                {/* <TextInput keyboardType='email-address' placeholder="Email Address" style={{fontFamily:'Poppins-Regular',backgroundColor:'#F3F3F3',width:'80%',paddingVertical:15,paddingHorizontal:10,borderRadius:10}} /> */}
                {/* <View style={{fontFamily:'Poppins-Regular',flexDirection:'row', justifyContent:'space-between', alignItems:'center', backgroundColor:'#F3F3F3',width:'80%',paddingVertical:15,paddingHorizontal:10,borderRadius:10,marginTop:20}} >
                <TextInput keyboardType='default' secureTextEntry={true} placeholder="Password" style={{fontFamily:'Poppins-Regular',width:'65%'}}/>
                <Text style={{fontFamily:'Poppins-Regular',color:'#F5914E',fontSize:RFPercentage(1.4),width:'35%'}} onPress={()=>navigation.navigate('forgetPassword')}>Forget Password ?</Text>    
            </View> */}
                <TextInput placeholderTextColor="#8D8D8D"
            color='black' keyboardType='default' placeholder="New Password" style={{fontFamily:'Poppins-Regular', backgroundColor: '#F3F3F3', width: '80%', paddingVertical: 15, paddingHorizontal: 10, borderRadius: 10 }} />
                <TextInput placeholderTextColor="#8D8D8D"
            color='black' keyboardType='default' placeholder="Re-type New Password" style={{fontFamily:'Poppins-Regular', backgroundColor: '#F3F3F3', width: '80%', paddingVertical: 15, paddingHorizontal: 10, borderRadius: 10, marginTop: 20 }} />
                <TouchableOpacity activeOpacity={0.6} style={{fontFamily:'Poppins-Regular', backgroundColor: '#F5914E', width: '80%', paddingVertical: 15, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}
                    onPress={() => {
                        navigation.navigate('setPassword')
                    }}
                >
                    <Text style={{fontFamily:'Poppins-Regular', fontWeight: 'bold', color: '#ffff' }}>Set New Password</Text>
                </TouchableOpacity>

            </View>
            {/* <View style={{fontFamily:'Poppins-Regular',backgroundColor:'#ffff',width:'80%',paddingVertical:15,borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:20}}>
            <Text style={{fontWeight:'bold',color:'black',textAlign:'center'}}>Didn't receive the code ? send {'\n'} again in <Text style={{color:'#F5914E'}}>32</Text> Seconds  </Text>    
        </View> */}


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
