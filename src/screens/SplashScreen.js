import React, { Component } from 'react'
import{
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'

const SplashScreen = ({navigation}) => {
    return(
        <TouchableOpacity onPress={() => { navigation.navigate('OnBoarding') }} style={{width: '100%', height: '100%', backgroundColor: '#53B175', alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
            <Image source={require('../images/Groupcarot.jpg')} style={{width: 54.7, height: 63.61, tintColor: 'white', resizeMode: 'contain', marginRight: 10}}/>
            <View>
                <Image source={require('../images/Groupnectar.jpg')} style={{width: 194.35, height: 46.15, tintColor: 'white', resizeMode: 'contain', marginBottom: 5}}/>
                <Image source={require('../images/online-groceriettext.jpg')} style={{width: 183, height: 18, tintColor: 'white', resizeMode: 'contain'}}/>
            </View>
        </TouchableOpacity>
    )
}

export default SplashScreen;