import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Header } from '../../Components';


export default function MyAccount2(props) {
  const [state, setState] = useState({
    province: 'Pampanga',
    city: 'Makati',
    building: 'Bldg. 1',
    house: '23',
    street: '23D Jacinto St.',
    barangay: 'West Rembo',
    isEdit: false,
    isSave: false,
  })

  return (

    <ScrollView style={styles.container}>

      <Header title={"My Account"} bellIcon={true} back={true} transparent={true} profileIcon={true} />

      <View style={styles.body}>

        <View style={{ backgroundColor: '#ffff', width: '90%', borderRadius: 25, padding: 20, marginTop: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: '#F5914E', fontWeight: 'bold', fontSize: 20 }}>
              Personal{'\n'}Information
            </Text>
          </View>
          <View style={{ width: '100%', paddingHorizontal: 5 }}>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, height: 50, marginTop: 10 }}>
              <Text style={{ color: 'grey' }}>Last name</Text>
              <Text style={{ backgroundColor: '#FFF5E9', paddingRight: 20, paddingTop: 10, height: 40, minWidth: 150, textAlign: 'right', borderRadius: 3, fontWeight: '600' }}>Bonifacio</Text>
            </View>

            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, height: 50, marginTop: 10 }}>
              <Text style={{ color: 'grey' }}>First name</Text>
              <Text style={{ backgroundColor: '#FFF5E9', paddingRight: 20, paddingTop: 10, height: 40, minWidth: 150, textAlign: 'right', borderRadius: 3, fontWeight: '600' }}>Jose</Text>
            </View>


            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, height: 50, marginTop: 10 }}>
              <Text style={{ color: 'grey' }}>Middle name</Text>
              <Text style={{ backgroundColor: '#FFF5E9', paddingRight: 20, paddingTop: 10, height: 40, minWidth: 150, textAlign: 'right', borderRadius: 3, fontWeight: '600' }}>Abad</Text>
            </View>

            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, height: 50, marginTop: 10 }}>
              <Text style={{ color: 'grey' }}>Date of birth</Text>
              <Text style={{ backgroundColor: '#FFF5E9', paddingRight: 20, paddingTop: 10, height: 40, minWidth: 150, textAlign: 'right', borderRadius: 3, fontWeight: '600' }}>10-10-89</Text>
            </View>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, height: 50, marginTop: 10 }}>
              <Text style={{ color: 'grey' }}>Nationality</Text>
              <Text style={{ backgroundColor: '#FFF5E9', paddingRight: 20, paddingTop: 10, height: 40, minWidth: 150, textAlign: 'right', borderRadius: 3, fontWeight: '600' }}>Filipino</Text>
            </View>
          </View>

        </View>
        <View style={{ backgroundColor: '#ffff', width: '90%', borderRadius: 25, padding: 20, marginTop: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: '#F5914E', fontWeight: 'bold', fontSize: 20 }}>
              Present{'\n'}Address
            </Text>
            <TouchableOpacity onPress={() => setState(pre => ({ ...pre, isEdit: true,isSave: false }))} style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require("../../assets/images/edit.png")} />
              <Text style={{ color: '#F5914E' }}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: '100%', paddingHorizontal: 5 }}>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, height: 50, marginTop: 10 }}>
              <Text style={{ color: 'grey' }}>Province</Text>
              <TextInput
                editable={state.isEdit}
                style={{
                  backgroundColor: '#FFF5E9',
                  paddingRight: 20, paddingTop: 10,
                  height: 40, minWidth: 150, textAlign: 'right',
                  borderRadius: 3, fontWeight: '600'
                }} value={state.province}
                placeholder={"Province"}
                onChangeText={(e) => setState(pre => ({ ...pre, province: e }))} />
            </View>

            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, height: 50, marginTop: 10 }}>
              <Text style={{ color: 'grey' }}>City</Text>
              <TextInput
                editable={state.isEdit}
                style={{
                  backgroundColor: '#FFF5E9',
                  paddingRight: 20, paddingTop: 10,
                  height: 40, minWidth: 150, textAlign: 'right',
                  borderRadius: 3, fontWeight: '600'
                }} value={state.city}
                placeholder={"City"}
                onChangeText={(e) => setState(pre => ({ ...pre, city: e }))} />
            </View>


            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, height: 50, marginTop: 10 }}>
              <Text style={{ color: 'grey' }}>Street</Text>
              <TextInput
                editable={state.isEdit}
                style={{
                  backgroundColor: '#FFF5E9',
                  paddingRight: 20, paddingTop: 10,
                  height: 40, minWidth: 150, textAlign: 'right',
                  borderRadius: 3, fontWeight: '600'
                }} value={state.street}
                placeholder={"Street"}
                onChangeText={(e) => setState(pre => ({ ...pre, street: e }))} />
            </View>

            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, height: 50, marginTop: 10 }}>
              <Text style={{ color: 'grey' }}>Barangay</Text>
              <TextInput
                editable={state.isEdit}
                style={{
                  backgroundColor: '#FFF5E9',
                  paddingRight: 20, paddingTop: 10,
                  height: 40, minWidth: 150, textAlign: 'right',
                  borderRadius: 3, fontWeight: '600'
                }} value={state.barangay}
                placeholder={"Barangay"}
                onChangeText={(e) => setState(pre => ({ ...pre, barangay: e }))} />
            </View>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, height: 50, marginTop: 10 }}>
              <Text style={{ color: 'grey' }}>House/Lot no.</Text>
              <TextInput
                editable={state.isEdit}
                style={{
                  backgroundColor: '#FFF5E9',
                  paddingRight: 20, paddingTop: 10,
                  height: 40, minWidth: 150, textAlign: 'right',
                  borderRadius: 3, fontWeight: '600'
                }} value={state.house}
                placeholder={"House/Lot no."}
                onChangeText={(e) => setState(pre => ({ ...pre, house: e }))} />
            </View>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, height: 50, marginTop: 10 }}>
              <Text style={{ color: 'grey' }}>Building </Text>
              <TextInput
                editable={state.isEdit}
                style={{
                  backgroundColor: '#FFF5E9',
                  paddingRight: 20, paddingTop: 10,
                  height: 40, minWidth: 150, textAlign: 'right',
                  borderRadius: 3, fontWeight: '600'
                }} value={state.building}
                placeholder={"Building"}
                onChangeText={(e) => setState(pre => ({ ...pre, building: e }))} />
            </View>
            {
              state.isEdit &&
              <TouchableOpacity onPress={() => setState(pre => ({ ...pre, isEdit: false, isSave: true }))}>
                <Text style={{ color: '#F5914E', textAlign: 'center', fontWeight: 'bold', fontSize: 16 }}>Save</Text>
              </TouchableOpacity>
            }
            {
              state.isSave &&
              <Text style={{ color: '#F5914E', textAlign: 'center', fontWeight: 'bold', fontSize: 16 }}>You have saved your new address</Text>
            }
          </View>

        </View>
      </View>

    </ScrollView>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#EAEBEF'
  },
  mainInfo: {
    // backgroundColor:'red',
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 10
  },
  mainInfoImage: {
    marginHorizontal: 10,
    borderRadius: 500,
    // backgroundColor:'green',
    borderWidth: 2,
    borderColor: '#4AC2C1'
  },
  Image: {
    margin: 4,
    resizeMode: 'contain',
    width: 150,
    height: 150,
    borderRadius: 500,


  },
  infoBox: {
    // borderColor:'#C2C2C2',
    // borderWidth:1,
    backgroundColor: '#FFF5E9',
    paddingVertical: 8,
    borderRadius: 4,
    paddingLeft: 5
  },
  mainInfoText: {
    // backgroundColor:'orange',
    justifyContent: 'center',
    alignItems: 'center',
    //  width:'100%'
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    // marginTop: 10,
    marginLeft: 5,
    color: '#4AC2C1'
  },
  headerIcon: { backgroundColor: "#ffff", borderRadius: 5, padding: 5 },

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
    width: '100%',
    padding: 20,
    paddingBottom: 100,
    alignItems: 'center'
  },
  title: {
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