import React from 'react' ;
import { Button , Text , View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native' ;
import {createStackNavigator} from '@react-navigation/stack' ;

import Login from "./Login" ;
import SignUp from "./SignUp" ;
import Landing from "./Landing" ;
const Stack = createStackNavigator();

export default function createStackNavigator ()
{
    return(
        <Stack.Navigator>
            <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
            <Stack.Screen name="Login" component={Login}></Stack.Screen>
            <Stack.Screen name="Landing" component={Landing}></Stack.Screen>
        </Stack.Navigator>

    );
}