import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image
} from 'react-native';
import LoginStyles from "../Login/LoginStyles";
import HomeStyles from "./HomeStyle";


const Home = () => {
    const results = [{id:1, name:'Shakira'},{id:2, url:'Shakira'},{id:3, url:'Shakira'} ,{id:4, url:'Shakira'} ,{id:4, url:'Shakira'}]

    return (
        <View style={styles.container}>
            <Text style={styles.title}> ¡Bienvenido a myApp ! </Text>
            <FlatList
                vertical
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return (
                       <View style={[HomeStyles.imageLogo, HomeStyles.logoView]}>
                           <Image style={[HomeStyles.imageLogo, HomeStyles.logoView]}
                                  source={require('../../../assets/1.jpg')}/>
                       </View>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

export default Home;
