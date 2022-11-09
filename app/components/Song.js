import { StyleSheet, Image, SafeAreaView, Text, View, Pressable, FlatList } from "react-native";
import { millisToMinutesAndSeconds } from "../../utils";
import { Themes } from "../../assets/Themes";
import { AntDesign } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { WebView } from "react-native-webview"


let pressRow = ({navigation, external_url}) => { 
    // want to go to song detail page 

    // navigation.navigate("detailed-song", {uri: {external_url}})
    

    console.log("row is pressed")
    
}



export default function Song({name, index, artist, album, duration, imageurl, navigation, external_url, preview_url}){
    let prev = preview_url
    let link = external_url
    return (

        
            <View style={styles.songElement}>
                <Pressable style={styles.songIndexBox} onPress={() => {navigation.navigate("preview-song", {link: prev})}}>

                    <AntDesign name="play" size={24} color={Themes.colors.spotify} />   
                </Pressable>


                
                <Pressable style={styles.albumImageView} onPress={() => {navigation.navigate("detailed-song", {link: link})}}>

                    <Image style={styles.albumImage} source={{uri: imageurl}}></Image>

                </Pressable>

                <Pressable style={styles.songNameAndArtist} onPress={() => {navigation.navigate("detailed-song", {link: link})}}>
                    <Text style={styles.sampleText}>{name}</Text>
                    <Text style={styles.sampleText}>{artist}</Text>

                </Pressable>

                <Pressable style={styles.albumName} onPress={() => {navigation.navigate("detailed-song", {link: link})}}>
                    <Text style={styles.sampleText}>{album}</Text>

                </Pressable>

                <Pressable style={styles.songDuration} onPress={() => {navigation.navigate("detailed-song", {link: link})}}>
                    <Text style={styles.sampleText}>{millisToMinutesAndSeconds(duration)}</Text>
                </Pressable>
            </View>
       
    )
}

const styles = StyleSheet.create({

    songDuration: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',
        

    }, 

    albumName: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '25%',

    },

    songNameAndArtist: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '35%',

    }, 

    albumImageView: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '15%',

    },

    albumImage: {
        height: 50,
        width: 50,
    },

    songIndexBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '10%'

    },
    

    songElement: { 
        flexDirection: 'row',
        display: 'flex',

    }, 

    whiteText: {
        color: 'white',
    },


    sampleText: {
        color: 'white',
        fontSize: 10

    }

})