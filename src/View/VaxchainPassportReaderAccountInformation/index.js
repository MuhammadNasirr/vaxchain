import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  ImageBackground,
  Picker,
} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

export default function VaxchainPassportReaderAccountInformation({ navigation }) {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../../assets/images/imageback.png')}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.Header}>
          <View style={styles.drawericonView}>
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              activeOpacity={0.8}>
              <MaterialCommunityIcons
                name="menu-open"
                size={24}
                color="#ffff"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.headerTitleView}>
            {/* <Text style={styles.HeaderTitle}>VaxChain Passport Reader</Text> */}
          </View>
          <View style={styles.headerIconsView}>

            <TouchableOpacity style={styles.headerIcon} activeOpacity={0.8}>
              <Feather name="power" size={24} color="#F5914E" />
            </TouchableOpacity>
          </View>
        </View>

        {/* body */}
        <View
          style={{
            fontFamily: 'Poppins-Regular',
            backgroundColor: '#ffff',
            width: '90%',
            alignItems: 'center',
            borderRadius: 15,
            paddingVertical: 20,
            shadowColor: 'grey',
            shadowRadius: 10,
            shadowOpacity: 0.6,
            elevation: 8,
            shadowOffset: {
              width: 0,
              height: 4
            }
          }}>

          <View style={{ fontFamily: 'Poppins-Regular', width: '92%', marginTop: 15 }}>
            <Text style={{ fontFamily: 'Poppins-Regular', color: '#F5914E', fontWeight: 'bold' }}>
              Account{'\n'}Information
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#ffff',
                borderBottomColor: '#C3C3C3',
                borderBottomWidth: 1,
                paddingBottom: 5,
                marginTop: 15,

              }}>
              <Text style={{ fontFamily: 'Poppins-Regular', color: '#8B8B8B' }}>Username</Text>
              <Text style={{ fontFamily: 'Poppins-Regular', fontWeight: 'bold' }}>LBR23</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#ffff',
                borderBottomColor: '#C3C3C3',
                borderBottomWidth: 1,
                paddingBottom: 5,
                marginTop: 15,

              }}>
              <Text style={{ fontFamily: 'Poppins-Regular', color: '#8B8B8B' }}>Last Name</Text>
              <Text style={{ fontFamily: 'Poppins-Regular', fontWeight: 'bold' }}>Banifico</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#ffff',
                borderBottomColor: '#C3C3C3',
                borderBottomWidth: 1,
                paddingBottom: 5,
                marginTop: 15,

              }}>
              <Text style={{ fontFamily: 'Poppins-Regular', color: '#8B8B8B' }}>First Name</Text>
              <Text style={{ fontFamily: 'Poppins-Regular', fontWeight: 'bold' }}>Jose</Text>
            </View>



            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#ffff',
                borderBottomColor: '#C3C3C3',
                borderBottomWidth: 1,
                paddingBottom: 5,
                marginTop: 15,

              }}>
              <Text style={{ fontFamily: 'Poppins-Regular', color: '#8B8B8B' }}>Middle Name</Text>
              <Text style={{ fontFamily: 'Poppins-Regular', fontWeight: 'bold' }}>Abad</Text>
            </View>



            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#ffff',
                borderBottomColor: '#C3C3C3',
                borderBottomWidth: 1,
                paddingBottom: 5,
                marginTop: 15,

              }}>
              <Text style={{ fontFamily: 'Poppins-Regular', color: '#8B8B8B' }}>ID</Text>
              <Text style={{ fontFamily: 'Poppins-Regular', fontWeight: 'bold' }}>123785</Text>
            </View>



            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#ffff',
                borderBottomColor: '#C3C3C3',
                borderBottomWidth: 1,
                paddingBottom: 5,
                marginTop: 15,

              }}>
              <Text style={{ fontFamily: 'Poppins-Regular', color: '#8B8B8B' }}>Log-In Time</Text>
              <Text style={{ fontFamily: 'Poppins-Regular', fontWeight: 'bold' }}>10:00 AM</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#ffff',
                borderBottomColor: '#C3C3C3',
                borderBottomWidth: 1,
                paddingBottom: 5,
                marginTop: 15,

              }}>
              <Text style={{ fontFamily: 'Poppins-Regular', color: '#8B8B8B' }}>Duration</Text>
              <Text style={{ fontFamily: 'Poppins-Regular', fontWeight: 'bold' }}>2 Hours 15 Minutes</Text>
            </View>



          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Poppins-Regular',
    // flex: 1,
    //  backgroundColor: "#ffff",
    alignItems: 'center',
    // justifyContent: "center",
    // justifyContent:'space-between',
    justifyContent: 'space-around',
    // backgroundColor: "red",
    height: '100%',
    //  marginTop:20,
    width: '100%',
  },

  scroll: {
    fontFamily: 'Poppins-Regular', height: '100%', width: '100%', backgroundColor: '#ffff'
  },
  backgroundImage: {
    fontFamily: 'Poppins-Regular',
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  Header: {
    fontFamily: 'Poppins-Regular',
    width: '100%',
    position: 'absolute',
    top: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  drawericonView: {
    fontFamily: 'Poppins-Regular', width: '10%', alignItems: 'center'
  },
  headerTitleView: {
    fontFamily: 'Poppins-Regular',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
  },
  HeaderTitle: {
    fontFamily: 'Poppins-Regular',
    color: '#ffff',
    textAlign: 'center',
    
    fontSize: RFPercentage(2),
    alignSelf: 'center',
  },
  headerIconsView: {
    fontFamily: 'Poppins-Regular',
    flexDirection: 'row',
    width: '20%',
    justifyContent: 'space-around',
  },

  headerIcon: {
    fontFamily: 'Poppins-Regular', backgroundColor: '#ffff', borderRadius: 5, padding: 5
  },
  body: {
    fontFamily: 'Poppins-Regular', width: '100%', alignItems: 'center', marginTop: 100
  },
  bodyTitle: {
    fontFamily: 'Poppins-Regular',
    color: '#ffff',
    
    fontSize: RFPercentage(3),
  },
  BodySubTitle: {
    fontFamily: 'Poppins-Regular',
    color: '#ffff',
    fontSize: RFPercentage(1.8),
    marginBottom: 35,
  },
  selectionView: {
    fontFamily: 'Poppins-Regular',
    width: '85%',
    alignItems: 'center',
    paddingVertical: 20,
    height: '85%',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 10,
  },
  bookandRecordVaccination: {
    fontFamily: 'Poppins-Regular',
    backgroundColor: '#ffff',
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 25,
    borderRadius: 15,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      fontFamily: 'Poppins-Regular',
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.2,
    elevation: 3,
  },
  bookandRecordVaccinationText: {
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    color: '#F5914E',
    fontSize: RFPercentage(2),
    marginTop: 20,
  },
  qrCodeContainer: {
    fontFamily: 'Poppins-Regular', width: '100%', paddingVertical: 15
  },
  qrCodeHeading: {
    fontFamily: 'Poppins-Regular', color: '#F5914E', marginLeft: 10, fontWeight: 'bold'
  },
  qrCodeView: {
    fontFamily: 'Poppins-Regular',
    width: '95%',
    backgroundColor: '#ffff',
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      fontFamily: 'Poppins-Regular',
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.2,
    elevation: 2,
  },
  qrCode: {
    fontFamily: 'Poppins-Regular', alignItems: 'center', justifyContent: 'center'
  },
  qrCodeText: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFPercentage(1.3),
    textAlign: 'center',
    color: '#333333',
  },
});
