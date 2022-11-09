// import React, {useState} from 'react';
import { StyleSheet, Image, SafeAreaView, Text, View, Pressable } from "react-native";
import { Themes } from "../../assets/Themes";



export default function ConnectButton ({pressButton}) {
    return (

        <Pressable onPress={() => pressButton()} style={styles.connectPressable}>
            <View style={styles.connectViewContainer}>
                <Image style={styles.spotLogo} source={require('../../assets/spotify-logo.png')}></Image>
                <Text style={styles.someText}>Connect with Spotify</Text>
            </View>
        </Pressable>

    )


}

const styles = StyleSheet.create({

    connectViewContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },

    connectPressable: {
        backgroundColor: Themes.colors.spotify,
        width: '60%', 
        height: '10%',
        borderRadius: 99999,
        flexDirection: 'row',
        justifyContent: 'center',
        
    

    },
    spotLogo: {
        height: 40, 
        width: 40,

    },

    someText: {
        // backgroundColor: 'yellow',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16,
        marginLeft: 10,
    }

})