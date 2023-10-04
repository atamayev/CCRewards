import { observer } from "mobx-react"
import { View, Image, Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import creditCards from "../credit-card-lists/credit-cards"
import SingleSearchScreenCardStyles from "../styles/single-search-screen-card-styles"

interface Props {
	cardName: CreditCardNames
}

function SingleSearchScreenCard(props: Props) {
	const { cardName } = props
	const navigation = useNavigation<StackNavigationProp<RootStackParamList, "Search">>()

	const navigateToCardDetails = () => {
		navigation.navigate("Card Details", { cardData: cardName })
	}

	return (
		<View style = {SingleSearchScreenCardStyles.cardContainer}>
			<View style = {SingleSearchScreenCardStyles.viewImageHolder}>
				<Pressable onPress = {navigateToCardDetails}>
					<Image
						style = {SingleSearchScreenCardStyles.myCardsImage}
						source = {{ uri: creditCards[cardName]["Image URL"] }}
					/>
				</Pressable>
			</View>
		</View>
	)
}

export default observer(SingleSearchScreenCard)
