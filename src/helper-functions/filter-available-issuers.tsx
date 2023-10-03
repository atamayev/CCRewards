import _ from "lodash"
import creditCards from "../credit-card-lists/credit-cards"
import creditCardIssuers from "../credit-card-lists/credit-card-issuers"
import { CCRewardsContext } from "../contexts/cc-rewards-context"

//This function returns an object with the keys being the credit card issuers and the values being an array of credit card names
const mapIssuersToCards = () => {
	const groupedByIssuer = _.groupBy(Object.keys(creditCards), cardName => creditCards[cardName as CreditCardNames]["Card Issuer"])
	return groupedByIssuer as { [issuerMappingName: string]: CreditCardNames[] }
}

// This function returns an array of credit card issuers that are not already in the appContext
// This is based on the credit cards that are already in the appContext
const filterAvailableIssuers = (appContext: CCRewardsContext) => {
	const issuerToCardsMapping = mapIssuersToCards()

	return creditCardIssuers.filter((issuerName) => {
		const cardsForIssuer = issuerToCardsMapping[issuerName] || []
		return !cardsForIssuer.every((card) => appContext.creditCards.includes(card))
	})
}

export default filterAvailableIssuers
