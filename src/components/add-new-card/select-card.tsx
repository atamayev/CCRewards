import _ from "lodash"
import { observer } from "mobx-react"
import { useMemo, useContext } from "react"
import { Text, View } from "react-native"
import DropdownInput from "../dropdown-input"
import creditCards from "../../credit-card-lists/credit-cards"
import AddNewCardStyles from "../../styles/add-new-card-styles"
import AppContext from "../../contexts/cc-rewards-context"

interface Props {
	card: CreditCardNames | null
	issuer: CreditCardIssuers | null
	setCard: React.Dispatch<React.SetStateAction<CreditCardNames | null>>
}

function SelectCard (props: Props) {
	const { card, issuer, setCard } = props
	const appContext = useContext(AppContext)

	const filterCardsByIssuer = (issuerName: CreditCardIssuers): DropdownItem[] => {
		return Object.entries(creditCards)
			.sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
			.filter(
				([key, details]) => details["Card Issuer"] === issuerName && !appContext.creditCards.includes(key as CreditCardNames)
			)
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
			<Text style = {AddNewCardStyles.selectCardText}>
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

export default observer(SelectCard)
