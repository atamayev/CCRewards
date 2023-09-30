import { View, Image } from "react-native"

interface Props {
	cardData: {
		name: string
		image_url: string
		rewards: string
	}
	style: object
}

export default function MyCardsCard(props: Props) {
	const { cardData, style } = props

	return (
		<View style = {style}>
			<Image style = {{ height: 150, width: 250, borderRadius: 7 }} source = {{ uri: cardData.image_url }} />
		</View>
	)
}
