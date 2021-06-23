import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { View } from "react-native";
import styled from "styled-components";

const Message = ({ avatar, sender, object, date }) => {
	const { navigate } = useNavigation();
	const [read, setRead] = useState(true);

	return (
		<Container
			unread={read}
			onPress={() => {
				navigate("Chat"), setRead(!false);
			}}
		>
			<AvatarContainer>
				<Avatar source={avatar} />
			</AvatarContainer>
			<View style={{ flexDirection: "column", justifyContent: "center" }}>
				<TextContainer>
					<Text primary>{sender}</Text>
					<JustNow>{date}</JustNow>
				</TextContainer>
				<TextContainer>
					<Text>{object}</Text>
				</TextContainer>
			</View>
		</Container>
	);
};

// Styles
const Container = styled.TouchableOpacity`
	flex-direction: row;
	background-color: ${(props) =>
		props.unread === true ? "#ebf9fa" : "white"};
	border-width: 1px;
	border-color: #e1e5e6;
`;

const AvatarContainer = styled.View`
	padding: 20px;
`;

const Avatar = styled.Image`
	border-radius: 50px;
	height: 50px;
	width: 50px;
	resize-mode: contain;
`;

const TextContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	width: 300px;
`;

const Text = styled.Text`
	font-size: 16px;
	color: ${(props) => (props.primary ? "black" : "#656766")};
`;

const JustNow = styled.Text`
	font-size: 14px;
	color: #989a99;
`;

export default Message;
