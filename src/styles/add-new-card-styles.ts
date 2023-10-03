import { StyleSheet } from "react-native"

const AddNewCardStyles = StyleSheet.create({
	plusIcon: {
		position: "absolute",
		right: 10,
		bottom: 80,
	},
	selectCardIssuerText: {
		position: "absolute",
		top: 80,
		left: "10%",
		fontSize: 20,
		fontWeight: "bold",
	},
	selectIssuerDropdownInputStyles: {
		position: "absolute",
		top: 120,
		left: "10%",
		width: "80%",
	},
	selectCardText: {
		position: "absolute",
		top: 180,
		left: "10%",
		fontSize: 20,
		fontWeight: "bold",
	},
	selectCardDropdownInputStyles: {
		position: "absolute",
		top: 220,
		left: "10%",
		width: "80%",
	},
	searchAndSelectCardText: {
		position: "absolute",
		top: 280,
		left: "10%",
		fontSize: 20,
		fontWeight: "bold",
	},
	searchAndSelectCardInputStyles: {
		position: "absolute",
		top: 320,
		left: "10%",
		width: "80%",
	},
	imageStyles: {
		position: "absolute",
		bottom: 100,
		left: "10%",
		width: "80%",
		height: "25%",
		aspectRatio: 1,
		borderRadius: 10,
	},
	addButton: {
		position: "absolute",
		bottom: 20,
		left: "10%",
		width: "80%",
		borderWidth: 1,
		borderColor: "black",
		borderRadius: 10,
	},
	addButtonText: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
	},
})

export default AddNewCardStyles
