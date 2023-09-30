import { Text } from "react-native"
import DropdownInput from "../dropdown-input"
import creditCardsList from "../../credit-cards-list"

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
				data = {creditCardsList}
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
