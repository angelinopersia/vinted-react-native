import React, { useState } from "react";
import { Linking, View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

const Chat = () => {
	const [isTranslated, setTranslation] = useState(false);

	return (
		<Container>
			<Scrollable>
				<View style={{ alignItems: "center", padding: 15 }}>
					<When>Just now</When>
				</View>
				<SentToYou>
					<AvatarContainer>
						<Avatar source={require("../images/vinted_icon.png")} />
					</AvatarContainer>
					<MessageContainer>
						<Message>
							{`Welcome to Vinted.

We help you sell the clothes you no longer wear.

Best of all - there are no selling fees on Vinted. You always get to keep 100% of what you make.

Plus, you can shop for items you won't find in stores anymore and discover exciting new styles.

Learn how Vinted works:
`}
							<Mint
								onPress={() =>
									Linking.openURL(
										"https://www.vinted.fr/how_it_works"
									)
								}
							>
								https://www.vinted.fr/how_it_works
							</Mint>
							{`

And if you ever need help, just go to our Help Centre. You can also contact us from there and we proise to get back to you within 24 hours:
`}
							<Mint
								onPress={() =>
									Linking.openURL(
										"https://www.vinted.fr/help"
									)
								}
							>
								https://www.vinted.fr/help
							</Mint>
							{`

If you don't wear it - sell it!

Team Vinted`}
						</Message>
					</MessageContainer>
				</SentToYou>
				{isTranslated === false ? (
					<TouchableOpacity onPress={() => setTranslation(true)}>
						<Translate>Translate this conversation</Translate>
					</TouchableOpacity>
				) : (
					<TouchableOpacity onPress={() => setTranslation(false)}>
						<Translate>Show untranslated conversation</Translate>
						<View style={{ alignItems: "center", marginTop: -20 }}>
							<When>Translated by Google</When>
						</View>
					</TouchableOpacity>
				)}
			</Scrollable>
		</Container>
	);
};

export default Chat;

const Container = styled.View`
	background-color: white;
	flex: 1;
`;

const When = styled.Text`
	color: #989898;
	font-size: 12px;
`;

const SentToYou = styled.View`
	flex-direction: row;
`;
const AvatarContainer = styled.View`
	justify-content: flex-end;
	padding: 5px 10px 0px 15px;
`;
const Avatar = styled.Image`
	border-radius: 50px;
	height: 35px;
	width: 35px;
	resize-mode: contain;
`;
const MessageContainer = styled.View`
	border-width: 1px;
	border-color: #ededef;
	border-radius: 5px;
	padding: 10px;
	width: 300px;
`;
const Message = styled.Text`
	color: #666666;
	font-size: 16px;
`;
const Mint = (props) => (
	<Text style={{ color: "#39b2bd" }}>{props.children}</Text>
);

const Translate = styled.Text`
	text-align: center;
	color: #39b2bd;
	padding: 30px;
	font-size: 17px;
`;

const Scrollable = styled.ScrollView`
	/*  */
`;
