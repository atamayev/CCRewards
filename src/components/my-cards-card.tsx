import { View, Image, Pressable } from "react-native"
import MyCardsStyles from "../styles/my-cards-styles"

interface Props {
	cardData: {
		name: string
		image_url: string
		rewards: string
	}
	style: object
	onPress: () => void
}

export default function MyCardsCard(props: Props) {
	const { cardData, style } = props

	return (
		<View style = {style}>
			<Pressable onPress = {props.onPress}>
				<Image
					style = {MyCardsStyles.myCardsImage}
					source = {{ uri: cardData.image_url }}
				/>
			</Pressable>
		</View>
	)
}
