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
import { useNavigation } from '@react-navigation/native';

export default function Header({ title, bellIcon, back, transparent, profileIcon }) {
    const navigation = useNavigation();
    return (

        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, paddingHorizontal: 20 }}>
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
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                    {title}
                </Text>
            </View>
            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>


                {
                    bellIcon &&
                    <TouchableOpacity
                        style={[styles.headerIcon, { marginRight: 10 }]}
                        activeOpacity={0.8}>
                        <SimpleLineIcons name="bell" size={18} color="#F5914E" />
                    </TouchableOpacity>
                }
                {
                    profileIcon &&
                    <TouchableOpacity
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







