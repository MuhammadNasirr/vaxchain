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

export default function VaccinationRecord({ navigation }) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../assets/images/imageHeader.png')}>
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
              <Text style={styles.HeaderTitle}>VaxChain Passport</Text>
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
        </View>
      </ImageBackground>

      {/* body */}
      <View style={{ marginTop: -150, alignItems: 'center', marginBottom: 30 }}>
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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 5,
              width: '75%',
            }}>
            <MaterialIcons
              name="check-circle"
              size={50}
              color="#50AC2F"
            />
            <Text
              style={{ fontFamily: 'Poppins-Bold', color: '#50AC2F', fontSize: 30, }}>
              vaccinated
            </Text>
          </View>
          <View style={{ width: '92%', marginTop: 15 }}>
            <Text style={{ fontFamily: 'Poppins-Regular', color: '#F5914E', fontSize: 20 }}>
              Personal{'\n'}Information
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#ffff',
                borderBottomColor: '#E6E6E6',
                borderBottomWidth: 1,
                paddingBottom: 5,
                marginTop: 15,
                height: 35,

              }}>
              <Text style={{ fontFamily: 'Poppins-Regular', color: '#858585' }}>Last Name</Text>
              <Text style={{ fontFamily: 'Poppins-Regular', }}>Banifico</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#ffff',
                borderBottomColor: '#E6E6E6',
                borderBottomWidth: 1,
                paddingBottom: 5,
                marginTop: 15,
                height: 35,

              }}>
              <Text style={{ fontFamily: 'Poppins-Regular', color: '#858585' }}>First Name</Text>
              <Text style={{ fontFamily: 'Poppins-Regular', }}>Jose</Text>
            </View>



            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#ffff',
                borderBottomColor: '#E6E6E6',
                borderBottomWidth: 1,
                paddingBottom: 5,
                marginTop: 15,
                height: 35,

              }}>
              <Text style={{ fontFamily: 'Poppins-Regular', color: '#858585' }}>Middle Name</Text>
              <Text style={{ fontFamily: 'Poppins-Regular', }}>Abad</Text>
            </View>



            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#ffff',
                borderBottomColor: '#E6E6E6',
                borderBottomWidth: 1,
                paddingBottom: 5,
                marginTop: 15,
                height: 35,

              }}>
              <Text style={{ fontFamily: 'Poppins-Regular', color: '#858585' }}>Date of Birth</Text>
              <Text style={{ fontFamily: 'Poppins-Regular', }}>10-8-81</Text>
            </View>



            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#ffff',
                borderBottomColor: '#E6E6E6',
                borderBottomWidth: 1,
                paddingBottom: 5,
                marginTop: 15,
                height: 35,

              }}>
              <Text style={{ fontFamily: 'Poppins-Regular', color: '#858585' }}>Sex</Text>
              <Text style={{ fontFamily: 'Poppins-Regular', }}>Male</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#ffff',
                borderBottomColor: '#E6E6E6',
                borderBottomWidth: 1,
                paddingBottom: 5,
                marginTop: 15,
                height: 35,

              }}>
              <Text style={{ fontFamily: 'Poppins-Regular', color: '#858585' }}>Category</Text>
              <Text style={{ fontFamily: 'Poppins-Regular', }}>A3</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#ffff',
                borderBottomColor: '#E6E6E6',
                borderBottomWidth: 1,
                paddingBottom: 5,
                marginTop: 15,
                height: 35,

              }}>
              <Text style={{ fontFamily: 'Poppins-Regular', color: '#858585' }}>Passport</Text>
              <Text style={{ fontFamily: 'Poppins-Regular', }}>EB121212</Text>
            </View>
          </View>
        </View>
        <View
          style={{
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
            },
            marginTop: 30
          }}>
          <View style={{ width: '92%', marginTop: 15 }}>
            <Text style={{ fontFamily: 'Poppins-Regular', color: '#F5914E', fontSize: 20 }}>
              Vaccination{'\n'}Details
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#ffff',
                borderBottomColor: '#E6E6E6',
                borderBottomWidth: 1,
                paddingBottom: 5,
                marginTop: 15,
                height: 60,

              }}>
              <Text style={{ fontFamily: 'Poppins-Regular', color: '#858585' }}>Type</Text>
              <View style={{ backgroundColor: '#FDF6E8', borderRadius: 5, height: 40 }}>
                <Picker
                  mode={"dropdown"}
                  // selectedValue={selectedValue}
                  style={{ fontFamily: 'Poppins-Regular', height: 40, minWidth: 150 }}
                // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                  <Picker.Item label="COVID-19" value="COVID-19" />
                </Picker>

              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#ffff',
                borderBottomColor: '#E6E6E6',
                borderBottomWidth: 1,
                paddingBottom: 5,
                marginTop: 15,
                height: 55,

              }}>
              <Text style={{ fontFamily: 'Poppins-Regular', color: '#858585' }}>Dosage Seq:</Text>
              <Text style={{ fontFamily: 'Poppins-Regular', textAlign: 'right' }}>1st Dosage: May 17, 2021{'\n'}
                2nd Dosage: July 9, 2021</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#ffff',
                borderBottomColor: '#E6E6E6',
                borderBottomWidth: 1,
                paddingBottom: 5,
                marginTop: 15,
                height: 35,

              }}>
              <Text style={{ fontFamily: 'Poppins-Regular', color: '#858585' }}>Manufacturer</Text>
              <Text style={{ fontFamily: 'Poppins-Regular', }}>Astra Zeneca</Text>
            </View>



            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#ffff',
                borderBottomColor: '#E6E6E6',
                borderBottomWidth: 1,
                paddingBottom: 5,
                marginTop: 15,
                height: 35,

              }}>
              <Text style={{ fontFamily: 'Poppins-Regular', color: '#858585' }}>Lot No:</Text>
              <Text style={{ fontFamily: 'Poppins-Regular', }}>ABV7279</Text>
            </View>



            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#ffff',
                borderBottomColor: '#E6E6E6',
                borderBottomWidth: 1,
                paddingBottom: 5,
                marginTop: 15,
                height: 35,

              }}>
              <Text style={{ fontFamily: 'Poppins-Regular', color: '#858585' }}>Administered by:</Text>
              <Text style={{ fontFamily: 'Poppins-Regular', }}>Quezon City
                Health Department</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#ffff',
                borderBottomColor: '#E6E6E6',
                borderBottomWidth: 1,
                paddingBottom: 5,
                marginTop: 15,
                height: 35,

              }}>
              <Text style={{ fontFamily: 'Poppins-Regular', color: '#858585' }}>Local Reference:</Text>
              <Text style={{ fontFamily: 'Poppins-Regular', }}>43353</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#ffff',
                borderBottomColor: '#E6E6E6',
                borderBottomWidth: 1,
                paddingBottom: 5,
                marginTop: 15,
                height: 35,

              }}>
              <Text style={{ fontFamily: 'Poppins-Regular', color: '#858585' }}>Passport</Text>
              <Text style={{ fontFamily: 'Poppins-Regular', }}>EB121212</Text>
            </View>
          </View>
        </View>

      </View>


    </ScrollView>
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
    height: 300,
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
    fontFamily: 'Poppins-Regular', color: '#F5914E', marginLeft: 10,
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
