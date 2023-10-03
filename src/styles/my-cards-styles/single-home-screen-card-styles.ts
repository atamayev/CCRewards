import { StyleSheet } from "react-native"

const SingleHomeScreenCardStyles = StyleSheet.create({
	cardContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
	},
	viewImageHolder:{
		height: 150,
		width: 250,
		borderRadius: 10,
		marginBottom: 10,
		overflow: "hidden"
	},
	myCardsImage: {
		height: "100%",
		width: "100%",
		borderRadius: 10,
	},
	deleteButtonContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},

	deleteButtonPressable: {
		padding: 5,
	}
})

export default SingleHomeScreenCardStyles
