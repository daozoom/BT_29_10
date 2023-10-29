import React, { useState } from 'react'
import{
    View,
    Text,
    Image,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native'



const Verification = ({navigation}) => {
    const [inputFocused, setInputFocused] = useState(false);

    const hideKeyboard = () => {
        Keyboard.dismiss();
        setInputFocused(false);
    };

    return(
        <SafeAreaView>
            <TouchableWithoutFeedback onPress={hideKeyboard}>
                <View style={{width: '100%', height: '100%', paddingLeft: 20}}>
                    <StatusBar barStyle={'dark-content'}/>
                    <TouchableOpacity onPress={() => { navigation.goBack()}} style={{marginTop: 20, width: '10%'}}>
                        <Image source={require('../images/back.jpg')} style={{width: 30, height: 30}}/>
                    </TouchableOpacity>
                    <Text style={{color: '#181725', fontSize: 23, fontWeight: 600, marginTop: 80}}>
                        Enter your mobile number
                    </Text>
                    <Text style={{color: '#7C7C7C', fontSize: 16, fontWeight: 600, marginTop: 50, marginBottom: 15}}>
                        Code
                    </Text>
                    <TextInput keyboardType='numeric' style={{width: '90%', borderBottomWidth: 1 , paddingTop: 3, paddingBottom: 20, borderBottomColor: '#E2E2E2'}} onFocus={() => setInputFocused(true)} onBlur={() => setInputFocused(false)}/>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <TouchableOpacity style={{ marginTop: 350}}>
                            <Text style={{color: '#53B175', fontSize: 18}}>Resend Code</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 67, height: 67, backgroundColor: '#53B175', justifyContent: 'center', alignItems: 'center', borderRadius: 75, marginTop: 350, marginLeft: 160 }}>
                            <Image source={require('../images/back.jpg')} style={{width: 30, height: 30, transform: [{ scaleX: -1 }], tintColor: 'white'}}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

export default Verification;