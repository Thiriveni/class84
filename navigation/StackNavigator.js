import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import TabNavigator from "../navigation/TabNavigator"
import StoryScreen from "../screens/StoryScreen"

const Stack=createStackNavigator();

const stackNavigator=()=>{
    return(
        <Stack.Navigator 
        initialRouteName="Home" 
        screenOptions={{headerShown:false}}
        >
            <Stack.Screen
            name="Home"
            component={TabNavigator}
            />
            <Stack.Screen
            name="StoryScreen"
            component={StoryScreen}
            />
        </Stack.Navigator>
    )
}

export default stackNavigator