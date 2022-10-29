import { StyleSheet, Image, SafeAreaView, Text, View, Pressable, FlatList } from "react-native";
import { Themes } from "../../assets/Themes";
import Song from "./Song";



export default function SongList ({tracks}) {

    const renderSongItem = ({item, index}) => {
        return <Song 
        name={item.name}
        index={index}
        artist={item.album.artists[0].name}
        album={item.album.name}
        imageurl={item.album.images[0].url}
        duration={item.duration_ms}
        />
    }

    return (

        <SafeAreaView> 
            <View style={styles.topTracksView}>
                <Image style={styles.spotImage} source={require('../../assets/spotify-logo.png')}></Image>
                
                <Text style={styles.topTracksText}>My Top Tracks</Text>

            </View>

            <FlatList style={styles.flatListComponent}
             data={tracks} 
             renderItem={(item) => renderSongItem(item)}  
             keyExtractor={(item, index) => index}>
            </FlatList> 
       
        </SafeAreaView>
      

    )

}

const styles = StyleSheet.create({

    topTracksView: {
        height: '5%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,

    }, 

    flatListComponent: {

    }, 
    testText: { 
        color: 'white',
    }, 
    testPressable: {
        backgroundColor: 'green',
        height: 50, 
        width: 200
    },
    renderTextTest: {
        backgroundColor: 'blue', 
        fontSize: 100, 
        color: 'white',
    }, 

    topTracksText: {
        color: 'white',
        fontSize: 24,

    }, 
    
    spotImage: {
        height: 20,
        width: 20,
        aspectRatio: 1,
        marginRight: 10,
    }
})