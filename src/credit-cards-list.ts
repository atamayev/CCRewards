/* eslint-disable max-len */
interface CardData {
	name: string
	image_url: string
	rewards: string
	credit_limit: number
}

const creditCardsList: CardData[] = [
	{
		"name": "Discover it® Cash Back",
		"rewards": "5% cashback on rotating categories, 1% on all other purchases.",
		"image_url": "https://www.investopedia.com/thmb/8RexHfifrVNTV0D0puDQ69R0iPY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/discover_it_cash_back_FINAL-0a146207fcc24568a9667949f94a9d93.png",
		"credit_limit":2000
	},
	{
		"name": "Citi® Double Cash Card",
		"rewards": "Earn 2% cashback on every purchase (1% when you buy, 1% when you pay off).",
		"image_url": "https://www.citi.com/CRD/images/citi-double-cash/citi-double-cash_222x140.png",
		"credit_limit":2000
	},
	{
		"name": "Capital One® Venture Rewards Credit Card",
		"rewards": "Earn 2x miles on every purchase.",
		"image_url": "https://www.forbes.com/advisor/wp-content/uploads/2021/07/ff304640-e963-11eb-a48f-65ac0bb53c5b.png",
		"credit_limit":2000,
	},
	{
		"name": "American Express® Gold Card",
		"rewards": "4x points on dining, 4x points at U.S. supermarkets, 3x points on flights booked directly with airlines, 1x points on other purchases.",
		"image_url": "https://icm.aexp-static.com/acquisition/card-art/NUS000000174_480x304_straight_withname.png",
		"credit_limit":2000,
	},
	{
		"name": "Chase Sapphire Reserve® Credit Card®",
		"rewards": "3x points on dining, 3x points on travel, 1x points on other purchases, and various travel benefits.",
		"image_url": "https://www.forbes.com/advisor/wp-content/uploads/2019/08/chase-sapphire-reserve.png",
		"credit_limit":2000,
	},
	{
		"name": "Chase Freedom Flex℠ Credit Card®",
		"rewards": "5% cashback on rotating categories, 1% on all other purchases.",
		"image_url": "https://creditcards.chase.com/K-Marketplace/images/cardart/freedom_flex_card_alt.png",
		"credit_limit":2000,
	},
	{
		"name": "Amex Blue Cash Preferred®",
		"rewards": "6% cashback at U.S. supermarkets, 6% on streaming services, 3% on transit, 1% on other purchases.",
		"image_url": "https://icm.aexp-static.com/Internet/Acquisition/US_en/AppContent/OneSite/category/cardarts/blue-cash-preferred.png",
		"credit_limit":2000,
	},
	{
		"name": "Citi Rewards+® Card",
		"rewards": "Earn 2x ThankYou® Points at supermarkets and gas stations, 1x on other purchases.",
		"image_url": "https://www.forbes.com/advisor/wp-content/uploads/2021/10/96eb2f40-fb6b-11eb-bb36-9183285abe2c-1.png",
		"credit_limit":2000,
	},
	{
		"name": "Wells Fargo Propel American Express®",
		"rewards": "3x points on dining, gas, travel, and more, 1x on other purchases.",
		"image_url": "https://www.forbes.com/advisor/wp-content/uploads/2019/06/wells-fargo-propel.png",
		"credit_limit":2000
	}

]

export default creditCardsList
