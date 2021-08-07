import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Header } from '../../Components';


export default function Notifications({ navigation }) {
  return (


    <View style={styles.container}>
      {/* Header */}
      <Header title={"Notifications"} back={true} bellIcon={true} profileIcon={true} transparent={true} />


      {/* body */}

      <Text style={{ fontFamily: 'Poppins-Regular', marginTop: 20, marginBottom: 20, width: '90%', color: 'grey', fontSize: RFPercentage(1.8) }}>Today</Text>


      <View
        style={{

          backgroundColor: '#ffff',
          width: '90%',
          alignItems: 'center',
          borderRadius: 15,
          paddingTop: 20,
          paddingBottom: 10,
          marginTop: 20,

        }}>

        <View style={{ width: '92%', marginTop: 15 }}>


          <View
            style={{
              backgroundColor: '#ffff',
              paddingBottom: 5,


            }}>
            <Text style={{ fontFamily: 'Rubik-Regular', fontSize: RFPercentage(1.8) }}>
              Congratulation! Your bookings has been confirmed <Text style={{ fontFamily: 'Poppins-Regular', color: '#F5914E', textDecorationLine: 'underline' }}> Click to view schedule</Text>
            </Text>
            <Text style={{ fontFamily: 'Poppins-Regular', marginTop: 20, color: 'grey', fontSize: RFPercentage(1.5) }}>7:30 PM</Text>
          </View>
        </View>
      </View>


      <View
        style={{
          backgroundColor: '#ffff',
          width: '90%',
          alignItems: 'center',
          borderRadius: 15,
          paddingTop: 20,
          paddingBottom: 10,
          shadowColor: 'grey',
          marginTop: 20,

        }}>

        <View style={{ width: '92%', marginTop: 15 }}>


          <View
            style={{
              backgroundColor: '#ffff',
              paddingBottom: 5,
            }}>
            <Text style={{ fontFamily: 'Rubik-Regular', fontSize: RFPercentage(1.8) }}>
              Your Password has been Changed Sucessfully
            </Text>
            <Text style={{ fontFamily: 'Poppins-Regular', marginTop: 20, color: 'grey', fontSize: RFPercentage(1.5) }}>7:30 PM</Text>
          </View>
        </View>
      </View>




      <View
        style={{
          backgroundColor: '#ffff',
          width: '90%',
          alignItems: 'center',
          borderRadius: 15,
          paddingTop: 20,
          paddingBottom: 10,
          marginTop: 20,

        }}>

        <View style={{ width: '92%', marginTop: 15 }}>


          <View
            style={{

              backgroundColor: '#ffff',
              paddingBottom: 5,


            }}>
            <Text style={{ fontFamily: 'Rubik-Regular', fontSize: RFPercentage(1.8) }}>
              Congratulation! your friedn deula has created an account <Text style={{ fontFamily: 'Poppins-Regular', color: '#F5914E', textDecorationLine: 'underline' }}> Click here to clain your reward</Text>
            </Text>
            <Text style={{ fontFamily: 'Poppins-Regular', marginTop: 20, color: 'grey', fontSize: RFPercentage(1.5) }}>7:30 PM</Text>
          </View>
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    
    // flex: 1,
    //  backgroundColor: "#ffff",
    alignItems: 'center',
    // justifyContent: "center",
    // justifyContent:'space-between',
    // backgroundColor: "red",
    height: '100%',
    //  marginTop:20,
    width: '100%',
    backgroundColor: '#F6F6F6'
  },

  scroll: {
     height: '100%', width: '100%', backgroundColor: '#ffff'
  },
  backgroundImage: {
   
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  Header: {
    
    width: '100%',
    position: 'absolute',
    top: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  drawericonView: {
     width: '10%', alignItems: 'center'
  },
  headerTitleView: {
   
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
    
    flexDirection: 'row',
    width: '20%',
    justifyContent: 'space-around',
  },

  headerIcon: {
    backgroundColor: '#ffff', borderRadius: 5, padding: 5
  },
  body: {
   width: '100%', alignItems: 'center', marginTop: 100
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
    
    width: '85%',
    alignItems: 'center',
    paddingVertical: 20,
    height: '85%',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 10,
  },
  bookandRecordVaccination: {
   
    backgroundColor: '#ffff',
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 25,
    borderRadius: 15,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      
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
     width: '100%', paddingVertical: 15
  },
  qrCodeHeading: {
     color: '#F5914E', marginLeft: 10, fontWeight: 'bold'
  },
  qrCodeView: {
   
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
   alignItems: 'center', justifyContent: 'center'
  },
  qrCodeText: {
    
    fontSize: RFPercentage(1.3),
    textAlign: 'center',
    color: '#333333',
  },
});
