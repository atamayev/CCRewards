declare global {
	type DropdownItem = {
		Label: string
		Value: string
	}

	type SearchFilter = {
		query: string,
		annualFee: number,
		cardIssuer: CreditCardIssuers | "",
		rewardType: CreditCardRewardTypes | "",
		spendingCategory: CreditCardSpendingCategories | "",
	}

	type AsyncStorageSavableKeys = "Credit Cards List" | "Reward Preference"
}

export {}
