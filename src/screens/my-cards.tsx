import {Pressable, View, Text, FlatList, Dimensions} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import Ionicons from "react-native-vector-icons/Ionicons"
import ContainerStyles from "../styles/container-styles"
import AddNewCardButtonStyles from "../styles/add-new-card-button-styles"
import MyCardsCard from "../components/my-cards-card";
import { useState} from "react";
import creditCardsList from "../credit-cards-list";

export default function MyCards () {
	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
	const [currentIndex, setCurrentIndex] = useState(0)
	const { width } = Dimensions.get('screen');

	const handleAddCard = () => {
		navigation.navigate("AddNewCard")
	}


	const handleScroll = (event) => {
		const contentOffset = event.nativeEvent.contentOffset;
		const currentIndex = Math.floor(contentOffset.x / 245);

		setCurrentIndex(currentIndex);
	};
	return (
		<View style={ContainerStyles.container}>
			<View style={{ position: 'absolute', top: 30, left: 20 }}>
				<Text style={{ fontWeight: 'bold', fontSize: 30 }}>My Cards</Text>
			</View>

			<FlatList
				data={creditCardsList}
				horizontal
				pagingEnabled
				showsHorizontalScrollIndicator={false}
				snapToAlignment="center"
				onScroll={handleScroll}
				contentContainerStyle={{alignSelf:'center', height:"80%"}}
				renderItem={({ item, index }) => (
					<MyCardsCard
						CardData={item}
						style={{
							height: 150,
							width: 250,
							borderRadius: 10,
							marginTop:10,
							transform: [{ scale: index === currentIndex ? 1.1 : 1 }],
							marginLeft: index === 0 ? width / 2 - 230 / 2 : 15,
							marginRight: index === creditCardsList.length - 1 ? width / 2 - 230 / 2 : 15,
						}}
					/>
				)}
			/>
			<Pressable onPress={handleAddCard} style={AddNewCardButtonStyles.plusIcon}>
				<Ionicons name="add-circle" size={60} />
			</Pressable>
		</View>

	);
}
