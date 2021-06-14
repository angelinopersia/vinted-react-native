import React from "react";
import { View, Button, Text, ScrollView } from "react-native";
import styled from "styled-components";

import CategoryComp from "../components/Category";
import PopularItem from "../components/PopularItem";
import Footer from "../components/Footer";
import SearchHeader from "../components/SearchHeader";

const Home = ({ navigation }) => {
	return (
		<Container>
			<SearchHeader />
			<Scrollable>
				<Section>Shop by category</Section>
				<Categories>
					<CategoryComp
						destination="Search"
						image={require("../images/dress.png")}
						title="Women"
					/>
					<CategoryComp
						destination="Search"
						image={require("../images/shirt.png")}
						title="Men"
					/>
					<CategoryComp
						destination="Search"
						image={require("../images/kid.png")}
						title="Kids"
					/>
					<CategoryComp
						destination="Search"
						image={require("../images/home.png")}
						title="Home"
					/>
				</Categories>
				<View>
					<Section>Popular items</Section>
					<Text>See all</Text>
				</View>
				<PopularItems horizontal={true}>
					<PopularItem
						destination={"Home"}
						image=""
						price="30.00"
						sizes="M / 38 / 10"
						brand="Artigli"
					/>
					<PopularItem
						destination={"Home"}
						image=""
						price="4.00"
						sizes="S / 36 / 8"
						brand="H&M"
					/>
					<PopularItem
						destination={"Home"}
						image=""
						price="5.99"
						sizes="M / 38 / 10"
						brand=""
					/>
					<PopularItem
						destination={"Home"}
						image=""
						price="4.00"
						sizes="One size"
						brand="Boutique indépendante"
					/>
					<Text>See all popular items</Text>
				</PopularItems>
			</Scrollable>

			<Footer activePage="Home" />
		</Container>
	);
};

export default Home;

const Container = styled.View`
	background-color: white;
	flex: 1;
`;

const Section = styled.Text`
	padding: 15px 18px 10px 18px;
	font-size: 25px;
`;

const PopularItems = styled.ScrollView`
	padding: 15px 18px 10px 18px;
`;

const Categories = styled.View`
	padding: 15px 18px 10px 18px;
	flex-direction: row;
	justify-content: space-between;
`;

const Scrollable = styled.ScrollView`
	/* border: red;
	border-width: 1px; */
`;
