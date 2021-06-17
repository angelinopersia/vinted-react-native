import React from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Button, Text } from "react-native";
import styled from "styled-components";

const Footer = ({ activePage }) => {
	const { navigate } = useNavigation();
	return (
		<FooterStyle>
			{/* HOME */}
			{activePage === "Home" ? (
				<Page onPress={() => navigate("Home")}>
					<Icon source={require("../images/homeFULL.png")} />
					<IconText2>Home</IconText2>
				</Page>
			) : (
				<Page onPress={() => navigate("Home")}>
					<Icon source={require("../images/homeEMPTY.png")} />
					<IconText1>Home</IconText1>
				</Page>
			)}
			{/* SEARCH */}
			{activePage === "Search" ? (
				<Page onPress={() => navigate("Search")}>
					<Icon source={require("../images/searchFULL.png")} />
					<IconText2>Search</IconText2>
				</Page>
			) : (
				<Page onPress={() => navigate("Search")}>
					<Icon source={require("../images/searchEMPTY.png")} />
					<IconText1>Search</IconText1>
				</Page>
			)}
			{/* SELL */}
			<Page onPress={() => navigate("Sell")}>
				<Icon source={require("../images/sellEMPTY.png")} sell />
				<IconText1>Sell</IconText1>
			</Page>
			{/* INBOX */}
			{activePage === "Inbox" ? (
				<Page onPress={() => navigate("Inbox")}>
					<Icon source={require("../images/inboxFULL.png")} />
					<IconText2>Inbox</IconText2>
				</Page>
			) : (
				<Page onPress={() => navigate("Inbox")}>
					<Icon source={require("../images/inboxEMPTY.png")} />
					<IconText1>Inbox</IconText1>
				</Page>
			)}
			{/* PROFILE */}
			{activePage === "Profile" ? (
				<Page onPress={() => navigate("Profile")}>
					<Icon source={require("../images/profileFULL.png")} />
					<IconText2>Profile</IconText2>
				</Page>
			) : (
				<Page onPress={() => navigate("Profile")}>
					<Icon source={require("../images/profileEMPTY.png")} />
					<IconText1>Profile</IconText1>
				</Page>
			)}
		</FooterStyle>
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
