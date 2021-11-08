import React from "react";
import { View } from "react-native";
import styled from "styled-components";

const ProfileFlyer = ({ navigation, avatar, username }) => {
	return (
		<Container>
			<LeftSide>
				<AvatarContainer>
					<Avatar source={avatar} />
				</AvatarContainer>
				{/* Sometimes it just doesn't load the border radius at all, idk why */}
				<TextContainer>
					<Text>{username}</Text>
					<Text style={{ color: "#666666" }}>View my profile</Text>
				</TextContainer>
			</LeftSide>
			<RightSide>
				<Chevron source={require("../images/chevron.png")} />
			</RightSide>
		</Container>
	);
};

export default ProfileFlyer;

const Container = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	background-color: #ffffff;
	padding: 15px;
	height: 85px;
`;

const LeftSide = styled.View`
	flex-direction: row;
	align-items: center;
	width: 60%;
`;
const RightSide = styled.View`
	flex-direction: row;
	justify-content: flex-end;
	width: 35%;
`;

const Chevron = styled.Image`
	height: 12px;
	width: 12px;
	resize-mode: contain;
`;

const AvatarContainer = styled.View`
	height: 50px;
	width: 50px;
	border-radius: 100px;
	margin-right: 20px;
`;

const Avatar = styled.Image`
	height: 50px;
	width: 50px;
	border-radius: 100px;
	resize-mode: contain;
`;

const TextContainer = styled.View`
	/*  */
`;

const Text = styled.Text`
	font-size: 16px;
`;
