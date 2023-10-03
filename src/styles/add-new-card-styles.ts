import { StyleSheet } from "react-native"

const AddNewCardStyles = StyleSheet.create({
	plusIcon: {
		position: "absolute",
		right: 10,
		bottom: 80,
	},
	selectCardIssuer: {
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
	selectCard: {
		position: "absolute",
		top: 175,
		left: "10%",
		fontSize: 20,
		fontWeight: "bold",
	},
	selectCardDropdownInputStyles: {
		position: "absolute",
		top: 215,
		left: "10%",
		width: "80%",
	},
	imageStyles: {
		position: "absolute",
		bottom: 100,
		left: "10%",
		width: "80%",
		height: "20%",
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
