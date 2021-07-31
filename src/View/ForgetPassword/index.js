
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


export default function ForgetPassword({ navigation }) {
    return (

        <View style={styles.container}>


            {/* Screen Title */}
            <View style={{ width: '100%', alignItems: 'center', marginLeft: 30, marginTop: 40 }}>
                <Text
                    style={{
                        fontSize: RFPercentage(3),
                        fontWeight: 'bold',
                        color: '#F5914E',
                        textAlign: 'center',
                        marginBottom: 4,
                        alignSelf: 'flex-start',

                    }}
                > Forget Your Password ?</Text>
                <Text style={{ alignSelf: 'flex-start', textAlign: 'justify', marginTop: 10, color: 'grey', fontWeight: '100' }}> No Worries. Enter Your registered email. and {'\n'} we will send you password recovery {'\n'} instructions.</Text>


            </View>

            {/* Login form  */}

            <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: '50%' }}>
                <TextInput keyboardType='email-address' placeholder="Email Address" style={{ backgroundColor: '#F3F3F3', width: '80%', paddingVertical: 15, paddingHorizontal: 10, borderRadius: 10 }} />
                {/* <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', backgroundColor:'#F3F3F3',width:'80%',paddingVertical:15,paddingHorizontal:10,borderRadius:10,marginTop:20}} >
                <TextInput keyboardType='default' secureTextEntry={true} placeholder="Password" style={{width:'65%'}}/>
                <Text style={{color:'#F5914E',fontSize:RFPercentage(1.4),width:'35%'}} onPress={()=>navigation.navigate('forgetPassword')}>Forget Password ?</Text>    
            </View> */}

                <TouchableOpacity activeOpacity={0.6} style={{ backgroundColor: '#F5914E', width: '80%', paddingVertical: 15, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}
                    onPress={() => {
                        navigation.navigate('CheckEmail')
                    }}
                >
                    <Text style={{ fontWeight: 'bold', color: '#ffff' }}>sent reset Email</Text>
                </TouchableOpacity>

            </View>
            {/* <View style={{backgroundColor:'#ffff',width:'80%',paddingVertical:15,borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:20}}>
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
