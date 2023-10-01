import { Text, View } from "react-native"
import DropdownInput from "../dropdown-input"
import creditCardIssuers from "../../credit-card-lists/credit-card-issuers"
import AddNewCardStyles from "../../styles/add-new-card-styles"

interface Props {
	issuer: string | null
	handleIssuerChange: (value: string) => void
}

export default function SelectCardIssuer (props: Props) {
	const { issuer, handleIssuerChange } = props

	const creditCardIssuerOptions = creditCardIssuers.map(issuerItem => ({
		Label: issuerItem,
		Value: issuerItem
	}))

	const creditCardIssuersList = [
		{
			Label: "Select an Issuer",
			Value: null
		},
		...creditCardIssuerOptions
	]

	return (
		<View>
			<Text style = {AddNewCardStyles.selectCardIssuer}>
				Select a Credit Card Issuer:
			</Text>
			<DropdownInput
				data = {creditCardIssuersList}
				labelField = "Label"
				valueField = "Value"
				placeholder = "Select item"
				onChange = {(item) => {
					handleIssuerChange(item)
				}}
				value = {issuer || ""}
				customStyle = {AddNewCardStyles.dropdownInputStyles}
			/>
		</View>
	)
}
