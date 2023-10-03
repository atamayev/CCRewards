import { StyleSheet } from "react-native"

const MyCardsStyles = StyleSheet.create({
	headerTextView: {
		position: "absolute",
		top: 30,
		left: 20
	},
	headerText: {
		fontWeight: "bold",
		fontSize: 30,
	},
	flatListView: {
		position: "absolute",
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 20,
		marginLeft: 20,
		top: 80,
	}
})

export default MyCardsStyles
