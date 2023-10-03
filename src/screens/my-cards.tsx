import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import Ionicons from "react-native-vector-icons/Ionicons"
import { Pressable, View, Text, FlatList } from "react-native"
import ContainerStyles from "../styles/container-styles"
import AddNewCardStyles from "../styles/add-new-card-styles"
import SingleHomeScreenCard from "../components/single-home-screen-card"
import MyCardsStyles from "../styles/my-cards-styles"

export default function MyCards () {
	const navigation = useNavigation<StackNavigationProp<RootStackParamList, "MyCards">>()

	const handleAddCard = () => {
		navigation.navigate("AddNewCard")
	}

	return (
		<View style = {ContainerStyles.container}>
			<View style = {MyCardsStyles.pageView}>
				<Text style = {MyCardsStyles.headerText}>
					My Cards
				</Text>
			</View>

			{/* Make the data going into the flat list the list from async storage of the user's credit cards.
		as soon as the application loads, the data should be pulled from async storage and put into context, and then the flat list. */}
			{/* <FlatList
				data = {creditCardsList}
				renderItem = {({ item }) => (
					<SingleHomeScreenCard
						cardData = {item}
						style = {MyCardsStyles.myCards}
						onPress = {() => navigation.navigate("CardDetails", { cardData: item.name })}
					/>
				)}
			/> */}
			<Pressable onPress = {handleAddCard} style = {AddNewCardStyles.plusIcon}>
				<Ionicons name = "add-circle" size = {60} />
			</Pressable>
		</View>
	)
}
