import { useContext } from "react"
import { Text } from "react-native"
import { observer } from "mobx-react-lite"
import PageHeader from "../components/page-header"
import AppContext from "../contexts/cc-rewards-context"
import DropdownInput from "../components/dropdown-input"
import ProfileStyles from "../styles/profile-styles"
import { creditCardRewardTypesOptions } from "../helper-functions/mapped-credit-options"

function Profile () {
	const appContext = useContext(AppContext)

	const handleSelectRewardType = async (rewardType: CreditCardRewardTypes): Promise<void> => {
		await appContext.updateRewardPreference(rewardType)
	}

	return (
		<PageHeader title = "Profile">
			<Text style = {ProfileStyles.chooseRewardTypeText}>
				Select your preferred credit card rewards type. (for the situation that you have multiple cards with the same reward amount)
				but different reward amount (ie 2X points and 2% cash back)
			</Text>

			<DropdownInput
				data = {creditCardRewardTypesOptions}
				labelField = "Label"
				valueField = "Value"
				placeholder = "Select a Prefered Reward Type"
				onChange = {(value) => handleSelectRewardType(value.Value as CreditCardRewardTypes)}
				value = {appContext.rewardPreference}
				customStyle = {ProfileStyles.rewardsTypeDropdownInputStyles}
			/>

		</PageHeader>
	)
}

export default observer(Profile)
