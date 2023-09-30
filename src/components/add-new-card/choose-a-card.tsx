import _ from "lodash"
import { Text } from "react-native"
import { Picker } from "@react-native-picker/picker"

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
		"Bank of America": ["BankAmericard", "Bank of America Cash Rewards"]
	}

	if (!showCardDropdown) return null

	function SelectCard () {
		if (_.isNull(issuer)) return null
		return (
			cardOptions[issuer].map((option) => (
				<Picker.Item key={option} label={option} value={option} />
			))
		)
	}

	return (
		<>
			<Text>Choose a Card:</Text>
			<Picker
				selectedValue = {card}
				onValueChange={(value) => setCard(value as string)}
			>
				<Picker.Item label="Select a card" value={null} />
				<SelectCard />
			</Picker>
		</>
	)
}
