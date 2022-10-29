import { StyleSheet, Image, SafeAreaView, Text, View, Pressable, FlatList } from "react-native";
import { millisToMinutesAndSeconds } from "../../utils";

export default function Song({name, index, artist, album, duration, imageurl}){

    return (

        
        <SafeAreaView style={styles.songElement}>

            <View style={styles.songIndexBox}>
                <Text style={styles.sampleText}>{index + 1}</Text>
            </View>

            <View style={styles.albumImageView}>

                <Image style={styles.albumImage} source={{uri: imageurl}}></Image>

            </View>

            <View style={styles.songNameAndArtist}>
                <Text style={styles.sampleText}>{name}</Text>
                <Text style={styles.sampleText}>{artist}</Text>

            </View>

            <View style={styles.albumName}>
                <Text style={styles.sampleText}>{album}</Text>

            </View>

            <View style={styles.songDuration}>
                <Text style={styles.sampleText}>{millisToMinutesAndSeconds(duration)}</Text>
            </View>


        </SafeAreaView> 
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