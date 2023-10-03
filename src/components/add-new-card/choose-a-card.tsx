import _ from "lodash"
import { useMemo } from "react"
import { Text, View } from "react-native"
import DropdownInput from "../dropdown-input"
import creditCards from "../../credit-card-lists/credit-cards"
import AddNewCardStyles from "../../styles/add-new-card-styles"

interface Props {
	card: CreditCardNames | null
	issuer: CreditCardIssuers | null
	setCard: React.Dispatch<React.SetStateAction<CreditCardNames | null>>
}

export default function ChooseACard (props: Props) {
	const { card, issuer, setCard } = props

	const filterCardsByIssuer = (issuerName: CreditCardIssuers): DropdownItem[] => {
		return Object.entries(creditCards)
			.sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
			.filter(([, details]) => details["Card Issuer"] === issuerName)
			.map(([key]) => ({
				Label: key,
				Value: key,
			}))
	}

	const filteredCards = useMemo(() => {
		if (_.isNull(issuer)) return []
		return filterCardsByIssuer(issuer)
	}, [issuer])

	if (_.isNil(issuer)) return null

	return (
		<View>
			<Text style = {AddNewCardStyles.selectCard}>
				Select a Credit Card:
			</Text>
			<DropdownInput
				data = {filteredCards}
				labelField = "Label"
				valueField = "Value"
				placeholder = {`Select a ${issuer} credit Card`}
				onChange = {(value) => setCard(value.Value as CreditCardNames)}
				value = {card || ""}
				customStyle = {AddNewCardStyles.selectCardDropdownInputStyles}
			/>
		</View>
	)
}
