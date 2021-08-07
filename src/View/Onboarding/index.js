import React from 'react';
import { ImageBackground } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Image1 from '../../assets/images/SplashScreen.png'
import Image2 from '../../assets/images/SplashScreen2.png'
import Image3 from '../../assets/images/SplashScreen3.png'


function OnBoarding({ navigation }) {

    const entries = [
        { image: Image1 },
        { image: Image2 },
        { image: Image3 },
    ]


    const _signIn = () => {
        navigation.navigate("Login")
    }
    const _renderItem = ({ item }) => {
        return (
            <ImageBackground style={{ width: '100%', height: '100%', flex: 1 }} source={item.image}>
            </ImageBackground>
        );
    };




    return (
        <AppIntroSlider
            showNextButton={false}
            showSkipButton={true}
            showDoneButton={true}
            onSkip={_signIn}
            onDone={_signIn}
            bottomButton
            activeDotStyle={{ width: 20, height: 5, backgroundColor: '#fff' }}
            renderItem={_renderItem}
            data={entries}
            dotStyle={{ width: 10, height: 5, backgroundColor: 'rgba(255,255,255,0.3)' }}
            paginationStyle={{ color: '#121767' }}
        />
    );
}


export default OnBoarding;