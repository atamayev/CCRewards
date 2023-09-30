import _ from "lodash"
import { Text } from "react-native"
import DropdownInput from "../dropdown-input"

interface Props {
	showCardDropdown: boolean
	card: string | null
	issuer: string | null
	setCard: React.Dispatch<React.SetStateAction<string | null>>
}

export default function ChooseACard (props: Props) {
	const { showCardDropdown, card, issuer, setCard } = props

	const cardOptions: { [key: string]: string[] } = {
		"Chase": ["Chase Freedom", "Chase Sapphire"],
		"Capital One": ["Capital One Quicksilver", "Capital One Venture"],
		"Bank of America": ["BankAmerica", "Bank of America Cash Rewards"]
	}

	const handleSetCard = (value: string) => {
		console.log("value", value)
		setCard(value)
	}

	if (!showCardDropdown || _.isNull(issuer)) return null

	return (
		<>
			<Text>Choose a Card:</Text>
			<DropdownInput
				data = {cardOptions[issuer]}
				labelField = "Label"
				valueField = "Value"
				placeholder = "Select item"
				onChange = {(value) => handleSetCard(value as string)}
				value = {card || ""}
			/>
		</>
	)
}
