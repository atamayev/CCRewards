import { View, Text } from "react-native"
import CommonStyles from "../styles/common-styles"
import CustomHeader from "../components/custom-header"
import { RouteProp } from "@react-navigation/native"

type CardDetailsRouteProp = RouteProp<RootStackParamList, "Card Details">

export default function CardDetails({ route }: { route: CardDetailsRouteProp }) {
	const { cardData } = route.params

	return (
		<View style = {CommonStyles.mainContainer}>
			<CustomHeader headerText = {"Card Details"} />
			<Text>{cardData}</Text>
		</View>
	)
}
