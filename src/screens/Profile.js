import React from "react";
import styled from "styled-components";

import ProfileFlyer from "../components/ProfileFlyer";
import Flyer from "../components/Flyer";
import Footer from "../components/Footer";

const Profile = () => {
	return (
		<Container>
			<Scrollable>
				<ProfileFlyer
					avatar={require("../images/Profile/basic_avatar.png")}
					username="john_doe334"
				/>
				<Flyer
					topLine={true}
					botLine={true}
					text="Your guide to Vinted"
					icon={require("../images/Profile/guide.png")}
				/>
				<Separator />
				<Flyer
					topLine={true}
					botLine={true}
					text="My favourites"
					icon={require("../images/Profile/heart.png")}
				/>
				<Flyer
					botLine={true}
					text="Personalisation"
					icon={require("../images/Profile/personalisation.png")}
				/>
				<Flyer
					botLine={true}
					text="Balance"
					icon={require("../images/Profile/balance.png")}
				/>
				<Flyer
					botLine={true}
					text="My orders"
					icon={require("../images/Profile/orders.png")}
				/>
				<Flyer
					botLine={true}
					text="Bundle discounts"
					icon={require("../images/Profile/discount.png")}
				/>
				<Separator />
				<Flyer
					topLine={true}
					botLine={true}
					text="Forum"
					icon={require("../images/Profile/forum.png")}
				/>
				<Separator />
				<Flyer
					topLine={true}
					botLine={true}
					text="Invite friends"
					icon={require("../images/Profile/invite_friends.png")}
				/>
				<Separator />
				<Flyer
					topLine={true}
					botLine={true}
					text="Holiday mode"
					icon={require("../images/Profile/holiday.png")}
				/>
				<Separator />
				<Flyer
					topLine={true}
					botLine={true}
					text="Settings"
					icon={require("../images/Profile/settings.png")}
				/>
				<Flyer
					botLine={true}
					text="Cookie settings"
					icon={require("../images/Profile/cookies.png")}
				/>
				<Flyer
					botLine={true}
					text="About Vinted"
					icon={require("../images/Profile/about.png")}
				/>
				<Flyer
					botLine={true}
					text="Legal information"
					icon={require("../images/Profile/legal.png")}
				/>
				<Flyer
					botLine={true}
					text="Our platform"
					icon={require("../images/Profile/about.png")}
				/>
				<Flyer
					botLine={true}
					text="Help Centre"
					icon={require("../images/Profile/guide.png")}
				/>
				<TermsView>
					<TermsColumn style={{ width: 130 }}>
						<TermsText right>Privacy Policy</TermsText>
						<TermsText right>Pro terms of use</TermsText>
					</TermsColumn>
					<TermsColumn>
						<TermsText style={{ textAlign: "center" }}>•</TermsText>
						<TermsText style={{ textAlign: "center" }}>•</TermsText>
					</TermsColumn>
					<TermsColumn style={{ width: 130 }}>
						<TermsText>Terms & Conditions</TermsText>
						<TermsText>Pro terms of sale</TermsText>
					</TermsColumn>
				</TermsView>
			</Scrollable>
			<Footer activePage="Profile" />
		</Container>
	);
};

export default Profile;

// The terms must link to stuff
// Add stuff like balance money

const Container = styled.View`
	background-color: #f5f6f8;
	flex: 1;
`;

const Separator = styled.View`
	height: 15px;
`;

const TermsView = styled.View`
	flex-direction: row;
	justify-content: center;
	height: 70px;
`;
const TermsColumn = styled.View`
	padding: 10px;
`;
const TermsText = styled.Text`
	text-align: ${(props) => (props.right ? "right" : "left")};
	color: #999999;
	font-size: 12px;
`;

const Scrollable = styled.ScrollView`
	/*  */
`;
