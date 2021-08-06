import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    Picker,
    Image
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from "react-native-gesture-handler";
import { Calendar } from "react-native-calendars";
import { BookVaccinationConfirmPopup, CustomModal, QRCodeModal } from "../../Components";

export default function Booking({ navigation }) {

    const [state, setState] = useState({
        isBooking: false,
        isConfirmed: false,
        isCompleted: false,
        isCompleted1: false,
        isCancel: false,
        isCanceled: false,
    })

    const isBookingModalClose = () => {
        setState(pre => ({ ...pre, isBooking: false }))
    }
    const isCompleted1ModalClose = () => {
        setState(pre => ({ ...pre, isCompleted1: false }))
    }

    const isConfirmedModalClose = () => {
        setState(pre => ({ ...pre, isConfirmed: false, isCompleted: true }))
    }
    const isCancelModalClose = () => {
        setState(pre => ({ ...pre, isCancel: false }))
    }
    const isCompletedModalClose = () => {
        setState(pre => ({ ...pre, isCompleted: false }))
    }
    const isCanceledModalClose = () => {
        setState(pre => ({ ...pre, isCanceled: false }))
    }

    const isCompleted = () => {
        setState(pre => ({ ...pre, isCompleted: false, isCompleted1: true }))
    }
    const isCompleted1 = () => {
        setState(pre => ({ ...pre, isCompleted1: false }))
    }
    const isCancel = () => {
        setState(pre => ({ ...pre, isConfirmed: false, isCancel: true }))
    }
    const isCanceled = () => {
        setState(pre => ({ ...pre, isCancel: false, isCanceled: true }))
    }
    const isConfirm = () => {
        setState(pre => ({ ...pre, isBooking: false, isConfirmed: true }))
    }
    const isConfirmed = () => {
        setState(pre => ({ ...pre, isBooking: false, isConfirmed: true }))
    }

    return (
        <ScrollView>
            <ImageBackground
                style={styles.backgroundImage}
                source={require("../../assets/images/imageHeader.png")}
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
                                onPress={() => navigation.navigate('Notifications')}
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
                </View>
            </ImageBackground>

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
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '95%' }}>

                        <Text style={{ color: '#B0B0B0' }}>Selection Location</Text>
                        <View style={{ backgroundColor: '#FDF6E8', borderRadius: 5 }}>
                            <Picker
                                mode={"dropdown"}
                                // selectedValue={selectedValue}
                                style={{ height: 40, minWidth: 200 }}
                            // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="Quizin City" value="Quizin City" />
                                <Picker.Item label="COVID-19" value="COVID-19" />
                            </Picker>

                        </View>
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '95%', marginVertical: 10 }}>

                        <Text style={{ color: '#B0B0B0' }}>Selection Vaccination{'\n'}Center</Text>
                        <View style={{ backgroundColor: '#FDF6E8', borderRadius: 5 }}>
                            <Picker
                                mode={"dropdown"}
                                // selectedValue={selectedValue}
                                style={{ height: 40, minWidth: 200 }}
                            // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="Araneta Center" value="Araneta Center" />
                                <Picker.Item label="COVID-19" value="COVID-19" />
                            </Picker>

                        </View>
                    </View>


                    <View style={{ width: '95%', marginVertical: 10 }}>

                        <Text style={{ color: '#B0B0B0' }}>Choose Schedule</Text>

                        <Calendar
                            current={new Date()}
                            minDate={new Date()}
                            maxDate={'2050-05-30'}
                            onDayPress={(day) => { console.log('selected day', day) }}
                            onDayLongPress={(day) => { console.log('selected day', day) }}
                            // monthFormat={'yyyy MM'}
                            pastScrollRange={0}
                            showScrollIndicator={true}
                            markingType="simple"
                            onMonthChange={(month) => { console.log('month changed', month) }}
                            // hideArrows={false}
                            firstDay={1}
                            onPressArrowLeft={subtractMonth => subtractMonth()}
                            onPressArrowRight={addMonth => addMonth()}
                            // disableArrowLeft={false}
                            // disableArrowRight={false}
                            disableAllTouchEventsForDisabledDays={false}
                        // renderHeader={(date) => {/*Return JSX*/ }}
                        // enableSwipeMonths={true}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '95%', marginVertical: 10 }}>

                        <Text style={{ color: '#B0B0B0' }}>Choose Time</Text>
                        <View style={{ backgroundColor: '#FDF6E8', borderRadius: 5 }}>
                            <Picker
                                // selectedValue={selectedValue}
                                style={{ height: 40, width: 200 }}
                            // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="8:00AM" value="8:00AM" />
                                <Picker.Item label="COVID-19" value="COVID-19" />
                            </Picker>

                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => setState(pre => ({ ...pre, isBooking: true }))}
                        activeOpacity={0.6} style={styles.logInButton}
                    >
                        <Text style={{ fontWeight: "bold", color: "#ffff", fontSize: 16 }}>Book now</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <BookVaccinationConfirmPopup
                visible={state.isBooking}
                onClose={isBookingModalClose}
                buttonPress={isConfirm}
            />
            <QRCodeModal
                visible={state.isConfirmed}
                onClose={isConfirmedModalClose}
                buttonPress={isCancel}
                isButton={false}
                buttonText={"Cancel"}
                icon={<Image source={require("../../assets/images/verification.png")} />}
                mainText={"You are on you way to be protected against COVID-19"}
                descriptionText={"Please present the QR Code for your 2nd dose with the following schedule"}
            />
            <QRCodeModal
                visible={state.isCompleted}
                onClose={isCompletedModalClose}
                buttonPress={isCompleted}
                isButton={true}
                buttonText={"Go to Passport"}
                icon={<Image source={require("../../assets/images/verified.png")} />}
                mainText={"You are on you way to be protected against COVID-19"}
                descriptionText={"Please present the QR Code for your 2nd dose with the following schedule"}
            />
            <CustomModal
                visible={state.isCancel}
                onClose={isCancelModalClose}
                buttonPress={isCanceled}
                isButton={true}
                buttonText={"Cancel"}
                icon={<Image source={require("../../assets/images/cancelBooking.png")} />}
                mainText={"You are cancelling your booking appointment, please confirm"}
                descriptionText={""}
            />
            <CustomModal
                visible={state.isCompleted1}
                onClose={isCompleted1ModalClose}
                buttonPress={isCompleted1}
                isButton={true}
                buttonText={"Go to Passport"}
                icon={<Image source={require("../../assets/images/verified.png")} />}
                mainText={"Congratulations! You have already completed your COVID-19 vaccination"}
                descriptionText={""}
            />
            <CustomModal
                visible={state.isCanceled}
                onClose={isCanceledModalClose}
                // buttonPress={isCanceled}
                isButton={false}
                icon={<Image source={require("../../assets/images/cancelBooking.png")} />}
                mainText={"You have cancelled your booking appointment"}
                descriptionText={"Please go to the booking page to create a new schedule."}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: 'space-around',
        height: "100%",
        width: "100%",
    },
    logInButton: {
        backgroundColor: "#F5914E",
        width: "90%",
        height: 50,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },

    scroll: { height: "100%", width: "100%", backgroundColor: "#ffff" },
    backgroundImage: {
        flex: 1,
        width: "100%",
        height: 300,
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
    body: { width: "100%", alignItems: "center", marginTop: -180 },
    bodyTitle: {
        color: "#ffff",
        fontWeight: "bold",
        fontSize: RFPercentage(3),
    },
    BodySubTitle: { color: "#ffff", fontSize: RFPercentage(1.8) },
    selectionView: {
        width: "85%",
        marginTop: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2.2,
        elevation: 2,
        marginBottom: 20,
        alignItems: "center", paddingVertical: 20, backgroundColor: '#fff', borderRadius: 20,
    },
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
