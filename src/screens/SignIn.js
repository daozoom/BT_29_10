import React, { useState } from 'react'
import{
    View,
    Text,
    Image,
    StatusBar,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native'

const SignIn = ({navigation}) => {
    const [inputFocused, setInputFocused] = useState(false);

    const hideKeyboard = () => {
      Keyboard.dismiss();
      setInputFocused(false);
    };

    return(
        <TouchableWithoutFeedback onPress={hideKeyboard}>
            <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
                    <StatusBar barStyle={'dark-content'}/>
                    <Image source={require('../images/MaskGroupimg-signin.jpg')} style={{width: '100%', height: '45%'}}/>
                    <View style={{width: '100%', height: '55%', marginLeft: 24.5}}>
                        <Text style={{width: '60%', height: 63, fontSize: 26, lineHeight: 29, fontWeight: 600, marginVertical: 30}}>
                            Get your groceries{'\n'}with nectar
                        </Text>
                        <View style={{width: '90%'}}>
                            <View style={{flexDirection: 'row', position: 'absolute', alignItems: 'center'}}>
                                <Image source={require('../images/Rectangle11flag.jpg')} style={{ width: 34, height: 23.7}} />
                                <Text style={{marginHorizontal: 5}}>+880</Text>
                            </View>
                            <TextInput keyboardType='numeric' style={{width: '80%', borderBottomWidth: 1 , paddingTop: 3, paddingLeft: 80, paddingBottom: 20, borderBottomColor: '#E2E2E2'}}/>
                        </View>
                        <Text style={{width: 320, height: 17, fontSize: 14, textAlign: 'center', fontWeight: 600, color: '#828282', marginVertical: 30}}>
                            Or connect with social media
                        </Text>
                        <TouchableOpacity onPress={() => { navigation.navigate('Number') }} style={{flexDirection: 'row', backgroundColor: '#5383EC', width: 320, height: 67, borderRadius: 20, alignItems: 'center', marginBottom: 20}}>
                            <Image source={require('../images/new-removebg-preview.jpg')} style={{width: 30, height: 30, tintColor: 'white', marginHorizontal: 30}}/>
                            <Text style={{color: '#FCFCFC', width: 183.27, height: 20, fontSize: 18, fontWeight: 600}}>
                                Continue with Google
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('Number') }} style={{flexDirection: 'row', backgroundColor: '#4A66AC', width: 320, height: 67, borderRadius: 20, alignItems: 'center'}}>
                            <Image source={require('../images/facebook-app-symbol-removebg-preview.jpg')} style={{width: 30, height: 30, tintColor: 'white', marginHorizontal: 30}}/>
                            <Text style={{color: '#FCFCFC', width: 207.09, height: 20, fontSize: 18, fontWeight: 600}}>
                                Continue with Facebook
                            </Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default SignIn;