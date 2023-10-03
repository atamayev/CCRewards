import { useContext } from "react"
import { observer } from "mobx-react"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import Ionicons from "react-native-vector-icons/Ionicons"
import { Pressable, View, FlatList } from "react-native"
import AddNewCardStyles from "../styles/add-new-card-styles"
import SingleHomeScreenCard from "../components/single-home-screen-card"
import MyCardsStyles from "../styles/my-cards-styles/my-cards-styles"
import AppContext from "../contexts/cc-rewards-context"
import PageHeader from "../components/page-header"

function MyCards () {
	const navigation = useNavigation<StackNavigationProp<RootStackParamList, "My Cards">>()
	const appContext = useContext(AppContext)
	//This console.log somehow makes the cards show up after adding/deleting
	console.log(appContext.creditCards)

	const handleAddCard = () => {
		navigation.navigate("Add New Card")
	}

	function CardsList () {
		return (
			<View style = {MyCardsStyles.flatListView}>
				<FlatList
					data = {appContext.creditCards}
					renderItem = {({ item }) => (
						<SingleHomeScreenCard cardName = {item}/>
					)}
				/>
			</View>
		)
	}

	function AddNewCardButton () {
		return (
			<Pressable onPress = {handleAddCard} style = {AddNewCardStyles.plusIcon}>
				<Ionicons name = "add-circle" size = {60} />
			</Pressable>
		)
	}

	return (
		<PageHeader title = "My Cards">
			<CardsList />

			<AddNewCardButton />
		</PageHeader>
	)
}

export default observer(MyCards)
