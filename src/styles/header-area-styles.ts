import { StyleSheet } from "react-native"

const HeaderAreaStyles = StyleSheet.create({
	headerArea: {
		height: "10%",
		backgroundColor: "#f0f0f0",
	},
	headerBackButton: {
		top: 50,
		left: 20,
		width: 40,
		zIndex: 1,
	},
	headerText: {
		top: 20,
		width: "100%",
		textAlign: "center",
		fontSize: 20,
		fontWeight: "bold",
	}
})

export default HeaderAreaStyles
