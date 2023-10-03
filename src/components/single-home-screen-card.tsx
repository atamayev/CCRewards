import { View, Image, Pressable } from "react-native"
import MyCardsStyles from "../styles/my-cards-styles"
import creditCards from "../credit-card-lists/credit-cards"

interface Props {
	cardName: CreditCardNames
	onPress: () => void
}

export default function SingleHomeScreenCard(props: Props) {
	const { cardName } = props

	return (
		<View style = {MyCardsStyles.myCardsImage}>
			<Pressable onPress = {props.onPress}>
				<Image
					style = {MyCardsStyles.myCardsImage}
					source = {{ uri: creditCards[cardName]["Image URL"] }}
				/>
			</Pressable>
		</View>
	)
}
