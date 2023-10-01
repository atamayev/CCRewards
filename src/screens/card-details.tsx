import { View, Text } from "react-native"
import ContainerStyles from "../styles/container-styles"
import CustomHeader from "../components/custom-header"
import { RouteProp } from "@react-navigation/native"

type CardDetailsRouteProp = RouteProp<
	{ CardDetails: { cardData: string } },
	"CardDetails"
>


export default function CardDetails({ route }: { route: CardDetailsRouteProp }) {
	const { cardData } = route.params

	return (
		<View style = {ContainerStyles.container}>
			<CustomHeader headerText = {"Card Details"} />
			<Text>{cardData}</Text>
		</View>
	)
}
