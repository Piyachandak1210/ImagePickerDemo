import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    PermissionsAndroid,
    Alert,
    Platform,
    TouchableHighlight,
} from 'react-native';


const Home = ({ navigation }) => {


    return (
        <SafeAreaView style={{ flex:1}}>
            <View style={styles.container}>
                <Text style={styles.titleText}>React Native Camera</Text>
                <TouchableHighlight
                    onPress={() => navigation.navigate('CameraDemo')}
                    style={styles.buttonStyle}
                >
                    <Text style={styles.buttonTextStyle}> Camera Demo </Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => navigation.navigate('Imagepicker')}
                    style={styles.buttonStyle}
                >
                    <Text style={styles.buttonTextStyle}> ImagePicker Demo </Text>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        alignItems: 'center',
    },
    titleText: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textStyle: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
        padding: 10,
        marginTop: 16,
    },
    buttonStyle: {
        fontSize: 16,
        color: 'white',
        backgroundColor: 'green',
        padding: 5,
        marginTop: 32,
        minWidth: 250,
    },
    buttonTextStyle: {
        padding: 5,
        color: 'white',
        textAlign: 'center',
    },
});

