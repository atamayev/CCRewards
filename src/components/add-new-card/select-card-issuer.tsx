import { Text, View } from "react-native"
import AddNewCardStyles from "../../styles/add-new-card-styles"
import creditCardIssuers from "../../credit-card-lists/credit-card-issuers"
import DropdownInput from "../dropdown-input"

interface Props {
	issuer: CreditCardIssuers | null
	setIssuer: React.Dispatch<React.SetStateAction<CreditCardIssuers | null>>
}

export default function SelectCardIssuer (props: Props) {
	const { issuer, setIssuer } = props

	const creditCardIssuerOptions = [...creditCardIssuers]
		.sort((a, b) => a.localeCompare(b))
		.map((issuerItem: CreditCardIssuers): DropdownItem => ({
			Label: issuerItem,
			Value: issuerItem
		}))

	return (
		<View>
			<Text style = {AddNewCardStyles.selectCardIssuerText}>
				Select a Credit Card Issuer:
			</Text>
			<DropdownInput
				data = {creditCardIssuerOptions}
				labelField = "Label"
				valueField = "Value"
				placeholder = "Select a Credit Issuer"
				onChange = {(item) => {setIssuer(item.Value as CreditCardIssuers)}}
				value = {issuer || ""}
				customStyle = {AddNewCardStyles.selectIssuerDropdownInputStyles}
			/>
		</View>
	)
}
