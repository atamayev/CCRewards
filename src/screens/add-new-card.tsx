import _ from "lodash"
import { useState } from "react"
import { View, Button } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import ContainerStyles from "../styles/container-styles"
import SelectCardIssuer from "../components/add-new-card/select-card-issuer"
import ChooseACard from "../components/add-new-card/choose-a-card"
import CustomHeader from "../components/custom-header"

export default function AddNewCard() {
	const [issuer, setIssuer] = useState<string | null>(null)
	const [card, setCard] = useState<string | null>(null)
	const [showCardDropdown, setShowCardDropdown] = useState(false)

	const navigation = useNavigation<StackNavigationProp<RootStackParamList, "AddNewCard">>()

	const handleIssuerChange = (selectedIssuer: string) => {
		setIssuer(selectedIssuer)
		setShowCardDropdown(true)
	}

	const handleAddCard = async () => {
		if (!_.isNull(card)) {
			await AsyncStorage.setItem("selectedCard", card)
			navigation.navigate("MyCards")
		}
	}

	function ShowButton () {
		if (_.isNull(card)) return null

		return <Button title = "Add Card" onPress = {handleAddCard} />
	}

	return (
		<View style = {ContainerStyles.container}>
			<CustomHeader headerText = {"Add New Card"} />
			<SelectCardIssuer
				issuer = {issuer}
				handleIssuerChange = {handleIssuerChange}
			/>

			<ChooseACard
				showCardDropdown = {showCardDropdown}
				card = {card}
				issuer = {issuer}
				setCard = {setCard}
			/>

			<ShowButton />

		</View>
	)
}
