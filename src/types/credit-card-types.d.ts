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
	type CreditCardType = "Personal" | "Business" | "Both"
	type MMDDYYYYDate = `${number}/${number}/${number}`

	interface RewardDetails {
		"Reward Amount": string
		"Reward Type": CreditCardRewardTypes
		"Limit": string
		"Note"?: string
	}

	interface SingleCreditCardDetails {
		"Card Issuer": CreditCardIssuers
		"Card Type": CreditCardType
		"Last Updated": MMDDYYYYDate
		"Description": string
		"Annual Fee": number
		"Rewards": {
			[key in CreditCardSpendingCategories]?: RewardDetails
		}
		"Information URL": string
		"Image URL": string
		"Additional Perks"?: AdditionalPerks[]
		"Notes"?: string[]
		"Requirements"?: string[]
	}

	type CreditCardData = Record<CreditCardNames, SingleCreditCardDetails>
}

export {}
