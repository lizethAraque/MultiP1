import React from "react";
import {Text, Image, View,TouchableOpacity} from "react-native";
import {TextInput} from 'react-native';
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

                <View style={LoginStyles.logoView}>
                    <Image style={[LoginStyles.imageLogo, LoginStyles.logoView]}
                           source={require('../../../assets/logo3.png')}/>
                </View>
                <Text style={LoginStyles.title}>
                    Get started!
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


                <TouchableOpacity
                    style = {LoginStyles.loginButton}>
                    <Text style={LoginStyles.btnStyle} >Login</Text>
                </TouchableOpacity>
            </View>
        </View>


    )
}

//export nombre del componente
export default Login;
