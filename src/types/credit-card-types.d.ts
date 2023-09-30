import additionalPerks from "../credit-card-lists/additional-perks"
import creditCardIssuers from "../credit-card-lists/credit-card-issuers"
import creditCardNames from "../credit-card-lists/credit-card-names"
import creditCardRewardTypes from "../credit-card-lists/credit-card-reward-types"
import creditCardSpendingCategories from "../credit-card-lists/credit-card-spending-categories"

declare global {
	type AdditionalPerks = keyof typeof additionalPerks
	type CreditCardIssuers = typeof creditCardIssuers[number]
	type CreditCardNames = typeof creditCardNames[number]
	type CreditCardSpendingCategories = typeof creditCardSpendingCategories[number]
	type CreditCardRewardTypes = keyof typeof creditCardRewardTypes

	interface RewardDetails {
		"Reward Amount": string
		"Reward Type": CreditCardRewardTypes
		"Limit": string
		"Note"?: string
	}

	interface CreditCardDetails {
		"Card Issuer": CreditCardIssuers
		"Description": string
		"Annual Fee": number
		"Rewards": {
			[key in CreditCardSpendingCategories]?: RewardDetails
		}
		"Additional Perks"?: AdditionalPerks[]
		"Information Link": string
		"Notes"?: string[]
		"Requirements"?: string[]
	}

	// After finishing the credit card list, change the type of creditCards to
		// type SingleCreditCardData = Record<CreditCardNames, CreditCardDetails:
	// The reason the other type is being used is because when using Record, all of the CreditCardNames must be listed.
	// Because the credit card list is not finished, this is not possible, yet.
	type SingleCreditCardData = {
		[key in CreditCardNames]?: CreditCardDetails
	}

}

export {}
