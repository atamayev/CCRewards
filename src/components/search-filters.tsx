/* eslint-disable @typescript-eslint/no-explicit-any */
import _ from "lodash"
import { creditCardIssuersOptions } from "../helper-functions/mapped-credit-options"
import DropdownInput from "./dropdown-input"

const handleDropdownChange = (
	attribute: keyof SearchFilter,
	value: DropdownItem,
	setFilter: React.Dispatch<React.SetStateAction<SearchFilter>>
) => {
	setFilter(prevFilter => ({
		...prevFilter,
		[attribute]: value.Value
	}))
	console.log(value.Value)
}

interface Props {
	filter: SearchFilter
	setFilter: React.Dispatch<React.SetStateAction<SearchFilter>>
}

export function CardIssuersDropdown(props: Props) {
	const { filter, setFilter } = props

	return (
		<DropdownInput
			data = {creditCardIssuersOptions}
			labelField = "Label"
			valueField = "Value"
			placeholder = "Card Issuer"
			value = {filter.cardIssuer || ""}
			onChange = {(value) => handleDropdownChange("cardIssuer", value, setFilter)}
		/>
	)
}

export function RewardTypeDropdown(props: Props) {
	const { filter, setFilter } = props

	return (
		<DropdownInput
			data = {creditCardIssuersOptions}
			labelField = "Label"
			valueField = "Value"
			placeholder = "Reward Type"
			value = {filter.rewardType || ""}
			onChange = {(value) => handleDropdownChange("annualFee", value, setFilter)}
		/>
	)
}

export function SpendingCategoryDropdown(props: Props) {
	const { filter, setFilter } = props

	return (
		<DropdownInput
			data = {creditCardIssuersOptions}
			labelField = "Label"
			valueField = "Value"
			placeholder = "Spending Category"
			value = {filter.spendingCategory || ""}
			onChange = {(value) => handleDropdownChange("spendingCategory", value, setFilter)}
		/>
	)
}

