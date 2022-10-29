import { StyleSheet, SafeAreaView, Text } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import ConnectButton from "./app/components/ConnectButton";
import SongList from "./app/components/SongList";
import Song from "./app/components/Song";


export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();
  // console.log(tracks[3].album.images[0].url)
  // console.log("$$$$$$$$$$$$$$$$")
  // console.log(tracks[2].uri)
  // id: tracks[i].uri
  // SONG NAME: tracks[i].name
  // DURATION MS: tracks[i].duration_ms
  // Artist Name: tracks[i].album.artists[0].name
  // Album: tracks[i].album.name
  // image url = tracks[i].album.images[0].url
  let contentDisplayed=null



  if (!token){
    contentDisplayed = <ConnectButton pressButton={getSpotifyAuth}></ConnectButton>
  } else {
    contentDisplayed = <SongList tracks={tracks}></SongList>
    
  }

  return (
    

    <SafeAreaView style={styles.container}>
      {contentDisplayed}
      
    </SafeAreaView>
  );

  

      

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  testText: {
    color: 'white',
  }
});
