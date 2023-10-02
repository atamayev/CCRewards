import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import Ionicons from "react-native-vector-icons/Ionicons"
import { Pressable, View, Text, FlatList } from "react-native"
import creditCardsList from "../credit-cards-list"
import ContainerStyles from "../styles/container-styles"
import AddNewCardStyles from "../styles/add-new-card-styles"
import MyCardsCard from "../components/my-cards-card"
import MyCardsStyles from "../styles/my-cards-styles"

export default function MyCards () {
	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

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

			<FlatList
				data = {creditCardsList}
				renderItem = {({ item }) => (
					<MyCardsCard
						cardData = {item}
						style = {MyCardsStyles.myCards}
						onPress = {() => navigation.navigate("CardDetails", { cardData: item.name })}
					/>
				)}
			/>
			<Pressable onPress = {handleAddCard} style = {AddNewCardStyles.plusIcon}>
				<Ionicons name = "add-circle" size = {60} />
			</Pressable>
		</View>
	)
}
