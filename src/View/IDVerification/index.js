import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Picker,
  TextInput
} from "react-native";
import { CustomModal, SelfieTake } from "../../Components";
import { Icon } from 'react-native-elements';

export default function IDVerification({ navigation }) {

  const [state, setstate] = useState({
    verified: false,
    isVerfication: false,
    selfieTake: false,
  })

  const isVerficationModalClose = () => {
    setstate(pre => ({ ...pre, isVerfication: false, isVerfied: true }))
  }

  const isAllow = () => {
    setstate(pre => ({ ...pre, isVerfication: false }))
    navigation.navigate("ScanDocument")
  }

  const selfieTakeModalClose = () => {
    setstate(pre => ({ ...pre, selfieTake: false }))
  }

  return (

    <ScrollView style={styles.container}>

      <View style={styles.body}>

        <View style={{ fontFamily: 'Poppins-Regular', width: '90%', marginBottom: 10 }}>
          <Text style={{ fontFamily: 'Poppins-Regular', color: '#F5914E',  fontSize: 20 }}>ID Verification</Text>
          <Text style={{ fontFamily: 'Poppins-Regular', color: '#858585',  fontSize: 18 }}>for processing</Text>

        </View>
        <View style={{
          fontFamily: 'Poppins-Regular',
          backgroundColor: '##FFFFFF',
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 1,
          elevation: 1,
          alignItems: 'flex-end',
          width: '100%', borderRadius: 25, padding: 20, marginTop: 20
        }}>

          <View style={{ fontFamily: 'Poppins-Regular', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '90%' }}>
            <Text style={{ fontFamily: 'Poppins-Regular', color: '#B0B0B0', fontSize: 16 }}>Type of ID</Text>
            <View style={{ fontFamily: 'Poppins-Regular', backgroundColor: '#FDF6E8', borderRadius: 5 }}>
              <Picker
                mode={"dropdown"}
                // selectedValue={selectedValue}
                style={{ fontFamily: 'Poppins-Regular', height: 40, width: 150 }}
              // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
                <Picker.Item label="Choose ID" value="Choose ID" />
                <Picker.Item label="COVID-19" value="COVID-19" />
              </Picker>

            </View>
          </View>
          <View style={{ fontFamily: 'Poppins-Regular', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '90%', marginTop: 20 }}>
            <Text style={{ fontFamily: 'Poppins-Regular', color: '#B0B0B0', fontSize: 16 }}>ID No.</Text>
            <TextInput

              style={[styles.infoBox, { height: 40, width: 150, paddingVertical: 0 }]}
            />
          </View>
          <View style={{ fontFamily: 'Poppins-Regular', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '90%', marginTop: 20 }}>
            <Text style={{ fontFamily: 'Poppins-Regular', color: '#B0B0B0', fontSize: 16 }}>ID Pic (front)</Text>
          </View>
          <TouchableOpacity onPress={() => setstate(pre => ({ ...pre, selfieTake: true }))} style={{ fontFamily: 'Poppins-Regular', width: '100%', alignItems: 'center', marginTop: 20 }}>
            <Image source={require("../../assets/images/selfieCard.png")} />
          </TouchableOpacity>
          <View style={{ fontFamily: 'Poppins-Regular', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '90%', marginTop: 20 }}>
            <Text style={{ fontFamily: 'Poppins-Regular', color: '#B0B0B0', fontSize: 16 }}>ID Pic (back)</Text>
          </View>
          <TouchableOpacity onPress={() => setstate(pre => ({ ...pre, selfieTake: true }))} style={{ fontFamily: 'Poppins-Regular', width: '100%', alignItems: 'center', marginTop: 20 }}>
            <Image source={require("../../assets/images/selfieCard.png")} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => setstate(pre => ({ ...pre, isVerfication: true }))} style={{
          fontFamily: 'Poppins-Regular',
          backgroundColor: '#F7914F', width: '100%', justifyContent: 'center', alignItems: 'center', borderRadius: 15, marginTop: 50, height: 50
        }}>
          <Text style={{ fontFamily: 'Poppins-Regular', color: '#ffff',  fontSize: 18 }}>Verify</Text>
        </TouchableOpacity>
        <View style={{ fontFamily: 'Poppins-Regular', flexDirection: 'row', alignItems: 'flex-start', marginTop: 20, width: '95%' }}>
          <Icon containerStyle={{ fontFamily: 'Poppins-Regular', marginRight: 10 }} color={"#F7914F"} name={'info'} type={"foundation"} />
          <Text style={{ fontFamily: 'Poppins-Regular', marginLeft: 0 }}>
            This information is used for identity verification only and will be kept
            secure by VAXCHAIN in accordance with RepublicAct 10173 Data Privacy
            Act of Philpines
          </Text>
        </View>
      </View>
      <CustomModal
        visible={state.isVerfication}
        onClose={isVerficationModalClose}
        buttonPress={isAllow}
        isButton={true}
        buttonText={"Allow"}
        icon={<Icon name={'camera'} type={"entypo"} color={"#F7914F"} size={30} />}
        mainText={"Allow Vaxchain to take pictures and record video?"}
        descriptionText={""}
      />
      <SelfieTake
        visible={state.selfieTake}
        onClose={selfieTakeModalClose}
        isButton={false}
        icon={<Image source={require("../../assets/images/verified.png")} />}
        mainText={"Congratulations!"}
        descriptionText={"Your vaccination data has been verified. You can find the details and present when required in the passport section."}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FCFCFC', fontFamily: 'Poppins-Regular',
  },
  body: {
    fontFamily: 'Poppins-Regular',
    width: '100%',
    padding: 20,
    marginTop: 50,
    paddingBottom: 100,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: 'grey',
    paddingTop: 8,
    marginTop: 8,
    paddingLeft: 5
  },
  infoBox: {
    fontFamily: 'Poppins-Regular',
    backgroundColor: '#FFF5E9',
    paddingVertical: 8,
    borderRadius: 4,
    paddingLeft: 5,
    marginTop: 10
  },
});
