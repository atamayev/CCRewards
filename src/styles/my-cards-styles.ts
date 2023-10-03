import { StyleSheet } from "react-native"

const MyCardsStyles = StyleSheet.create({
	pageView: {
		position: "absolute",
		top: 30,
		left: 20
	},
	headerText: {
		fontWeight: "bold",
		fontSize: 30,
	},
	imageArea: {
		position: "absolute",
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 20,
		marginLeft: 20,
		marginRight: 20,
		top: 80,
	},
	myCardsImage: {
		height: 150,
		width: 250,
		borderRadius: 7,
		// marginTop: 10,
	}
})

export default MyCardsStyles
