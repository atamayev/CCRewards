import { useState } from "react"
import { View } from "react-native"
import CustomHeader from "../components/custom-header"
import ContainerStyles from "../styles/container-styles"
import SelectCard from "../components/add-new-card/select-card"
import SelectCardIssuer from "../components/add-new-card/select-card-issuer"
import SearchAndSelectCard from "../components/add-new-card/search-and-select-card"
import ShowCardImageAndButton from "../components/add-new-card/show-card-image-and-button"

export default function AddNewCard() {
	const [issuer, setIssuer] = useState<CreditCardIssuers | null>(null)
	const [card, setCard] = useState<CreditCardNames | null>(null)

	return (
		<View style = {ContainerStyles.container}>
			<CustomHeader headerText = {"Add a New Card"} />
			<SelectCardIssuer
				issuer = {issuer}
				setIssuer = {setIssuer}
			/>

			<SelectCard
				card = {card}
				issuer = {issuer}
				setCard = {setCard}
			/>

			<SearchAndSelectCard
				card = {card}
				setCard = {setCard}
			/>

			<ShowCardImageAndButton
				card = {card}
			/>

		</View>
	)
}
