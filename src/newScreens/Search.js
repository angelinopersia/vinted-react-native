import React from "react";
import { Text, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import styled from "styled-components";

import SearchHeader from "../components/SearchHeader";
import Flyer from "../components/Flyer";

const renderTabBar = (props) => (
	<TabBar
		activeColor="black"
		inactiveColor="#666666"
		{...props}
		renderLabel={({ route, color }) => (
			<Text style={{ color, margin: 8 }}>{route.title}</Text>
		)}
		indicatorStyle={{ backgroundColor: "#39b2bd" }}
		style={{
			backgroundColor: "white",
			elevation: 0,
			borderBottomWidth: 1,
			borderColor: "#e7e7e7",
			marginBottom: -1,
		}}
		pressColor="transparent"
	/>
);

const WomenRoute = () => (
	<Scrollable style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
		<Flyer botLine text="All" icon={require("../images/Search/All.png")} />
		<Flyer
			botLine
			text="Clothes"
			icon={require("../images/Search/Women/Clothes.png")}
		/>
		<Flyer
			botLine
			text="Shoes"
			icon={require("../images/Search/Women/Shoes.png")}
		/>
		<Flyer
			botLine
			text="Bags"
			icon={require("../images/Search/Women/Bags.png")}
		/>
		<Flyer
			botLine
			text="Accessories"
			icon={require("../images/Search/Women/Accessories.png")}
		/>
		<Flyer
			botLine
			text="Beauty"
			icon={require("../images/Search/Women/Beauty.png")}
		/>
	</Scrollable>
);

const MenRoute = () => (
	<Scrollable style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
		<Flyer botLine text="All" icon={require("../images/Search/All.png")} />
		<Flyer
			botLine
			text="Clothes"
			icon={require("../images/Search/Men/Clothes.png")}
		/>
		<Flyer
			botLine
			text="Shoes"
			icon={require("../images/Search/Men/Shoes.png")}
		/>
		<Flyer
			botLine
			text="Accessories"
			icon={require("../images/Search/Men/Accessories.png")}
		/>
		<Flyer
			botLine
			text="Grooming"
			icon={require("../images/Search/Men/Grooming.png")}
		/>
	</Scrollable>
);

const KidsRoute = () => (
	<Scrollable style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
		<Flyer botLine text="All" icon={require("../images/Search/All.png")} />
		<Flyer
			botLine
			text="Girls' clothing"
			icon={require("../images/Search/Kids/Girls_Clothing.png")}
		/>
		<Flyer
			botLine
			text="Boys' clothing"
			icon={require("../images/Search/Kids/Boys_Clothing.png")}
		/>
		<Flyer
			botLine
			text="Toys & games"
			icon={require("../images/Search/Kids/Toys_and_games.png")}
		/>
		<Flyer
			botLine
			text="Baby care"
			icon={require("../images/Search/Kids/Baby_care.png")}
		/>
		<Flyer
			botLine
			text="Buggies"
			icon={require("../images/Search/Kids/Buggies.png")}
		/>
		<Flyer
			botLine
			text="Ride-on toys"
			icon={require("../images/Search/Kids/Ride-on_toys.png")}
		/>
		<Flyer
			botLine
			text="Car seats and chairs"
			icon={require("../images/Search/Kids/Car_seats_and_chairs.png")}
		/>
		<Flyer
			botLine
			text="Kids furniture"
			icon={require("../images/Search/Kids/Kids_furniture.png")}
		/>
		<Flyer
			botLine
			text="School supplies"
			icon={require("../images/Search/Kids/School_supplies.png")}
		/>
		<Flyer
			botLine
			text="Other kids items"
			icon={require("../images/Search/Kids/Other_kids_items.png")}
		/>
	</Scrollable>
);

const HomeRoute = () => (
	<Scrollable style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
		<Flyer botLine text="All" icon={require("../images/Search/All.png")} />
		<Flyer
			botLine
			text="Textiles"
			icon={require("../images/Search/Home/Textiles.png")}
		/>
		<Flyer
			botLine
			text="Home accessories"
			icon={require("../images/Search/Home/Home_accessories.png")}
		/>
		<Flyer
			botLine
			text="Tableware"
			icon={require("../images/Search/Home/Tableware.png")}
		/>
		<Flyer
			botLine
			text="Books"
			icon={require("../images/Search/Home/Books.png")}
		/>
	</Scrollable>
);

const renderScene = SceneMap({
	women: WomenRoute,
	men: MenRoute,
	kids: KidsRoute,
	home: HomeRoute,
});

const Search = ({}) => {
	const layout = useWindowDimensions();

	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: "women", title: "Women" },
		{ key: "men", title: "Men" },
		{ key: "kids", title: "Kids" },
		{ key: "home", title: "Home" },
	]);

	return (
		<Container>
			<SearchHeader noBotBorder={true} />
			<TabView
				renderTabBar={renderTabBar}
				navigationState={{ index, routes }}
				renderScene={renderScene}
				onIndexChange={setIndex}
				initialLayout={{ width: layout.width }}
			/>
		</Container>
	);
};

export default Search;

const Container = styled.View`
	background-color: white;
	flex: 1;
`;

const Scrollable = styled.ScrollView`
	/* padding: 15px 18px 10px 18px; */
`;
