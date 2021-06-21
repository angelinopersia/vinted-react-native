import React from "react";
import { useNavigation } from "@react-navigation/core";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Button, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import styled from "styled-components";

import Home from "../newScreens/Home";
import Search from "../newScreens/Search";
import Sell from "../newScreens/Sell";
import Inbox from "../newScreens/Inbox";
import Profile from "../newScreens/Profile";

function HomeScreen() {
	return <Home />;
}
function SearchScreen() {
	return <Search />;
}
function SellScreen() {
	return <Sell />;
}
function InboxScreen() {
	return <Inbox />;
}
function ProfileScreen() {
	return <Profile />;
}

// Had to give up on headers and making some tabs function as stack pages

const Tab = createBottomTabNavigator();

const Footer = ({ activePage }) => {
	const { navigate } = useNavigation();
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let icon;

					if (route.name === "Home") {
						icon = focused
							? require("../images/homeFULL.png")
							: require("../images/homeEMPTY.png");
					} else if (route.name === "Search") {
						icon = focused
							? require("../images/searchFULL.png")
							: require("../images/searchEMPTY.png");
					} else if (route.name === "Sell") {
						icon = require("../images/sellEMPTY.png");
						return <Icon source={icon} sell />;
					} else if (route.name === "Inbox") {
						icon = focused
							? require("../images/inboxFULL.png")
							: require("../images/inboxEMPTY.png");
					} else if (route.name === "Profile") {
						icon = focused
							? require("../images/profileFULL.png")
							: require("../images/profileEMPTY.png");
					}
					return <Icon source={icon} />;
				},
			})}
			tabBarOptions={{
				activeTintColor: "#39b2bd",
				inactiveTintColor: "#666666",
			}}
		>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Search" component={SearchScreen} />
			<Tab.Screen name="Sell" component={SellScreen} />
			<Tab.Screen name="Inbox" component={InboxScreen} />
			<Tab.Screen name="Profile" component={ProfileScreen} />
		</Tab.Navigator>
	);
};

// Styles
const FooterStyle = styled.View`
	background-color: white;
	border-top-width: 1px;
	border-color: #ececec;
	height: 60px;
	flex-direction: row;
	justify-content: space-around;
`;

const Icon = styled.Image`
	width: ${(props) => (props.sell ? "25px" : "22px")};
	height: ${(props) => (props.sell ? "25px" : "22px")};
	margin-top: ${(props) => (props.sell ? "8px" : "10px")};
	/* This stuff above was to deal with the Sell icon being bigger than others */
	margin-bottom: 3px;
	resize-mode: contain;
`;

const IconText1 = styled.Text`
	color: #666666;
	font-size: 12px;
`;

const IconText2 = styled.Text`
	color: #39b2bd;
	font-size: 12px;
`;

const Page = styled.TouchableOpacity`
	justify-content: center;
	align-items: center;
`;

export default Footer;

// <FooterStyle>
// 	{/* HOME */}
// 	{activePage === "Home" ? (
// 		<Page onPress={() => navigate("Home")}>
// 			<Icon source={require("../images/homeFULL.png")} />
// 			<IconText2>Home</IconText2>
// 		</Page>
// 	) : (
// 		<Page onPress={() => navigate("Home")}>
// 			<Icon source={require("../images/homeEMPTY.png")} />
// 			<IconText1>Home</IconText1>
// 		</Page>
// 	)}
// 	{/* SEARCH */}
// 	{activePage === "Search" ? (
// 		<Page onPress={() => navigate("Search")}>
// 			<Icon source={require("../images/searchFULL.png")} />
// 			<IconText2>Search</IconText2>
// 		</Page>
// 	) : (
// 		<Page onPress={() => navigate("Search")}>
// 			<Icon source={require("../images/searchEMPTY.png")} />
// 			<IconText1>Search</IconText1>
// 		</Page>
// 	)}
// 	{/* SELL */}
// 	<Page onPress={() => navigate("Sell")}>
// 		<Icon source={require("../images/sellEMPTY.png")} sell />
// 		<IconText1>Sell</IconText1>
// 	</Page>
// 	{/* INBOX */}
// 	{activePage === "Inbox" ? (
// 		<Page onPress={() => navigate("Inbox")}>
// 			<Icon source={require("../images/inboxFULL.png")} />
// 			<IconText2>Inbox</IconText2>
// 		</Page>
// 	) : (
// 		<Page onPress={() => navigate("Inbox")}>
// 			<Icon source={require("../images/inboxEMPTY.png")} />
// 			<IconText1>Inbox</IconText1>
// 		</Page>
// 	)}
// 	{/* PROFILE */}
// 	{activePage === "Profile" ? (
// 		<Page onPress={() => navigate("Profile")}>
// 			<Icon source={require("../images/profileFULL.png")} />
// 			<IconText2>Profile</IconText2>
// 		</Page>
// 	) : (
// 		<Page onPress={() => navigate("Profile")}>
// 			<Icon source={require("../images/profileEMPTY.png")} />
// 			<IconText1>Profile</IconText1>
// 		</Page>
// 	)}
// </FooterStyle>
