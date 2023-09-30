import { ViewStyle } from "react-native"

const tabBarStyle: ViewStyle = {
	height: 60,
	borderRadius: 20,
	backgroundColor: "#fff",
	position: "absolute",
	bottom: 20,
	left: 20,
	right: 20,
	alignItems: "center",
	justifyContent: "center",
	shadowColor: "#000",
	shadowOffset: {
		width: 0,
		height: 4,
	},
	shadowOpacity: 0.2,
	shadowRadius: 4,
	elevation: 5,
}

const TabNavigatorStyles = {
	tabBarStyle,
}

export default TabNavigatorStyles
