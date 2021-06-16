import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";

const Chat = () => {
	return (
		<Container>
			<Scrollable>
				<View style={{ alignItems: "center" }}>
					<Text>Just now</Text>
				</View>
				<SentToYou>
					<AvatarContainer>
						<Avatar source={require("../images/vinted_icon.png")} />
					</AvatarContainer>
				</SentToYou>
			</Scrollable>
		</Container>
	);
};

export default Chat;

const Container = styled.View`
	background-color: white;
	flex: 1;
`;

const SentToYou = styled.View`
	flex-direction: row;
	border-width: 1px;
	border-color: red;
	height: 300px;
`;
const AvatarContainer = styled.View`
	justify-content: flex-end;
	padding: 10px;
	border-width: 1px;
	border-color: red;
`;
const Avatar = styled.Image`
	border-radius: 50px;
	height: 40px;
	width: 40px;
	resize-mode: contain;
`;
const Message = styled.View`
	border-width: 1px;
	border-color: #ededef;
`;

const Scrollable = styled.ScrollView`
	/*  */
`;
