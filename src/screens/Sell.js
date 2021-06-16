import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";

import MintButton from "../components/MintButton";

const Sell = ({ navigation }) => {
	return (
		<Container>
			<Scrollable>
				<PhotoSection>
					<PhotoTxtView>
						<PhotoText>Add up to 20 photos. </PhotoText>
						<PhotoText mint>See photo tips.</PhotoText>
					</PhotoTxtView>
					<UploadView>
						<UploadPhotos>
							<UploadText plus>＋ </UploadText>
							<UploadText>Upload photos</UploadText>
						</UploadPhotos>
					</UploadView>
				</PhotoSection>
				<Separator />
				<TitleSection>
					<TitleDesc>Title</TitleDesc>
					<InputContainer>
						<Input underlineColorAndroid="transparent" />
					</InputContainer>
					<TitleDesc example>e.g. White COS Jumper</TitleDesc>
				</TitleSection>
				<DescriptionSection>
					<TitleDesc>Describe your item</TitleDesc>
					<InputContainer>
						<Input underlineColorAndroid="transparent" />
					</InputContainer>
					<TitleDesc example>
						e.g. only worn a few times, true to size
					</TitleDesc>
				</DescriptionSection>
				<Separator />
				<Others top>
					<OthersText>Category</OthersText>
				</Others>
				<Others top>
					<OthersText>Brand</OthersText>
				</Others>
				<Others top bot>
					<OthersText>Condition</OthersText>
				</Others>
				<Separator />
				<Others top>
					<OthersText>Price</OthersText>
				</Others>
				<Others top bot>
					<OthersText>I'm interested in swapping this</OthersText>
				</Others>
				<ButtonView>
					<MintButton text="Upload" version="full" />
				</ButtonView>
				<ArticleView>
					<ArticleText>
						A professional seller posing as a consumer or a
						non-professional on
					</ArticleText>
					<ArticleText>
						Vinted incurs the penalties provided for in{" "}
						<Mint>Article L. 132-2</Mint> of the
					</ArticleText>
					<ArticleText>Consumer Code.</ArticleText>
				</ArticleView>
			</Scrollable>
		</Container>
	);
};

// If came from tutorial, make X return to home?
// Add chevrons, add tick box, inputs placeholders need to shift below when selected
// Remove input line of description

export default Sell;

//// PHOTO SECTION ////
const Separator = styled.View`
	height: 15px;
`;

const PhotoSection = styled.View`
	height: 195px;
	background-color: #ffffff;
	border-bottom-width: 1px;
	border-color: #e3e4e6;
`;
const PhotoTxtView = styled.View`
	padding-top: 15px;
	flex-direction: row;
	justify-content: center;
`;
const PhotoText = styled.Text`
	color: ${(props) => (props.mint ? "#39b2bd" : "#999999")};
`;
const Container = styled.View`
	background-color: #f5f6f8;
	flex: 1;
`;

// Upload photos
const UploadView = styled.TouchableOpacity`
	justify-content: center;
	align-items: center;
	padding: 55px;
	/* border: red;
	border-width: 1px; */
`;
const UploadPhotos = styled.TouchableOpacity`
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-width: 1.5px;
	border-radius: 5px;
	border-color: #39b2bd;
	padding: 5px;
	height: 35px;
	width: 130px;
`;
const UploadText = styled.Text`
	text-align: center;
	color: #39b2bd;
	font-size: ${(props) => (props.plus ? "18px" : "13px")};
	/* border: red;
	border-width: 1px; */
`;

/// TITLE DESCRIPTION SECTION ///
// TITLE
const TitleSection = styled.View`
	height: 105px;
	background-color: #ffffff;
	border-bottom-width: 1px;
	border-color: #e3e4e6;
`;
const TitleDesc = styled.Text`
	color: #999999;
	padding: 15px;
	font-size: ${(props) => (props.example ? "12px" : "14px")};
`;
const Input = styled.TextInput`
	font-size: 16px;
`;
const InputContainer = styled.View`
	margin: -15px 15px -5px 15px;
	border-bottom-width: 1px;
	border-color: #39b2bd;
`;

// DESCRIPTION
const DescriptionSection = styled.View`
	height: 115px;
	background-color: #ffffff;
`;

const Others = styled.TouchableOpacity`
	justify-content: center;
	background-color: #ffffff;
	padding: 15px;
	height: 55px;
	border-color: #e3e4e6;
	border-top-width: ${(props) => (props.top ? "1px" : "0")};
	border-bottom-width: ${(props) => (props.bot ? "1px" : "0")};
`;

const OthersText = styled.Text`
	font-size: 17px;
`;

const ButtonView = styled.View`
	align-items: center;
	padding: 45px 0px 20px 0px;
`;

const ArticleView = styled.View`
	margin: 0 15px 15px 15px;
`;

const ArticleText = styled.Text`
	color: #999999;
	font-size: 12px;
`;

const Mint = (props) => (
	<Text style={{ color: "#39b2bd", textDecorationLine: "underline" }}>
		{props.children}
	</Text>
);

const Scrollable = styled.ScrollView`
	/* border: red;
	border-width: 1px; */
`;
