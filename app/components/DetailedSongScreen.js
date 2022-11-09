import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { create } from "react-test-renderer";
import WebView from "react-native-webview";


export default function DetailedSongScreen ({navigation, route}) {

    const params = route.params
    const link = params.link
    // console.log(link)

    // let url = route.params

    // console.log({external_url})
    // console.log(url)
    return (
        <WebView source={{uri: link}}></WebView>
    );

}

