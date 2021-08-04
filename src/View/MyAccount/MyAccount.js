import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


export default function MyAccount2(props) {


  return (

    <View style={styles.container}>

      <View style={{ width: '100%', flexDirection: 'row', marginTop: 10 }}>
        <View style={{ width: '80%', alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold' }}>
            My account
          </Text>
        </View>
        <View style={{ width: '20%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>


          <TouchableOpacity
            style={styles.headerIcon}
            activeOpacity={0.8}>
            <SimpleLineIcons name="bell" size={18} color="#F5914E" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.headerIcon}
            activeOpacity={0.8}>
            <MaterialIcons name="perm-identity" size={18} color="#F5914E" />
          </TouchableOpacity>

        </View>

      </View>





      <View style={styles.body}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginBottom: 10 }}>
          <TouchableOpacity style={{ backgroundColor: '#F7914F', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderRadius: 10, paddingHorizontal: 5, width: '45%', paddingVertical: 20 }}>

            <Text style={{ color: '#ffff', fontWeight: '600' }}>1st Dosage</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ backgroundColor: '#A7A7A7', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderRadius: 10, paddingHorizontal: 5, width: '45%', paddingVertical: 20 }}>

            <Text style={{ color: '#ffff', fontWeight: '600' }}>1st Dosage</Text>
          </TouchableOpacity>


        </View>
        <View style={{ backgroundColor: '#ffff', width: '90%', borderRadius: 10, paddingVertical: 10, paddingHorizontal: 5 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: '#F5914E', fontWeight: 'bold', fontSize: 20 }}>
              1st{'\n'}Dose
            </Text>
            <TouchableOpacity style={{ backgroundColor: '#F7914F', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderRadius: 5, paddingHorizontal: 5 }}>
              <MaterialIcons name="check-circle-outline" size={20} color="#ffff" />
              <Text style={{ color: '#ffff' }}>vaccinated</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>City /Orginazation Where{'\n'}you got Vaccinated:</Text>
          <View style={styles.infoBox}>
            <Text style={{ color: 'black' }}>st.Lukes</Text>
          </View>
          <Text style={styles.title}>Location of Vaccination Center:</Text>
          <View style={styles.infoBox}>
            <Text style={{ color: 'black' }}>23 Jacinto Street Global City</Text>
          </View>
          <Text style={styles.title}>Vaccination Manufacturer:</Text>
          <View style={styles.infoBox}>
            <Text style={{ color: 'black' }}>Astra Zeneca</Text>
          </View>

          <Text style={styles.title}>Lot Number:</Text>
          <View style={styles.infoBox}>
            <Text style={{ color: 'black' }}>000000</Text>
          </View>


          <Text style={styles.title}>Vaccinator:</Text>
          <View style={styles.infoBox}>
            <Text style={{ color: 'black' }}>Jose Dela</Text>
          </View>

        </View>
      </View>

    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
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