import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import ConnectButton from "./app/components/ConnectButton";
import SongList from "./app/components/SongList";
import Song from "./app/components/Song";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Assign3 from "./Assign3";
import { create } from "react-test-renderer";
import DetailedSongScreen from "./app/components/DetailedSongScreen";
import PreviewSongScreen from "./app/components/PreviewSongScreen";



const Stack = createStackNavigator();

export default function App(){

    return(

        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="assign3" component={Assign3} />
                <Stack.Screen name="detailed-song" component={DetailedSongScreen} />
                <Stack.Screen name="preview-song" component={PreviewSongScreen} />
            </Stack.Navigator>
            
        </NavigationContainer>

    );

}