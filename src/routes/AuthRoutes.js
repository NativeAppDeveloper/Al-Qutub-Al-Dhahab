import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/Login';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const AuthRoutes = () => {
    const {screenName}=useSelector((state)=>state.setIntialScreenAuthReducres)
    console.log(screenName,'screenName');

    return (
        <Stack.Navigator
        // initialRouteName='BussinessDetails'
            initialRouteName={!screenName?"Login":"Step1"}
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Login" component={Login} />   
        </Stack.Navigator>
    )
}

export default AuthRoutes