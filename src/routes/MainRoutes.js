import { Platform, Image, } from 'react-native';
import React, { } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { moderateScale } from 'react-native-size-matters';
import { colors, fonts } from '../utils/Styles';
import { width } from '../utils/Helper';
import Home from '../screens/Home/Home';
import AddUser from '../screens/Home/AddUser';
import EditUser from '../screens/Home/EditUser';
import Dashboard from '../screens/Home/Dashboard';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabStack = ({ route }) => {
  return (
    <>
      <Tab.Navigator
        backBehavior="history"
        initialRouteName="SellerHome"
        screenOptions={({ route: { name } }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            switch (name) {
              case 'Home':
                return (
                  <Image
                    source={require('../assets/Home.png')}
                    style={{
                      height: moderateScale(25),
                      width: moderateScale(25),
                    }}
                    resizeMode="contain"
                  />
                );
              case 'Dashboard':
                return (
                  <Image
                    source={require('../assets/Dashboard.png')}
                    style={{
                      height: moderateScale(25),
                      width: moderateScale(25),
                    }}
                    resizeMode="contain"
                  />
                );
            }
          },

          keyboardHidesTabBar: false,
          tabBarActiveTintColor: colors.theme,
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {
            fontSize: moderateScale(12),
            fontFamily: fonts.medium,
            // lineHeight:10

            // borderWidth:1,
          },
          tabBarStyle: {
            borderTopWidth: 0,
            paddingTop: 20,
            width: width,
            height: moderateScale(80),
            paddingBottom:
              Platform.OS == 'ios' ? moderateScale(15) : moderateScale(10),
            backgroundColor: colors.white,
            // paddingVertical:moderateScale(100)
          },
        })}>
        <Tab.Screen
          name={'Home'}
          options={{ headerShown: false }}
          component={Home}
        />

        <Tab.Screen
          name={'Dashboard'}
          options={{ headerShown: false }}
          component={Dashboard}
        />
      </Tab.Navigator>
    </>
  );
};



const MainRoutes = () => {

  return (
    <>
      <Stack.Navigator
        initialRouteName="Tab"
        // initialRouteName="GooglePlacesInput"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Tab" component={TabStack} />
        <Stack.Screen name="AddUser" component={AddUser} />
        <Stack.Screen name="EditUser" component={EditUser} />
      </Stack.Navigator>
    </>
  );
};

export default MainRoutes;
