import React from "react";
import {Text, StyleSheet, View, onChangeText} from "react-native";
import {TextInput} from 'react-native';

import TouchableOpacity from "react-native-web/src/exports/TouchableOpacity";
import LoginStyles from "./LoginStyles";

//const nombre del componente
const Login = () => {
    //vista renderizada del componente


    const [user, onChangeText] = React.useState('');
    const [password, onChangePwd] = React.useState('');
    return (
        //agrupar elementos en un contenedor

        <View style={LoginStyles.view}>

            <View style={LoginStyles.subContainer}>
                <Text style={LoginStyles.title}>
                    Login
                </Text>
                <Text style={LoginStyles.subtitles}>
                    User
                </Text>
                <TextInput
                    style={LoginStyles.input}
                    onChangeText={text => onChangeText(text)}
                    value={user}/>
                <Text style={LoginStyles.subtitles}>
                    Password
                </Text>
                <TextInput
                    style={LoginStyles.input}
                    secureTextEntry={true}
                    onChangeText={text => onChangePwd(text)}
                    value={password}/>
            </View>
        </View>


    )
}

//export nombre del componente
export default Login;
