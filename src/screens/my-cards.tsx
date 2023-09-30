import { useState} from "react"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import Ionicons from "react-native-vector-icons/Ionicons"
import { Pressable, View, Text, FlatList, Dimensions, NativeSyntheticEvent, NativeScrollEvent } from "react-native"
import creditCardsList from "../credit-cards-list"
import ContainerStyles from "../styles/container-styles"
import AddNewCardButtonStyles from "../styles/add-new-card-button-styles"
import MyCardsCard from "../components/my-cards-card"

export default function MyCards () {
	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
	const [currentIndex, setCurrentIndex] = useState(0)
	const { width } = Dimensions.get("screen")

	const handleAddCard = () => {
		navigation.navigate("AddNewCard")
	}

	const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
		const contentOffset = event.nativeEvent.contentOffset
		const currentIndexMath = Math.floor(contentOffset.x / 245)

		setCurrentIndex(currentIndexMath)
	}

	return (
		<View style={ContainerStyles.container}>
			<View style={{ position: "absolute", top: 30, left: 20 }}>
				<Text style={{ fontWeight: "bold", fontSize: 30 }}>My Cards</Text>
			</View>

			<FlatList
				data = {creditCardsList}
				horizontal
				pagingEnabled
				showsHorizontalScrollIndicator = {false}
				snapToAlignment = "center"
				onScroll = {handleScroll}
				contentContainerStyle = {{alignSelf:"center", height:"80%"}}
				renderItem = {({ item, index }) => (
					<MyCardsCard
						cardData = {item}
						style = {{
							height: 150,
							width: 250,
							borderRadius: 10,
							marginTop:10,
							transform: [{ scale: index === currentIndex ? 1.1 : 1 }],
							marginLeft: index === 0 ? width / 2 - 230 / 2 : 15,
							marginRight: index === creditCardsList.length - 1 ? width / 2 - 230 / 2 : 15,
						}}
					/>
				)}
			/>
			<Pressable onPress = {handleAddCard} style = {AddNewCardButtonStyles.plusIcon}>
				<Ionicons name = "add-circle" size = {60} />
			</Pressable>
		</View>
	)
}
