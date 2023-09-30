import { Text } from "react-native"
import DropdownInput from "../dropdown-input"
import creditCardIssuers from "../../credit-card-lists/credit-card-issuers"

interface Props {
	issuer: string | null
	handleIssuerChange: (value: string) => void
}

export default function SelectCardIssuer (props: Props) {
	const { issuer, handleIssuerChange } = props
	return (
		<>
			<Text>Select a Credit Card Issuer:</Text>
			<DropdownInput
				data = {creditCardIssuers}
				labelField = "Label"
				valueField = "Value"
				placeholder = "Select item"
				onChange = {(item) => {
					handleIssuerChange(item)
				}}
				value = {issuer || ""}
			/>
		</>
	)
}
