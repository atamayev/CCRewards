import { useContext } from "react"
import { observer } from "mobx-react"
import { Text, View } from "react-native"
import AddNewCardStyles from "../../styles/add-new-card-styles"
import DropdownInput from "../dropdown-input"
import AppContext from "../../contexts/cc-rewards-context"
import filterAvailableIssuers from "../../helper-functions/filter-available-issuers"

interface Props {
	issuer: CreditCardIssuers | null
	setIssuer: React.Dispatch<React.SetStateAction<CreditCardIssuers | null>>
}

function SelectCardIssuer (props: Props) {
	const { issuer, setIssuer } = props
	const appContext = useContext(AppContext)

	const filteredIssuers = filterAvailableIssuers(appContext)

	const creditCardIssuerOptions: DropdownItem[] = filteredIssuers
		.sort((a, b) => a.localeCompare(b))
		.map((issuerItem: CreditCardIssuers): DropdownItem => ({
			Label: issuerItem,
			Value: issuerItem
		}))

	return (
		<View>
			<Text style = {AddNewCardStyles.selectCardIssuerText}>
				Or, Start by Selecting a Credit Card Issuer:
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

export default observer(SelectCardIssuer)
