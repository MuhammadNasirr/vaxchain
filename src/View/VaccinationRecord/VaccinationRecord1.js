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
              style={{ color: '#50AC2F', fontSize: 30, fontWeight: 'bold' }}>
              vaccinated
            </Text>
          </View>
          <View style={{ width: '92%', marginTop: 15 }}>
            <Text style={{ color: '#F5914E', fontWeight: 'bold', fontSize: 20 }}>
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
              <Text style={{ color: '#858585' }}>Last Name</Text>
              <Text style={{ fontWeight: 'bold' }}>Banifico</Text>
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
              <Text style={{ color: '#858585' }}>First Name</Text>
              <Text style={{ fontWeight: 'bold' }}>Jose</Text>
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
              <Text style={{ color: '#858585' }}>Middle Name</Text>
              <Text style={{ fontWeight: 'bold' }}>Abad</Text>
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
              <Text style={{ color: '#858585' }}>Date of Birth</Text>
              <Text style={{ fontWeight: 'bold' }}>10-8-81</Text>
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
              <Text style={{ color: '#858585' }}>Sex</Text>
              <Text style={{ fontWeight: 'bold' }}>Male</Text>
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
              <Text style={{ color: '#858585' }}>Category</Text>
              <Text style={{ fontWeight: 'bold' }}>A3</Text>
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
              <Text style={{ color: '#858585' }}>Passport</Text>
              <Text style={{ fontWeight: 'bold' }}>EB121212</Text>
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
            <Text style={{ color: '#F5914E', fontWeight: 'bold', fontSize: 20 }}>
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
              <Text style={{ color: '#858585' }}>Type</Text>
              <View style={{ backgroundColor: '#FDF6E8', borderRadius: 5, height: 40 }}>
                <Picker
                  mode={"dropdown"}
                  // selectedValue={selectedValue}
                  style={{ height: 40, minWidth: 150 }}
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
              <Text style={{ color: '#858585' }}>Dosage Seq:</Text>
              <Text style={{ fontWeight: 'bold', textAlign: 'right' }}>1st Dosage: May 17, 2021{'\n'}
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
              <Text style={{ color: '#858585' }}>Manufacturer</Text>
              <Text style={{ fontWeight: 'bold' }}>Astra Zeneca</Text>
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
              <Text style={{ color: '#858585' }}>Lot No:</Text>
              <Text style={{ fontWeight: 'bold' }}>ABV7279</Text>
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
              <Text style={{ color: '#858585' }}>Administered by:</Text>
              <Text style={{ fontWeight: 'bold' }}>Quezon City
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
              <Text style={{ color: '#858585' }}>Local Reference:</Text>
              <Text style={{ fontWeight: 'bold' }}>43353</Text>
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
              <Text style={{ color: '#858585' }}>Passport</Text>
              <Text style={{ fontWeight: 'bold' }}>EB121212</Text>
            </View>
          </View>
        </View>

      </View>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
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

  scroll: { height: '100%', width: '100%', backgroundColor: '#ffff' },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: 300,
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
  drawericonView: { width: '10%', alignItems: 'center' },
  headerTitleView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
  },
  HeaderTitle: {
    color: '#ffff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: RFPercentage(2),
    alignSelf: 'center',
  },
  headerIconsView: {
    flexDirection: 'row',
    width: '20%',
    justifyContent: 'space-around',
  },

  headerIcon: { backgroundColor: '#ffff', borderRadius: 5, padding: 5 },
  body: { width: '100%', alignItems: 'center', marginTop: 100 },
  bodyTitle: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: RFPercentage(3),
  },
  BodySubTitle: {
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
    textAlign: 'center',
    color: '#F5914E',
    fontSize: RFPercentage(2),
    marginTop: 20,
  },
  qrCodeContainer: { width: '100%', paddingVertical: 15 },
  qrCodeHeading: { color: '#F5914E', marginLeft: 10, fontWeight: 'bold' },
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
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.2,
    elevation: 2,
  },
  qrCode: { alignItems: 'center', justifyContent: 'center' },
  qrCodeText: {
    fontSize: RFPercentage(1.3),
    textAlign: 'center',
    color: '#333333',
  },
});
