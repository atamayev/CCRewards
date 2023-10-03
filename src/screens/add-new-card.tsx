import _ from "lodash"
import { observer } from "mobx-react"
import { useState, useContext } from "react"
import { View, TouchableOpacity, Text, Image } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import CustomHeader from "../components/custom-header"
import ContainerStyles from "../styles/container-styles"
import ChooseACard from "../components/add-new-card/choose-a-card"
import SelectCardIssuer from "../components/add-new-card/select-card-issuer"
import AddNewCardStyles from "../styles/add-new-card-styles"
import creditCards from "../credit-card-lists/credit-cards"
import AppContext from "../contexts/cc-rewards-context"

function AddNewCard() {
	const appContext = useContext(AppContext)
	const [issuer, setIssuer] = useState<CreditCardIssuers | null>(null)
	const [card, setCard] = useState<CreditCardNames | null>(null)

	const navigation = useNavigation<StackNavigationProp<RootStackParamList, "AddNewCard">>()

	const handleAddCard = async (): Promise<void> => {
		if (_.isNull(card)) return

		await appContext.addCreditCard(card)
		navigation.navigate("MyCards")
	}

	function ShowButton () {
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

	return (
		<View style = {ContainerStyles.container}>
			<CustomHeader headerText = {"Add New Card"} />
			<SelectCardIssuer
				issuer = {issuer}
				setIssuer = {setIssuer}
			/>

			<ChooseACard
				card = {card}
				issuer = {issuer}
				setCard = {setCard}
			/>

			<ShowButton />

		</View>
	)
}

export default observer(AddNewCard)
