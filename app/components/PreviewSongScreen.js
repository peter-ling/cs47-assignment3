import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { create } from "react-test-renderer";
import WebView from "react-native-webview";


export default function PreviewSongScreen ({route, navigation}) {

    let url = route.params.link
    console.log(url)

    return (
        <WebView source={{uri: url}}></WebView>

    );

}

