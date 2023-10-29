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

const Number = ({navigation}) => {
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
                    <TouchableOpacity onPress={() => { navigation.goBack() }} style={{marginTop: 20, width: '10%'}}>
                        <Image source={require('../images/back.jpg')} style={{width: 30, height: 30}}/>
                    </TouchableOpacity>
                    <Text style={{color: '#181725', fontSize: 23, fontWeight: 600, marginTop: 80}}>
                        Enter your mobile number
                    </Text>
                    <Text style={{color: '#7C7C7C', fontSize: 16, fontWeight: 600, marginTop: 50, marginBottom: 15}}>
                        Mobile Number
                    </Text>
                    <View style={{width: '90%'}}>
                        <View style={{flexDirection: 'row', position: 'absolute', alignItems: 'center'}}>
                            <Image source={require('../images/Rectangle11flag.jpg')} style={{ width: 34, height: 23.7}} />
                            <Text style={{marginHorizontal: 5}}>+880</Text>
                        </View>
                        <TextInput keyboardType='numeric' style={{width: '90%', borderBottomWidth: 1 , paddingTop: 3, paddingLeft: 80, paddingBottom: 20, borderBottomColor: '#E2E2E2'}}/>
                    </View>
                    <TouchableOpacity onPress={() => { navigation.navigate('Verification') }} style={{width: 67, height: 67, backgroundColor: '#53B175', justifyContent: 'center', alignItems: 'center', borderRadius: 75, marginTop: 350, marginLeft: 250 }}>
                        <Image source={require('../images/back.jpg')} style={{width: 30, height: 30, transform: [{ scaleX: -1 }], tintColor: 'white'}}/>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

export default Number;