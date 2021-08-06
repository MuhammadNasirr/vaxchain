import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { Header } from "../../Components";

export default function ScanDocument({ navigation }) {

  const crossButton = () => {
    navigation.navigate("ScanDocumentConfirmation")
  }
  return (
    <View style={styles.container}>
      <Header title={"Scan Document"} crossIcon={true} crossButton={crossButton} transparent={false} />

      <View style={{ backgroundColor: '#727272', height: '70%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Greek_passport_biodata_page.png' }}

          style={{ width: '80%', height: 450, resizeMode: 'center' }} />
      </View>


      <View style={{ paddingVertical: 20, backgroundColor: "#ffff", width: '100%' }}>

        <Text style={{ color: "#F79150", alignSelf: "center", fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Scan Document</Text>

        <Text style={{ color: "grey", alignSelf: "center", textAlign: 'center', width: '80%' }}>Place your document with in the frame untill all edges are aligned and captured automatically</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
