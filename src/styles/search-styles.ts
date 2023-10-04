import { StyleSheet } from "react-native"

const SearchStyles = StyleSheet.create({
	inputSearchText: {
		position: "absolute",
		top: 80,
		left: "10%",
		right: "10%",
		fontSize: 18,
		fontWeight: "bold",
		borderWidth: 1,
		borderColor: "#ccc"
	},
	dropdownContainerView: {
		position: "absolute",
		top: 120,
		left: "10%",
		right: "10%",
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: "#ccc"
	},
	flatListView: {
		top: 290,
		left: "10%",
	}
})

export default SearchStyles
