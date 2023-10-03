import _ from "lodash"
import { useContext } from "react"
import { observer } from "mobx-react"
import { useNavigation } from "@react-navigation/native"
import { TouchableOpacity, Text, Image } from "react-native"
import { StackNavigationProp } from "@react-navigation/stack"
import AddNewCardStyles from "../../styles/add-new-card-styles"
import creditCards from "../../credit-card-lists/credit-cards"
import AppContext from "../../contexts/cc-rewards-context"

interface Props {
	card: CreditCardNames | null
}

function ShowCardImageAndButton (props: Props) {
	const { card } = props
	const appContext = useContext(AppContext)

	const navigation = useNavigation<StackNavigationProp<RootStackParamList, "AddNewCard">>()

	const handleAddCard = async (): Promise<void> => {
		if (_.isNull(card)) return

		await appContext.addCreditCard(card)
		navigation.navigate("MyCards")
	}

	if (_.isNull(card)) return null

	return (
		<>
			<Image
				style = {AddNewCardStyles.imageStyles}
				source = {{ uri: creditCards[card]["Image URL"] }}
			/>
			<TouchableOpacity
				style = {AddNewCardStyles.addButton}
				onPress = {handleAddCard}
			>
				<Text style = {AddNewCardStyles.addButtonText}>
					Add {card}
				</Text>
			</TouchableOpacity>
		</>
	)
}

export default observer(ShowCardImageAndButton)
