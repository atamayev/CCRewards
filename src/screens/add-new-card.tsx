import { useState } from "react"
import { View } from "react-native"
import CustomHeader from "../components/custom-header"
import CommonStyles from "../styles/common-styles"
import SelectCard from "../components/add-new-card/select-card"
import SelectCardIssuer from "../components/add-new-card/select-card-issuer"
import SearchAndSelectCard from "../components/add-new-card/search-and-select-card"
import ShowCardImageAndButton from "../components/add-new-card/show-card-image-and-button"

export default function AddNewCard() {
	const [issuer, setIssuer] = useState<CreditCardIssuers | null>(null)
	const [card, setCard] = useState<CreditCardNames | null>(null)

	return (
		<View style = {CommonStyles.mainContainer}>
			<CustomHeader headerText = {"Add a New Card"} />

			<SearchAndSelectCard
				card = {card}
				setCard = {setCard}
			/>

			<SelectCardIssuer
				issuer = {issuer}
				setIssuer = {setIssuer}
			/>

			<SelectCard
				card = {card}
				issuer = {issuer}
				setCard = {setCard}
			/>

			<ShowCardImageAndButton
				card = {card}
			/>

		</View>
	)
}
