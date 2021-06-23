import React from "react";
import { Image, Text, useWindowDimensions, View } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import MintButton from "../components/MintButton";
import styled from "styled-components";

import { Dimensions } from "react-native";
const win = Dimensions.get("window");
const ratio = win.width / 1080;

// TAB STUFF
const renderTabBar = (props) => (
	<TabBar
		activeColor="black"
		inactiveColor="#666666"
		{...props}
		renderLabel={({ route, color }) => (
			<Text style={{ color, margin: 8 }}>{route.title}</Text>
		)}
		indicatorStyle={{ backgroundColor: "#39b2bd" }}
		style={{
			backgroundColor: "white",
			elevation: 0,
			borderBottomWidth: 1,
			borderColor: "#e7e7e7",
			marginBottom: -1,
		}}
		pressColor="transparent"
	/>
);
const FirstRoute = () => (
	<Page>
		<Image
			source={require("../images/Intro/1st.png")}
			style={{ width: win.width, height: 720 * ratio }}
		/>
		<TextContainer>
			<Title>Earn cash selling clothes</Title>
		</TextContainer>
		<TextContainer>
			<Description>
				Don't wear it? Sell it on Vinted! List the clothes you no longer
				need and sell them for your price.
			</Description>
		</TextContainer>
	</Page>
);
const SecondRoute = () => (
	<Page>
		<Image
			source={require("../images/Intro/2nd.png")}
			style={{ width: win.width, height: 720 * ratio }}
		/>
		<TextContainer>
			<Title>Keep 100% of your earnings</Title>
		</TextContainer>
		<TextContainer>
			<Description>
				Selling is completely free, so you'll always keep all you make.
				Declutter your wardrobe and make a little extra cash with
				Vinted.
			</Description>
		</TextContainer>
	</Page>
);
const ThirdRoute = () => (
	<Page>
		<Image
			source={require("../images/Intro/3rd.png")}
			style={{ width: win.width, height: 720 * ratio }}
		/>
		<TextContainer>
			<Title>It's simple and secure</Title>
		</TextContainer>
		<TextContainer>
			<Description>
				List in just 3 minutes: simply snap, upload and sell. 45 million
				people use Vinted globally and our support team is always here
				to help.
			</Description>
		</TextContainer>
	</Page>
);
const renderScene = SceneMap({
	first: FirstRoute,
	second: SecondRoute,
	third: ThirdRoute,
});

// RENDER
const Tutorial = ({ navigation }) => {
	const layout = useWindowDimensions();

	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: "first", title: "First" },
		{ key: "second", title: "Second" },
		{ key: "third", title: "Third" },
	]);
	console.log(index);
	return (
		<Container>
			{/* <View
				style={{
					flex: 1,
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Button
					title="Skip"
					onPress={() => navigation.navigate("Main")}
				/>
			</View> */}
			<TabView
				renderTabBar={() => null}
				navigationState={{ index, routes }}
				renderScene={renderScene}
				onIndexChange={setIndex}
				initialLayout={{ width: layout.width }}
			/>
			<IndicatorView>
				<View style={{ width: 20 }}>
					{index === 0 ? (
						<Indicator mint>•</Indicator>
					) : (
						<Indicator>•</Indicator>
					)}
				</View>
				<View style={{ width: 20 }}>
					{index === 1 ? (
						<Indicator mint>•</Indicator>
					) : (
						<Indicator>•</Indicator>
					)}
				</View>
				<View style={{ width: 20 }}>
					{index === 2 ? (
						<Indicator mint>•</Indicator>
					) : (
						<Indicator>•</Indicator>
					)}
				</View>
			</IndicatorView>
			<UploadView>
				<MintButton destination={"Sell"} text="Upload" />
			</UploadView>
		</Container>
	);
};

export default Tutorial;

// Make so that you can't return to this page

// Styles
const Container = styled.View`
	flex: 1;
`;
const Page = styled.View`
	flex: 1;
`;

const TextContainer = styled.View`
	padding: 15px 15px 0 15px;
`;
const Title = styled.Text`
	text-align: center;
	font-size: 25px;
`;
const Description = styled.Text`
	font-size: 16px;
	color: #666666;
`;

const IndicatorView = styled.View`
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 50px;
`;
const Indicator = styled.Text`
	text-align: center;
	color: ${(props) => (props.mint ? "#39b2bd" : "#e2e2e2")};
	font-size: ${(props) => (props.mint ? "60px" : "40px")};
`;

const UploadView = styled.View`
	margin: 10px 0 10px 0;
	justify-content: center;
	align-items: center;
`;

const SkipView = styled.TouchableOpacity`
	position: absolute;
`;
