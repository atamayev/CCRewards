import { useContext } from "react"
import { observer } from "mobx-react"
import { Text, View } from "react-native"
import AddNewCardStyles from "../../styles/add-new-card-styles"
import DropdownInput from "../dropdown-input"
import creditCardNames from "../../credit-card-lists/credit-card-names"
import AppContext from "../../contexts/cc-rewards-context"

interface Props {
	card: CreditCardNames | null
	setCard: React.Dispatch<React.SetStateAction<CreditCardNames | null>>
}

function SearchAndSelectCard (props: Props) {
	const { card, setCard } = props
	const appContext = useContext(AppContext)

	const creditCardNamesOptions = creditCardNames
		.filter((name: CreditCardNames) => !appContext.creditCards.includes(name))
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
				Search for a Credit Card
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

export default observer(SearchAndSelectCard)
