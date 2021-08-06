import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { CustomModal, Header } from "../../Components";

export default function MyAccount(props) {

  const [state, setstate] = useState({
    verified: false,
    isVerfication: false,
    isVerfied: false,
  })

  const isVerficationModalClose = () => {
    setstate(pre => ({ ...pre, isVerfication: false, isVerfied: true }))
  }

  const isVerfiedModalClose = () => {
    setstate(pre => ({ ...pre, verified: true, isVerfied: false }))
  }

  return (

    <View style={styles.container}>


      <Header title={"My Account"} bellIcon={true} back={true} transparent={true} profileIcon={true} />




      <View style={styles.body}>

        <View style={{ fontFamily:'Poppins-Regular',flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginBottom: 10 }}>
          <TouchableOpacity style={{ fontFamily:'Poppins-Regular',backgroundColor: state.verified ? '#50AC2F' : '#F7914F', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderRadius: 15, paddingHorizontal: 5, width: '45%', paddingVertical: 20 }}>

            <Text style={{ fontFamily:'Poppins-Regular',color: '#ffff', fontWeight: 'bold', fontSize: 16 }}>1st Dosage</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ fontFamily:'Poppins-Regular',backgroundColor: '#A7A7A7', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderRadius: 15, paddingHorizontal: 5, width: '45%', paddingVertical: 20 }}>

            <Text style={{ fontFamily:'Poppins-Regular',color: '#ffff', fontWeight: 'bold', fontSize: 16 }}>2nd Dosage</Text>
          </TouchableOpacity>


        </View>
        <View style={{ fontFamily:'Poppins-Regular',backgroundColor: '#ffff', width: '90%', borderRadius: 25, padding: 20, marginTop: 20 }}>
          <View style={{ fontFamily:'Poppins-Regular',flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontFamily:'Poppins-Regular',color: '#F5914E', fontWeight: 'bold', fontSize: 20 }}>
              1st{'\n'}Dosage
            </Text>
            <TouchableOpacity onPress={() => setstate(pre => ({ ...pre, isVerfication: state.verified ? false : true }))} style={{
              backgroundColor: state.verified ? '#50AC2F' : '#F7914F', minWidth: 80, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderRadius: 15, padding: 10
            }}>
              {
                state.verified ? <>
                  <MaterialIcons name="check-circle-outline" size={20} color="#ffff" />
                  <Text style={{ fontFamily:'Poppins-Regular',color: '#ffff', fontWeight: 'bold', marginLeft: 5 }}>Vaccinated</Text>
                </>
                  :
                  <Text style={{ fontFamily:'Poppins-Regular',color: '#ffff', fontWeight: 'bold' }}>Verify</Text>
              }
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>City /Orginazation Where{'\n'}you got Vaccinated:</Text>
          <View style={styles.infoBox}>
            <Text style={{ fontFamily:'Poppins-Regular',color: 'black' }}>st.Lukes</Text>
          </View>
          <Text style={styles.title}>Location of Vaccination Center:</Text>
          <View style={styles.infoBox}>
            <Text style={{ fontFamily:'Poppins-Regular',color: 'black' }}>23 Jacinto Street Global City</Text>
          </View>
          <Text style={styles.title}>Vaccination Manufacturer:</Text>
          <View style={styles.infoBox}>
            <Text style={{ fontFamily:'Poppins-Regular',color: 'black' }}>Astra Zeneca</Text>
          </View>

          <Text style={styles.title}>Lot Number:</Text>
          <View style={styles.infoBox}>
            <Text style={{ fontFamily:'Poppins-Regular',color: 'black' }}>000000</Text>
          </View>


          <Text style={styles.title}>Vaccinator:</Text>
          <View style={styles.infoBox}>
            <Text style={{ fontFamily:'Poppins-Regular',color: 'black' }}>Jose Dela</Text>
          </View>

        </View>
      </View>
      <CustomModal
        visible={state.isVerfication}
        onClose={isVerficationModalClose}
        isButton={false}
        icon={<Image source={require("../../assets/images/verification.png")} />}
        mainText={"Your information have been submitted for verification."}
        descriptionText={"You will be notified once confirmed by your LGU and vaccination data will appear in your appear in the passport section."}
      />
      <CustomModal
        visible={state.isVerfied}
        onClose={isVerfiedModalClose}
        isButton={false}
        icon={<Image source={require("../../assets/images/verified.png")} />}
        mainText={"Congratulations!"}
        descriptionText={"Your vaccination data has been verified. You can find the details and present when required in the passport section."}
      />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    fontFamily:'Poppins-Regular',
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#EAEBEF'
  },
  mainInfo: {
    fontFamily:'Poppins-Regular',
    // backgroundColor:'red',
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 10
  },
  mainInfoImage: {
    fontFamily:'Poppins-Regular',
    marginHorizontal: 10,
    borderRadius: 500,
    // backgroundColor:'green',
    borderWidth: 2,
    borderColor: '#4AC2C1'
  },
  Image: {
    fontFamily:'Poppins-Regular',
    margin: 4,
    resizeMode: 'contain',
    width: 150,
    height: 150,
    borderRadius: 500,


  },
  infoBox: {
    fontFamily:'Poppins-Regular',
    // borderColor:'#C2C2C2',
    // borderWidth:1,
    backgroundColor: '#FFF5E9',
    paddingVertical: 8,
    borderRadius: 4,
    paddingLeft: 5,
    marginTop: 10
  },
  mainInfoText: {
    fontFamily:'Poppins-Regular',
    // backgroundColor:'orange',
    justifyContent: 'center',
    alignItems: 'center',
    //  width:'100%'
  },
  username: {
    fontFamily:'Poppins-Regular',
    fontSize: 20,
    fontWeight: 'bold',
    // marginTop: 10,
    marginLeft: 5,
    color: '#4AC2C1'
  },
  headerIcon: {
    fontFamily:'Poppins-Regular', backgroundColor: "#ffff", borderRadius: 5, padding: 5 },

  // MainImage:{
  //     width:130,
  //     height:130,
  //     borderRadius:25,
  //     borderWidth:4.5,
  //     borderColor:'#3272F2',       
  // },
  // MainName:{
  //     fontSize:18,
  //     fontWeight:'bold',
  // },
  body: {
    fontFamily:'Poppins-Regular',
    width: '100%',
    padding: 20,
    paddingBottom: 100,
    alignItems: 'center'
  },
  title: {
    fontFamily:'Poppins-Regular',
    //  fontWeight: 'bold',
    fontSize: 16,
    color: 'grey',
    //  borderTopColor: '#3272F2',
    //  borderTopWidth: 2,
    paddingTop: 8,
    marginTop: 8,
    paddingLeft: 5
  }
});