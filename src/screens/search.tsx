import _ from "lodash"
import { useState, useEffect } from "react"
import PageHeader from "../components/page-header"
import { FlatList, TextInput, View } from "react-native"
import SearchStyles from "../styles/search-styles"
import creditCardNames from "../credit-card-lists/credit-card-names"
import SingleSearchScreenCard from "../components/single-search-screen-card"
import { CardIssuersDropdown, RewardTypeDropdown, SpendingCategoryDropdown } from "../components/search-filters"

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
		if (filter.query === "") setSearchResults([...creditCardNames])
		else {
			const lowerCaseQuery = _.toLower(filter.query)

			// Filter credit cards based on the query
			const filteredResults = creditCardNames.filter(cardName =>
				_.toLower(cardName).includes(lowerCaseQuery)
			)

			setSearchResults(filteredResults)
		}

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
