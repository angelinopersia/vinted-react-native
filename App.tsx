import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";

import Intro from "./src/screens/Intro";
import LogSign from "./src/screens/LogSign";

import SignUp from "./src/screens/SignUp";
import LogIn from "./src/screens/LogIn";

import Tutorial from "./src/screens/Tutorial";
import Home from "./src/screens/Home";
import Popular from "./src/screens/Popular";
import Search from "./src/screens/Search";
import Sell from "./src/screens/Sell";

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar
				translucent={true}
				backgroundColor={"white"}
				barStyle={"dark-content"}
			/>
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
				<Stack.Screen name="LogSign" component={LogSign} />

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

				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Popular" component={Popular} />
				<Stack.Screen name="Search" component={Search} />
				<Stack.Screen name="Sell" component={Sell} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

// It very likely just shifts massive components rather than
// going from page to page considering
// stuff like the footer are unchanged and never load or anything
