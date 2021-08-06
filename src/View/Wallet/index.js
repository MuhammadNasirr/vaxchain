import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Wallet({ navigation }) {
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
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
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
            >
              <SimpleLineIcons name="bell" size={24} color="#F5914E" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.headerIcon}
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
            Vaxcoin Balance
          </Text>
          <Text style={styles.BodySubTitle}>
            10,0000.00
          </Text>

          <View
            style={styles.paymentTransferView}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('IDVerification')}
              style={styles.transferPayment}
            >
              <FontAwesome
                name="exchange"
                size={RFPercentage(5)}
                color="#F5914E"
              />
              <Text
                style={styles.transferPaymentText}
              >
                Transfer
              </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
              activeOpacity={0.8}
              style={styles.transferPayment}
            >
              <FontAwesome
                name="calendar"
                size={RFPercentage(5)}
                color="#F5914E"
              />
              <Text
                style={styles.transferPaymentText}
              >
                Book{"\n"}Vaccination
              </Text>
            </TouchableOpacity> */}
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
  body: { width: "100%", alignItems: "center", marginTop: 10 },
  bodyTitle: {
    color: "#ffff",
    fontWeight: "bold",
    fontSize: RFPercentage(3),
  },
  BodySubTitle: { color: "#ffff", fontSize: RFPercentage(5), fontWeight: 'bold' },
  paymentTransferView: { width: "100%", alignItems: "center", paddingVertical: 20, marginTop: '50%' },
  transferPayment: {
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
  transferPaymentText: {
    textAlign: "center",
    color: "#F5914E",
    fontSize: RFPercentage(2),
    marginTop: 20,
  },
  qrCodeContainer: { width: '100%', paddingVertical: 15 },
  qrCodeHeading: { color: '#F5914E', marginLeft: 10 },
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
