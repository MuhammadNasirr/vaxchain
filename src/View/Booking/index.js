import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    Picker
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Booking({ navigation }) {
    return (
        <ImageBackground
            style={styles.backgroundImage}
            source={require("../../assets/images/imageback.png")}
        >
            <View style={styles.container}>
                {/* Header */}
                <View
                    style={styles.Header}
                >
                    <View style={styles.drawericonView}>
                        <TouchableOpacity onPress={() => navigation.openDrawer()} activeOpacity={0.8}>
                            <MaterialCommunityIcons
                                name="menu-open"
                                size={24}
                                color="#ffff"
                            />
                        </TouchableOpacity>
                    </View>
                    <View
                        style={styles.headerTitleView}
                    >
                        <Text
                            style={styles.HeaderTitle}
                        >
                            VaxChain Passport
                        </Text>
                    </View>
                    <View
                        style={styles.headerIconsView}
                    >
                        <TouchableOpacity
                            style={styles.headerIcon}
                            activeOpacity={0.8}
                        >
                            <SimpleLineIcons name="bell" size={24} color="#F5914E" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.headerIcon}
                            activeOpacity={0.8}
                        >
                            <MaterialIcons name="perm-identity" size={24} color="#F5914E" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* body */}
                <View style={styles.body}>
                    <Text
                        style={styles.bodyTitle}
                    >
                        Book Vaccination
                    </Text>
                    <View style={{ backgroundColor: '#FDF6E8', borderRadius: 5 }}>
                        <Picker
                            // selectedValue={selectedValue}
                            style={{ height: 50, width: 150 }}
                        // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="COVID-19" value="COVID-19" />
                            <Picker.Item label="COVID-19" value="COVID-19" />
                        </Picker>

                    </View>

                    <View
                        style={styles.selectionView}
                    >
                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'95%'}}>
                            
                            <Text style={{ color: '#B0B0B0' }}>Select  Location</Text>
                            <View style={{ backgroundColor: '#FDF6E8', borderRadius: 5 }}>
                                <Picker
                                    // selectedValue={selectedValue}
                                    style={{ height: 40, width: 150 }}
                                // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="Quizin City" value="Quizin City" />
                                    <Picker.Item label="COVID-19" value="COVID-19" />
                                </Picker>

                            </View>
                        </View>


                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'95%',marginVertical:10}}>
                            
                            <Text style={{ color: '#B0B0B0' }}>Select  Vaccination{'\n'}Center</Text>
                            <View style={{ backgroundColor: '#FDF6E8', borderRadius: 5 }}>
                                <Picker
                                    // selectedValue={selectedValue}
                                    style={{ height: 40, width: 150 }}
                                // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="Quizin City" value="Quizin City" />
                                    <Picker.Item label="COVID-19" value="COVID-19" />
                                </Picker>

                            </View>
                        </View>


                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'95%',marginVertical:10}}>
                            
                            <Text style={{ color: '#B0B0B0' }}>Choose Schedule</Text>
                            <View style={{ backgroundColor: '#FDF6E8', borderRadius: 5 }}>
                                <Picker
                                    // selectedValue={selectedValue}
                                    style={{ height: 40, width: 150 }}
                                // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="Quizin City" value="Quizin City" />
                                    <Picker.Item label="COVID-19" value="COVID-19" />
                                </Picker>

                            </View>
                        </View>


                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'95%',marginVertical:10}}>
                            
                            <Text style={{ color: '#B0B0B0' }}>Choose Time</Text>
                            <View style={{ backgroundColor: '#FDF6E8', borderRadius: 5 }}>
                                <Picker
                                    // selectedValue={selectedValue}
                                    style={{ height: 40, width: 150 }}
                                // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="Quizin City" value="Quizin City" />
                                    <Picker.Item label="COVID-19" value="COVID-19" />
                                </Picker>

                            </View>
                        </View>



                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'95%',marginVertical:10}}>
                            
                            <Text style={{ color: '#B0B0B0' }}>Choose Time</Text>
                            <View style={{ backgroundColor: '#FDF6E8', borderRadius: 5 }}>
                                <Picker
                                    // selectedValue={selectedValue}
                                    style={{ height: 40, width: 150 }}
                                // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="Quizin City" value="Quizin City" />
                                    <Picker.Item label="COVID-19" value="COVID-19" />
                                </Picker>

                            </View>
                        </View>
                    </View>

                    {/* <View style={styles.qrCodeContainer}>
                <Text style={styles.qrCodeHeading}>QR Codes</Text>
                <View style={styles.qrCodeView}>
                    <View style={styles.qrCode}>
                        <AntDesign name="qrcode" size={RFPercentage(12)} color='#333333'/>
                        <Text style={styles.qrCodeText}>COVID-19{'\n'}vaccine</Text>
                    </View>
                    <View style={styles.qrCode}>
                        <AntDesign name="qrcode" size={RFPercentage(12)} color='#333333'/>
                        <Text style={styles.qrCodeText}>Manda Track</Text>
                    </View>
                    <View style={styles.qrCode}>
                        <AntDesign name="qrcode" size={RFPercentage(12)} color='#333333'/>
                        <Text style={styles.qrCodeText}>Kyusi Pass</Text>
                    </View>
                    
                </View>
          </View> */}
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        //  backgroundColor: "#ffff",
        alignItems: "center",
        // justifyContent: "center",
        // justifyContent:'space-between',
        justifyContent: 'space-around',
        // backgroundColor: "red",
        height: "100%",
        //  marginTop:20,
        width: "100%",
    },

    scroll: { height: "100%", width: "100%", backgroundColor: "#ffff" },
    backgroundImage: {
        flex: 1,
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    Header: {
        width: "100%",
        position: 'absolute',
        top: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    drawericonView: { width: "10%", alignItems: "center" },
    headerTitleView: {
        justifyContent: "center",
        alignItems: "center",
        width: "70%",
    },
    HeaderTitle: {
        color: "#ffff",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: RFPercentage(2),
        alignSelf: "center",
    },
    headerIconsView: {
        flexDirection: "row",
        width: "20%",
        justifyContent: "space-around",
    },

    headerIcon: { backgroundColor: "#ffff", borderRadius: 5, padding: 5 },
    body: { width: "100%", alignItems: "center", marginTop: 100 },
    bodyTitle: {
        color: "#ffff",
        fontWeight: "bold",
        fontSize: RFPercentage(3),
    },
    BodySubTitle: { color: "#ffff", fontSize: RFPercentage(1.8) },
    selectionView: { width: "85%", alignItems: "center", paddingVertical: 20, height: '85%', backgroundColor: '#fff', borderRadius: 20, marginTop: 10 },
    bookandRecordVaccination: {
        backgroundColor: "#ffff",
        width: "40%",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 25,
        borderRadius: 15,
        marginVertical: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2.2,
        elevation: 3,
    },
    bookandRecordVaccinationText: {
        textAlign: "center",
        color: "#F5914E",
        fontSize: RFPercentage(2),
        marginTop: 20,
    },
    qrCodeContainer: { width: '100%', paddingVertical: 15 },
    qrCodeHeading: { color: '#F5914E', marginLeft: 10, fontWeight: 'bold' },
    qrCodeView: {
        width: '95%', backgroundColor: '#ffff', alignSelf: 'center', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5, paddingVertical: 10, shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2.2,
        elevation: 2,
    },
    qrCode: { alignItems: 'center', justifyContent: 'center' },
    qrCodeText: { fontSize: RFPercentage(1.3), textAlign: 'center', color: '#333333' }
});
