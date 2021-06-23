import React from "react";
import styled from "styled-components";

const Flyer = ({ topLine, botLine, icon, text }) => {
	return (
		<Container top={topLine} bot={botLine} activeOpacity={1}>
			<LeftSide>
				{icon != undefined && <Icon source={icon} />}
				<TextContainer>
					<Text>{text}</Text>
				</TextContainer>
			</LeftSide>
			<RightSide>
				<Chevron source={require("../images/chevron.png")} />
			</RightSide>
		</Container>
	);
};

export default Flyer;

const Container = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	background-color: #ffffff;
	padding: 15px;
	height: 55px;
	border-color: #e3e4e6;
	border-top-width: ${(props) => (props.top === true ? "1px" : "0")};
	border-bottom-width: ${(props) => (props.bot === true ? "1px" : "0")};
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

const Icon = styled.Image`
	height: 22px;
	width: 22px;
	margin-right: 15px;
	resize-mode: contain;
`;

const TextContainer = styled.Text`
	/*  */
`;

const Text = styled.Text`
	font-size: 16px;
`;
