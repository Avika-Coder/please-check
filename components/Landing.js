import React from 'react' ;
import { StyleSheet , Text , View } from 'react-native';
import BasicButton from "./BasicButton" ;

export default function Landing ({navigation})
{
    function handleLoginBtnClick()
    {
        navigation.navigate('Login')
    }
    function handleSignUpBtnClick()
    {
        navigation.navigate('SignUp')
    }

    return(
        <View>
            <Text> Welcome here !! </Text>
            <BasicButton  text="Login"  onPress={handleLoginBtnClick}/>
            <BasicButton  text="SignUp"  onPress={handleSignUpBtnClick}/>
        </View>
    )
}