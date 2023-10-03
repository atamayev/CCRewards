import { useContext } from "react"
import { observer } from "mobx-react"
import { View, Image, Pressable } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import creditCards from "../credit-card-lists/credit-cards"
import AppContext from "../contexts/cc-rewards-context"
import SingleHomeScreenCardStyles from "../styles/my-cards-styles/single-home-screen-card-styles"

interface Props {
	cardName: CreditCardNames
}

function SingleHomeScreenCard(props: Props) {
	const { cardName } = props
	const navigation = useNavigation<StackNavigationProp<RootStackParamList, "My Cards">>()
	const appContext = useContext(AppContext)

	const handleDeleteCard = () => {
		appContext.removeCreditCard(cardName)
	}

	const navigateToCardDetails = () => {
		navigation.navigate("Card Details", { cardData: cardName })
	}

	function CardImage () {
		return (
			<View style = {SingleHomeScreenCardStyles.viewImageHolder}>
				<Pressable onPress = {navigateToCardDetails}>
					<Image
						style = {SingleHomeScreenCardStyles.myCardsImage}
						source = {{ uri: creditCards[cardName]["Image URL"] }}
					/>
				</Pressable>
			</View>
		)
	}

	function CardDeleteButton () {
		return (
			<View style = {SingleHomeScreenCardStyles.deleteButtonContainer}>
				<Pressable
					onPress = {handleDeleteCard}
					style = {SingleHomeScreenCardStyles.deleteButtonPressable}
				>
					<Ionicons name = "close-circle-outline" size={45} />
				</Pressable>
			</View>
		)
	}

	return (
		<View style = {SingleHomeScreenCardStyles.cardContainer}>
			<CardImage />

			<CardDeleteButton />
		</View>
	)
}

export default observer(SingleHomeScreenCard)
