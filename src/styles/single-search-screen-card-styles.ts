import { StyleSheet } from "react-native"

const SingleSearchScreenCardStyles = StyleSheet.create({
	cardContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",

	},
	viewImageHolder: {
		height: 150,
		width: 250,
		borderRadius: 10,
		marginBottom: 10,
		overflow: "hidden",
		zIndex: 1,
	},
	myCardsImage: {
		height: "100%",
		width: "100%",
		borderRadius: 10,
	}
})

export default SingleSearchScreenCardStyles
