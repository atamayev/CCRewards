import _ from "lodash"
import { useState, useEffect } from "react"
import PageHeader from "../components/page-header"
import { FlatList, TextInput, View } from "react-native"
import SearchStyles from "../styles/search-styles"
import creditCardNames from "../credit-card-lists/credit-card-names"
import SingleSearchScreenCard from "../components/single-search-screen-card"
import { CardIssuersDropdown, RewardTypeDropdown, SpendingCategoryDropdown } from "../components/search-filters"
import creditCards from "../credit-card-lists/credit-cards"

// eslint-disable-next-line complexity
function matchesFilter(cardData: any, filter: SearchFilter) {
	if (filter.query && !_.toLower(cardData.cardName).includes(_.toLower(filter.query))) {
		return false
	}
	if (filter.annualFee !== 0 && cardData["Annual Fee"] !== filter.annualFee) {
		return false
	}
	if (filter.cardIssuer && cardData["Card Issuer"] !== filter.cardIssuer) {
		return false
	}
	if (filter.rewardType || filter.spendingCategory) {
		for (const [category, reward] of Object.entries(cardData.Rewards)) {
			if (filter.rewardType && reward["Reward Type"] !== filter.rewardType) return false
			if (filter.spendingCategory && category !== filter.spendingCategory) return false
		}
	}
	return true
}

export default function Search () {
	const [filter, setFilter] = useState<SearchFilter>({
		query: "",
		annualFee: 0,
		cardIssuer: "",
		rewardType: "",
		spendingCategory: "",
	})
	const [searchResults, setSearchResults] = useState<CreditCardNames[]>([...creditCardNames])

	useEffect(() => {
		const filteredResults = Object.keys(creditCards).filter(cardName => {
			return matchesFilter({ ...creditCards[cardName], cardName }, filter)
		})
		console.log(filteredResults)

		setSearchResults(filteredResults)

	}, [filter])

	return (
		<PageHeader title = "Search">
			<TextInput
				value = {filter.query}
				onChangeText = {(text) => setFilter(prevFilter => ({ ...prevFilter, query: text}))}
				placeholder = "Search for a card..."
				style = {SearchStyles.inputSearchText}
			/>
			<View style = {SearchStyles.dropdownContainerView}>

				<CardIssuersDropdown
					filter = {filter}
					setFilter = {setFilter}
				/>

				<RewardTypeDropdown
					filter = {filter}
					setFilter = {setFilter}
				/>

				<SpendingCategoryDropdown
					filter = {filter}
					setFilter = {setFilter}
				/>
			</View>
			<View style = {SearchStyles.flatListView}>

				<FlatList
					data = {searchResults}
					renderItem = {({ item }) => (
						<SingleSearchScreenCard cardName = {item}/>
					)}
				/>
			</View>
		</PageHeader>
	)
}
