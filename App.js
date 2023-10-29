import React, { useEffect } from 'react';
import SplashScreen from './src/screens/SplashScreen';
import OnBoarding from './src/screens/OnBoarding';
import SignIn from './src/screens/SignIn';
import Number from './src/screens/Number';
import Verification from './src/screens/Verification';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <OnBoarding/>
    // <SplashScreen/>
    // <SignIn/>
    // <Number/>
    // <Verification/>
    <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{headerShown: false}}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="OnBoarding" component={OnBoarding} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="Number" component={Number} />
            <Stack.Screen name="Verification" component={Verification} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
