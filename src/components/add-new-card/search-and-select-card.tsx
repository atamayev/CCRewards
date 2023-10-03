import { Text, View } from "react-native"
import AddNewCardStyles from "../../styles/add-new-card-styles"
import DropdownInput from "../dropdown-input"
import creditCardNames from "../../credit-card-lists/credit-card-names"

interface Props {
	card: CreditCardNames | null
	setCard: React.Dispatch<React.SetStateAction<CreditCardNames | null>>
	setIssuer: React.Dispatch<React.SetStateAction<CreditCardIssuers | null>>
}

export default function SearchAndSelectCard (props: Props) {
	const { card, setCard, setIssuer } = props

	const creditCardNamesOptions = [...creditCardNames]
		.sort((a, b) => a.localeCompare(b))
		.map((issuerItem: CreditCardNames): DropdownItem => ({
			Label: issuerItem,
			Value: issuerItem
		}))

	const handleSelectCard = (creditCard: CreditCardNames): void => {
		setCard(creditCard)
	}

	return (
		<View >
			<Text style = {AddNewCardStyles.searchAndSelectCardText}>
				Or, search for a card
			</Text>
			<DropdownInput
				data = {creditCardNamesOptions}
				labelField = "Label"
				valueField = "Value"
				placeholder = "Select a Credit Card"
				onChange = {(value) => handleSelectCard(value.Value as CreditCardNames)}
				value = {card || ""}
				customStyle = {AddNewCardStyles.searchAndSelectCardInputStyles}
			/>
		</View>
	)
}
