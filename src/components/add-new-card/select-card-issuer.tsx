import { Text } from "react-native"
import { Picker } from "@react-native-picker/picker"

interface Props {
	issuer: string | null
	handleIssuerChange: (value: string) => void
}

export default function SelectCardIssuer (props: Props) {
	const { issuer, handleIssuerChange } = props

	return (
		<>
			<Text>Select a Credit Card Issuer:</Text>
			<Picker selectedValue={issuer} onValueChange={(value) => handleIssuerChange(value as string)}>
				<Picker.Item label="Select an issuer" value={null} />
				<Picker.Item label="Chase" value="Chase" />
				<Picker.Item label="Capital One" value="Capital One" />
				<Picker.Item label="Bank of America" value="Bank of America" />
			</Picker>
		</>
	)
}
