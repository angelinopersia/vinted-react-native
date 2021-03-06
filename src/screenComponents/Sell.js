import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

import MintButton from "../components/MintButton";
import Flyer from "../components/Flyer";

const Sell = ({}) => {
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
				<Flyer topLine={true} botLine={true} text="Category" />
				<Flyer botLine={true} text="Brand" />
				<Flyer botLine={true} text="Condition" />
				<Separator />
				<Flyer topLine={true} botLine={true} text="Price" />
				<Flyer
					botLine={true}
					text="I'm interested in swapping this"
					checkbox
				/>
				<ButtonView>
					<MintButton
						text="Upload"
						version="full"
						destination="Home"
					/>
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
	/*  */
`;
