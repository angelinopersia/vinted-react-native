import React from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Button, Text, ScrollView } from "react-native";
import styled from "styled-components";

// Components
import SearchHeader from "../components/SearchHeader";
import Footer from "../components/Footer";

import CategoryComp from "../components/Category";
import ItemCard from "../components/ItemCard";
import Brand from "../components/Brand";

import SeeAll from "../components/SeeAll";

const Home = () => {
	const { navigate } = useNavigation();
	return (
		<Container>
			<SearchHeader />
			<Scrollable>
				{/* CATEGORIES */}
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

				{/* POPULAR ITEMS */}
				<PopularView>
					<Section>Popular items</Section>
					<MiniSeeAll onPress={() => navigate("Popular")}>
						See all
					</MiniSeeAll>
				</PopularView>
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
					<SeeAll destination="Popular" />
				</PopularItems>

				{/* SHOP BY BRAND */}
				<Section>Shop by brand</Section>
				<BrandContainer>
					<Brand destination="Home" text="Disney" />
					<Brand destination="Home" text="Gémo" />
					<Brand destination="Home" text="Kiabi" />
					<Brand destination="Home" text="Pimkie" />
					<Brand destination="Home" text="New Balance" />
					<Brand destination="Home" text="Converse" />
					<Brand destination="Home" text="San Marina" />
					<Brand destination="Home" text="Promod" />
					<Brand destination="Home" text="Bonobo" />
					<Brand destination="Home" text="Vans" />
					<Brand destination="Home" text="Adidas" />
					<Brand destination="Home" text="Reebok" />
					<Brand destination="Home" text="Petit Bateau" />
					<Brand destination="Home" text="Miss Captain" />
					<Brand destination="Home" text="Caroll" />
					<Brand destination="Home" text="Diesel" />
					<Brand destination="Home" text="Tommy Hilfiger" />
					<Brand destination="Home" text="Ralph Lauren" />
				</BrandContainer>
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

const PopularView = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const MiniSeeAll = styled.Text`
	/* I'm forced to do this
	 because it doesn't seem like this is used anywhere else. */
	color: #39b2bd;
	font-size: 17px;
	padding-right: 15px;
`;

const Categories = styled.View`
	padding: 15px 18px 10px 18px;
	flex-direction: row;
	justify-content: space-between;
`;

const BrandContainer = styled.View`
	flex: 1;
	flex-wrap: wrap;
	flex-direction: row;
	align-items: stretch;
	padding: 5px 35px 0 15px;
`;

const Scrollable = styled.ScrollView`
	/* border: red;
	border-width: 1px; */
`;
