import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";

import Intro from "./src/screens/Intro";

import SignUp from "./src/screens/SignUp";
import LogIn from "./src/screens/LogIn";

import Tutorial from "./src/screens/Tutorial";
import Main from "./src/screens/Main";

import Chat from "./src/screens/Chat";

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					headerTitleStyle: {
						fontWeight: "100",
					},
					headerStyle: {
						shadowOpacity: 0,
						elevation: 0,
						borderBottomWidth: 1,
					},
				}}
				initialRouteName="Intro"
			>
				<Stack.Screen name="Intro" component={Intro} />

				<Stack.Screen
					name="SignUp"
					component={SignUp}
					options={{
						headerShown: true,
						title: "Sign up",
					}}
				/>
				<Stack.Screen
					name="LogIn"
					component={LogIn}
					options={{
						headerShown: true,
						title: "Log in",
					}}
				/>
				<Stack.Screen name="Tutorial" component={Tutorial} />

				<Stack.Screen name="Main" component={Main} />

				<Stack.Screen
					name="Chat"
					component={Chat}
					options={{
						headerShown: true,
						title: "Team Vinted",
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
