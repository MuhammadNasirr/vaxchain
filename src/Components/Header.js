import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from "react-native";
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export default function Header({ title, bellIcon, back, transparent, profileIcon, crossIcon, crossButton }) {
    const navigation = useNavigation();
    return (

        <View style={{ width: '100%', height: 70, backgroundColor: transparent ? 'transparent' : '#F79150', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 }}>
            {
                back ?
                    <TouchableOpacity
                        onPress={() => navigation.goBack(null)}
                        style={[styles.headerIcon, { backgroundColor: 'transparent' }]}
                        activeOpacity={0.8}>
                        <Image source={require('../assets/images/arrow-left.png')} />
                    </TouchableOpacity>
                    : <View />
            }
            <View style={{ alignItems: 'center' }}>
                <Text style={{ color: transparent ? 'black' : '#fff',  fontSize: 20,fontFamily:'Poppins-Regular' }}>
                    {title}
                </Text>
            </View>
            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>


                {
                    crossIcon &&
                    <TouchableOpacity onPress={crossButton} style={{ backgroundColor: "#EBEBEB", borderRadius: 5, width: 25, alignItems: 'center', justifyContent: 'center', marginLeft: 'auto' }}>
                        <Feather name="x" size={24} color="#F79150" />
                    </TouchableOpacity>
                }
                {
                    bellIcon &&
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Notifications')}
                        style={[styles.headerIcon, { marginRight: 10 }]}
                        activeOpacity={0.8}>
                        <SimpleLineIcons name="bell" size={18} color="#F5914E" />
                    </TouchableOpacity>
                }
                {
                    profileIcon &&
                    <TouchableOpacity
                        onPress={() => navigation.navigate('MyAccount1')}
                        style={styles.headerIcon}
                        activeOpacity={0.8}>
                        <MaterialIcons name="perm-identity" size={18} color="#F5914E" />
                    </TouchableOpacity>
                }
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    headerIcon: { backgroundColor: "#ffff", borderRadius: 5, padding: 5 },

});







