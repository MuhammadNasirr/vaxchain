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
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function VaxchainPassportReaderPersonalInformation({ navigation }) {
  return (
    <ScrollView>
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
              <Text style={styles.HeaderTitle}>VaxChain Passport Reader</Text>
            </View>
            <View style={styles.headerIconsView}>
              <TouchableOpacity style={styles.headerIcon} activeOpacity={0.8}>
                <SimpleLineIcons name="bell" size={24} color="#F5914E" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerIcon} activeOpacity={0.8}>
                <MaterialIcons name="perm-identity" size={24} color="#F5914E" />
              </TouchableOpacity>
            </View>
          </View>

          {/* body */}
          <View style={styles.body}>
            <Text style={styles.bodyTitle}>Jose Abad Banifico</Text>
            <Text style={styles.BodySubTitle}>
              Passport no: <Text style={{
                fontFamily:'Poppins-Regular', fontWeight: "bold" }}>EB1221213</Text>
            </Text>
            <Image source={{ uri: 'https://i.pinimg.com/originals/67/ce/66/67ce6630f3e288e5dc9dd6f37a707da8.jpg' }}
              style={{
                fontFamily:'Poppins-Regular',
                width: 150,
                height: 150,
                resizeMode: 'cover',
                borderRadius: 20,
                marginTop: 50,
              }}
            />


            <TouchableOpacity onPress={() => navigation.navigate('VaccinationRecord1')} style={{
              fontFamily:'Poppins-Regular',
              backgroundColor: '#ffff',
              justifyContent: 'space-between',
              width: '80%',
              alignItems: 'center',
              paddingVertical: 50,
              marginTop: 20,
              marginBottom: 20,
              borderRadius: 20,
              marginVertical: 5,
              paddingHorizontal: 10,
              shadowColor: '#000',
              shadowOffset: {
                fontFamily:'Poppins-Regular',
                width: 1,
                height: 2,
              },
              shadowOpacity: 0.1,
              shadowRadius: 1.2,
              elevation: 2,

            }}>

              <AntDesign name="qrcode" size={105} color="black" />


              <View style={{
                fontFamily:'Poppins-Regular', backgroundColor: '#ffff', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 5 }}>
                <MaterialIcons name="check-circle" size={50} color="#50AC2F" />
                <Text style={{
                  fontFamily:'Poppins-Regular', color: '#50AC2F', fontSize: 30, fontWeight: 'bold' }}>vaccinated</Text>
              </View>

              <Text style={{
                fontFamily:'Poppins-Regular', fontWeight: 'bold', fontSize: 15 }}>Astra Zanica</Text>

            </TouchableOpacity>

            <View
              style={{
                fontFamily:'Poppins-Regular',
                backgroundColor: '#ffff',
                width: '90%',
                flexDirection: 'row',
                justifyContent: 'space-between',

                alignItems: 'center',
                paddingVertical: 25,
                borderRadius: 10,
                marginVertical: 5,
                paddingHorizontal: 10,
                shadowColor: '#000',
                shadowOffset: {
                  fontFamily:'Poppins-Regular',
                  width: 1,
                  height: 2,
                },
                shadowOpacity: 0.1,
                shadowRadius: 1.2,
                elevation: 1,
              }}>
              <Text style={{
                fontFamily:'Poppins-Regular', color: 'grey' }}>First Dose</Text>
              <Text style={{
                fontFamily:'Poppins-Regular', color: 'black', fontWeight: 'bold' }}>5-May-2021</Text>




            </View>


            <View
              style={{
                fontFamily:'Poppins-Regular',
                backgroundColor: '#ffff',
                width: '90%',
                flexDirection: 'row',
                justifyContent: 'space-between',

                alignItems: 'center',
                paddingVertical: 25,
                borderRadius: 10,
                marginTop: 5,
                marginBottom: 20,
                paddingHorizontal: 10,
                shadowColor: '#000',
                shadowOffset: {
                  width: 1,
                  height: 2,
                },
                shadowOpacity: 0.1,
                shadowRadius: 1.2,
                elevation: 1,
              }}>
              <Text style={{
                fontFamily:'Poppins-Regular', color: 'grey' }}>Second Dose</Text>
              <Text style={{
                fontFamily:'Poppins-Regular', color: 'black', fontWeight: 'bold' }}>9-Aug-2021</Text>




            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily:'Poppins-Regular',
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
    fontFamily:'Poppins-Regular', height: '100%', width: '100%', backgroundColor: '#ffff' },
  backgroundImage: {
    fontFamily:'Poppins-Regular',
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  Header: {
    fontFamily:'Poppins-Regular',
    width: '100%',
    position: 'absolute',
    top: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  drawericonView: {
    fontFamily:'Poppins-Regular', width: '10%', alignItems: 'center' },
  headerTitleView: {
    fontFamily:'Poppins-Regular',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
  },
  HeaderTitle: {
    fontFamily:'Poppins-Regular',
    color: '#ffff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: RFPercentage(2),
    alignSelf: 'center',
  },
  headerIconsView: {
    fontFamily:'Poppins-Regular',
    flexDirection: 'row',
    width: '20%',
    justifyContent: 'space-around',
  },

  headerIcon: {
    fontFamily:'Poppins-Regular', backgroundColor: '#ffff', borderRadius: 5, padding: 5 },
  body: {
    fontFamily:'Poppins-Regular', width: '100%', alignItems: 'center', marginTop: 100 },
  bodyTitle: {
    fontFamily:'Poppins-Regular',
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: RFPercentage(3),
  },
  BodySubTitle: {
    fontFamily:'Poppins-Regular', color: '#ffff', fontSize: RFPercentage(1.8), marginBottom: 0 },
  selectionView: {
    fontFamily:'Poppins-Regular',
    width: '85%',
    alignItems: 'center',
    paddingVertical: 20,
    height: '85%',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 10,
  },
  bookandRecordVaccination: {
    fontFamily:'Poppins-Regular',
    backgroundColor: '#ffff',
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 25,
    borderRadius: 15,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      fontFamily:'Poppins-Regular',
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.2,
    elevation: 3,
  },
  bookandRecordVaccinationText: {
    fontFamily:'Poppins-Regular',
    textAlign: 'center',
    color: '#F5914E',
    fontSize: RFPercentage(2),
    marginTop: 20,
  },
  qrCodeContainer: {
    fontFamily:'Poppins-Regular', width: '100%', paddingVertical: 15 },
  qrCodeHeading: {
    fontFamily:'Poppins-Regular', color: '#F5914E', marginLeft: 10, fontWeight: 'bold' },
  qrCodeView: {
    fontFamily:'Poppins-Regular',
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
      fontFamily:'Poppins-Regular',
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.2,
    elevation: 2,
  },
  qrCode: {
    fontFamily:'Poppins-Regular', alignItems: 'center', justifyContent: 'center' },
  qrCodeText: {
    fontFamily:'Poppins-Regular',
    fontSize: RFPercentage(1.3),
    textAlign: 'center',
    color: '#333333',
  },
});
