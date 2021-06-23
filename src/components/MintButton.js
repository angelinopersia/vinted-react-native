import React from "react";
import { useNavigation } from "@react-navigation/core";
import styled from "styled-components";

const MintButton = ({ destination, text, emptyStyle, initialRoute }) => {
	const { navigate } = useNavigation();

	return (
		<MintButtonStyle
			emptyStyle={emptyStyle}
			onPress={() =>
				navigate(destination, {
					initial: initialRoute,
				})
			}
		>
			<ButtonText emptyStyle={emptyStyle}>{text}</ButtonText>
		</MintButtonStyle>
	);
};

// Styles
const MintButtonStyle = styled.TouchableOpacity`
	background-color: ${(props) =>
		props.emptyStyle === true ? "transparent" : "#39b2bd"};
	border: 1px;
	border-color: #39b2bd;
	border-radius: 5px;
	align-items: center;
	padding: 10px;
	margin: 7px;
	width: 93%;
`;

const ButtonText = styled.Text`
	color: ${(props) => (props.emptyStyle === true ? "#39b2bd" : "white")};
	font-size: 16px;
`;

export default MintButton;
