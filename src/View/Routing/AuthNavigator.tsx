import {StyleSheet, View} from "react-native";
import HomePage from "../Pages/HomePage/HomePage";
import * as React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SpendingPage from "../Pages/SpendingPage/SpendingPage";
import HomeIcon from '@mui/icons-material/Home';
import {Ionicons} from "@expo/vector-icons";
import {AntDesign} from '@expo/vector-icons';

const screenOptions = {
    tabBarStyle: {
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        height: 90
    },
    tabBarItemStyle: {
        backgroundColor: '#ffffff',
        margin: 5,
        borderRadius: 10,
    },
    headerStyle: {
        backgroundColor: "rgba(70,107,65,0)", borderWidth: 0,
        shadowColor: "rgba(0,0,0,0)", shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        },
        height: 100,
    },
    headerTitleStyle: {
        color: "#000000",
        fontSize: 30,

        fontWeight: 'bold',
        shadowColor: "rgba(0,0,0,0)",
    }
};
const AuthNavigator = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator {...{screenOptions}} >
            <Tab.Screen
                name="Home"
                options={{
                    title: 'Home',
                    tabBarShowLabel: false,
                    tabBarIcon: ({size, focused, color}) => {
                        return (
                            <AntDesign name="home" size={24} color="black"/>);
                    },
                    headerRight: () => {
                        return (<Ionicons style={{
                            marginRight: 10,
                            fontSize: 30,
                        }} name="notifications-outline" size={24} color="black"/>)
                    }
                }}
                component={HomePage}/>
            <Tab.Screen
                name="Spending"

                options={{
                    tabBarShowLabel: false,
                    title: 'Spending',
                    tabBarIcon: ({size, focused, color}) => {
                        return (
                            <AntDesign name="calendar" size={24} color="black"/>
                        );
                    },
                }}
                component={SpendingPage}/>
        </Tab.Navigator>
    )
}


const styles = StyleSheet.create({
    navigator: {
        borderStyle: "solid",
        borderWidth: 1,
    }
});
export default AuthNavigator
