import React, { Component } from 'react'
import{
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
    StatusBar
} from 'react-native'

const OnBoarding = ({navigation}) => {
    return(
        <View style={{width: '100%', height: '100%'}}>
            <StatusBar hidden={true}/>
            <ImageBackground source={require('../images/81401onboarding-bgrim.png')} style={{flex: 1, resizeMode: 'contain', justifyContent: 'flex-end'}}>
                <View style={{width: '100%', height: '50%', alignItems: 'center'}}>
                    <Image source={require('../images/Groupcarot.jpg')} style={{marginVertical: 10}}/>
                    <Text style={{width: 253, height: 120, color: 'white', fontWeight: 600, fontSize: 48, textAlign: 'center'}}>
                        Welcome{'\n'}to our store
                        </Text>
                    <Text style={{width: 295, height: 15, fontSize: 16, color: 'white', textAlign: 'center', marginBottom: 40}}>
                        Ger your groceries in as fast as one hour
                        </Text>
                    <TouchableOpacity onPress={() => { navigation.navigate('SignIn') }} style={{backgroundColor: '#53B175', width: 353, height: 68, borderRadius: 19, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{width: 99, height: 18, fontWeight: 600, fontSize: 18, textAlign: 'center', color: 'white'}}>
                            Get Started
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default OnBoarding;