import { useContext } from "react"
import { observer } from "mobx-react"
import { View, Image, Pressable } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import MyCardsStyles from "../styles/my-cards-styles"
import creditCards from "../credit-card-lists/credit-cards"
import AppContext from "../contexts/cc-rewards-context"

interface Props {
	cardName: CreditCardNames
}

function SingleHomeScreenCard(props: Props) {
	const { cardName } = props
	const navigation = useNavigation<StackNavigationProp<RootStackParamList, "MyCards">>()
	const appContext = useContext(AppContext)

	const handleDeleteCard = () => {
		appContext.removeCreditCard(cardName)
	}

	const navigateToCardDetails = () => {
		navigation.navigate("CardDetails", { cardData: cardName })
	}

	return (
		<View>
			<Pressable onPress = {navigateToCardDetails}>
				<Image
					style = {MyCardsStyles.myCardsImage}
					source = {{ uri: creditCards[cardName]["Image URL"] }}
				/>
			</Pressable>
			<Pressable onPress = {handleDeleteCard}>
				<Ionicons name="close-circle-outline" size={45} />
			</Pressable>
		</View>
	)
}

export default observer(SingleHomeScreenCard)
