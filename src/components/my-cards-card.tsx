import { Text, View, Image } from "react-native"

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
		<View style = {{flexDirection:"column", alignItems:"center"}}>
			<View style = {style}>
				<Image style = {{ height: 150, width: 250, borderRadius: 7 }} source = {{ uri: cardData.image_url }} />
				<Text style = {{ fontWeight: "bold", fontSize: 20, backgroundColor: "white", padding: 5, borderRadius: 5 }}>
					{cardData.name}
				</Text>
				<Text style = {{ backgroundColor: "white", padding: 5, borderRadius: 5 }}>
					{cardData.rewards}
				</Text>
			</View>
			<View style = {{position:"absolute", bottom:50}}>
			</View>
		</View>
	)
}
