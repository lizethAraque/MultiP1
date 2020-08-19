import React from "react";
import {Text, StyleSheet, View, Button} from "react-native";

const HomeStyles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 8
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: 35,
        paddingTop: 24
    },
    view: {
        backgroundColor: 'rgb(54,60,76)',
        flex: 1
    },
    subtitles: {
        color: 'white',
        paddingTop: 24,
        paddingBottom: 4
    },
    subContainer: {
        paddingLeft: 32,
        paddingRight: 32
    },
    imageLogo: {
        height: 150,
        width: 170,
        paddingTop: 40,
        paddingBottom: 40
    },
    logoView: {
        justifyContent: 'center',
        alignSelf: 'center',
        paddingTop: 40,
        paddingBottom: 40
    },
    loginButton: {
        color: 'white',
        backgroundColor: 'rgb(27,188,232)',
        borderRadius: 8,
        marginTop: 32
    },
    btnStyle:{
        height: 40,
        textAlign: 'center',
        color: 'white',
        fontSize: 24


    }

});

export default HomeStyles;