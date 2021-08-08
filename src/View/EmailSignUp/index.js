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
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function EmailSignUp({ navigation }) {
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
                        onPress={() => navigation.navigate("PhoneSignUp")}
                    >
                        Sign up with Mobile no.
                    </Text>
                    <TextInput
                        placeholderTextColor="#8D8D8D"
                        color='black'
                        keyboardType="email-address"
                        placeholder="Email Address"
                        style={[styles.input, { marginTop: 5 }]}
                    />

                    <TextInput
                        placeholderTextColor="#8D8D8D"
                        color='black'
                        keyboardType="default"
                        placeholder="Username"
                        style={styles.input}
                    />

                    <TextInput
                        placeholderTextColor="#8D8D8D"
                        color='black'
                        keyboardType="default"
                        secureTextEntry={true}
                        placeholder="Assign Password"
                        style={styles.input}
                    />
                    <TextInput
                        placeholderTextColor="#8D8D8D"
                        color='black'
                        keyboardType="default"
                        secureTextEntry={true}
                        placeholder="Confirm Password"
                        style={styles.input}
                    />

                    <TouchableOpacity
                        activeOpacity={0.6}
                        style={styles.singnUpButton}
                        onPress={() => navigation.navigate('mobileOTP')}
                    >
                        <Text style={{ fontFamily: "Poppins-Bold", color: "#fff", fontSize: 18 }}>Sign Up</Text>
                    </TouchableOpacity>
                    {/* <View style={{backgroundColor:'#ffff',width:'80%',paddingVertical:15,borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:20}}>
            <Text style={{color:'#F5914E'}}>SignUp</Text>    
        </View> */}
                </View>
                <View style={{ width: '85%', marginTop: 50, marginBottom: 20, alignItems: 'flex-start', flexDirection: 'row', }}>
                    <Ionicons name="alert-circle" size={20} color="#F5914E" />
                    <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', marginLeft: 10, color: 'grey' }}>
                        This Information is used to identify Verification only and will be kept secure by Vaxchain in accordance with Republic act 10173 Data privacy act philippines</Text>
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
    scroll: {
        fontFamily: 'Poppins-Regular', height: "100%", width: "100%", backgroundColor: "#ffff"
    },
    imageContainer: {
        width: "50%", height: 200
    },
    image: {
        width: "100%", height: "100%", resizeMode: "contain"
    },
    screenTitleContainer: {
        fontFamily: 'Poppins-Bold',
        width: "100%", alignItems: "center"
    },
    title: {
        fontFamily: 'Poppins-Regular',
        fontSize: RFPercentage(5.5),
        fontFamily: 'Rubik-Bold',
        color: "#F5914E",
        marginBottom: 4,
    },

    titleTagline: {
        fontFamily: 'Poppins-Regular',
        width: "100%", alignItems: "center", textAlign: "center",
    },
    singnUpContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        marginTop: 50,
    },
    emailorphonenumber: {
        fontFamily: 'Poppins-Regular',
        color: "#F5914E",
        alignSelf: "flex-end",
        marginBottom: 10,
    },
    input: {
        backgroundColor: "#F3F3F3",
        width: "100%",
        height: 55,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop: 20,
        fontFamily: 'Poppins-Regular',
    },
    singnUpButton: {
        backgroundColor: "#F5914E",
        width: "100%",
        height: 55,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        fontFamily: 'Poppins-Regular',
    }
});
