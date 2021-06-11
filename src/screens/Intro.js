import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import MintButton from "../components/MintButton";

const IntroImage = "../images/intro.png";

const Intro = ({ navigation }) => {
	return (
		<Container>
			<IntroPic source={require(IntroImage)} />

			<Header>
				<HeaderText>Sell pre-loved clothes completely free</HeaderText>
			</Header>

			<MintButton
				destination={"SignUp"}
				text="Sign up for Vinted"
				version="full"
			/>
			<MintButton
				destination={"LogIn"}
				text="I already have an account"
				version="empty"
			/>

			<AboutVinted>
				<Text style={{ color: "gray" }}>About Vinted: </Text>
				<Text onPress={() => navigation.navigate("Home")}>
					Our platform
				</Text>
			</AboutVinted>
		</Container>
	);
};

// Styles
const Container = styled.View`
	background-color: white;
	flex: 1;
	align-items: center;
	justify-content: center;
`;

const IntroPic = styled.Image`
	flex: 1;
	width: 93%;
	height: 93%;
	resize-mode: contain;
`;

const Header = styled.View`
	padding: -20px 30px 30px 30px;
`;

const HeaderText = styled.Text`
	font-size: 25px;
	text-align: center;
`;

const AboutVinted = styled.View`
	flex-direction: row;
	padding: 10px 10px 40px 10px;
	text-align: center;
`;

export default Intro;
