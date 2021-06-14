import React from "react";
import { View, Button, Text, ScrollView } from "react-native";
import styled from "styled-components";

import CategoryComp from "../components/Category";
import ItemCard from "../components/ItemCard";
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
					<ItemCard
						destination={"Home"}
						image={require("../images/some_dress.jpg")}
						price="30.00"
						favNum={10}
						sizes="M / 38 / 10"
						brand="Artigli"
					/>
					<ItemCard
						destination={"Home"}
						image={require("../images/some_clothes.jpg")}
						price="4.00"
						favNum={12}
						sizes="S / 36 / 8"
						brand="H&M"
					/>
					<ItemCard
						destination={"Home"}
						image={require("../images/some_top.jpg")}
						price="5.99"
						favNum={9}
						sizes="M / 38 / 10"
						brand=""
					/>
					<ItemCard
						destination={"Home"}
						image={require("../images/some_necklace.jpg")}
						price="4.00"
						favNum={14}
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
