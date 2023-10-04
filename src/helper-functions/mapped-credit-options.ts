import creditCardIssuers from "../credit-card-lists/credit-card-issuers"
import creditCardRewardTypes from "../credit-card-lists/credit-card-reward-types"
import creditCardSpendingCategories from "../credit-card-lists/credit-card-spending-categories"

export const creditCardRewardTypesOptions = Object.keys(creditCardRewardTypes)
	.sort((a, b) => a.localeCompare(b))
	.map((rewardType): DropdownItem => ({
		Label: rewardType as CreditCardRewardTypes,
		Value: rewardType as CreditCardRewardTypes
	}))

export const creditCardSpendingCategoriesOptions = [...creditCardSpendingCategories]
	.sort((a, b) => a.localeCompare(b))
	.map((spendingCategory): DropdownItem => ({
		Label: spendingCategory as CreditCardSpendingCategories,
		Value: spendingCategory as CreditCardSpendingCategories
	}))

export const creditCardIssuersOptions = [...creditCardIssuers]
	.sort((a, b) => a.localeCompare(b))
	.map((issuerName): DropdownItem => ({
		Label: issuerName as CreditCardIssuers,
		Value: issuerName as CreditCardIssuers
	}))
