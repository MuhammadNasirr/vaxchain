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
                        SignUp With Mobile No.
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
                        onPress={()=>navigation.navigate('mobileOTP')}
                    >
                        <Text style={{ fontWeight: "bold", color: "#ffff" }}>Sign Up</Text>
                    </TouchableOpacity>
                    {/* <View style={{backgroundColor:'#ffff',width:'80%',paddingVertical:15,borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:20}}>
            <Text style={{fontWeight:'bold',color:'#F5914E'}}>SignUp</Text>    
        </View> */}
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
        fontFamily:'Poppins-Regular',
    fontFamily:'Poppins-Regular',
    },
fontFamily:'Poppins-Regular',    scroll: { fontFamily:'Poppins-Regular',height: "100%", width: "100%", backgroundColor: "#ffff" 
},
fontFamily:'Poppins-Regular',    imageContainer: {fontFamily:'Poppins-Regular', width: "50%", height: 200 
},
fontFamily:'Poppins-Regular',    image: {fontFamily:'Poppins-Regular', width: "100%", height: "100%", resizeMode: "contain" 
},
fontFamily:'Poppins-Regular',    screenTitleContainer: { fontFamily:'Poppins-Regular',width: "100%", alignItems: "center" 
},
    title: {
        fontSize: RFPercentage(5),
        fontWeight: "bold",
        color: "#F5914E",
        marginBottom: 4,
        fontFamily:'Poppins-Regular',
        fontFamily:'Poppins-Regular',
    fontFamily:'Poppins-Regular',
    },
fontFamily:'Poppins-Regular',    titleTagline: {fontFamily:'Poppins-Regular', textAlign: "center", fontWeight: "bold" 
},
    singnUpContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        marginTop: 50,
        fontFamily:'Poppins-Regular',
    fontFamily:'Poppins-Regular',
    },
    emailorphonenumber: {
        fontWeight: "bold",
        color: "#F5914E",
        alignSelf: "flex-end",
        marginBottom: 10,
        fontFamily:'Poppins-Regular',
    fontFamily:'Poppins-Regular',
    },
    input: {
        backgroundColor: "#F3F3F3",
        fontFamily:'Poppins-Regular',
        width: "100%",
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop: 20,
    fontFamily:'Poppins-Regular',
    },
    singnUpButton: {
        backgroundColor: "#F5914E",
        width: "100%",
        paddingVertical: 15,
        fontFamily:'Poppins-Regular',
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    fontFamily:'Poppins-Regular',
    }
});
