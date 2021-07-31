import React, { useEffect } from 'react';
import {
    StyleSheet,
    View,
    ActivityIndicator,
} from 'react-native';

function AuthLoading({ navigation }) {



    useEffect(() => {
        _bootstrapAsync()
        navigation.addListener('focus', () => {
            _bootstrapAsync()
        })
    }, [])


    const _bootstrapAsync = () => {
        navigation.navigate('Onboarding');
    };

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#05445E" style={{ backgroundColor: '#fff', width: 80, height: 80 }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#fff',
        flex: 1, alignItems: "center", justifyContent: 'center'
    },
});

export default AuthLoading;