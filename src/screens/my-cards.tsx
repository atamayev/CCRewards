import { useState} from "react"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import Ionicons from "react-native-vector-icons/Ionicons"
import { Pressable, View, Text, FlatList } from "react-native"
import creditCardsList from "../credit-cards-list"
import ContainerStyles from "../styles/container-styles"
import AddNewCardButtonStyles from "../styles/add-new-card-button-styles"
import MyCardsCard from "../components/my-cards-card"

export default function MyCards () {
	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

	const handleAddCard = () => {
		navigation.navigate("AddNewCard")
	}



	return (
		<View style={ContainerStyles.container}>
			<View style={{ position: "absolute", top: 30, left: 20 }}>
				<Text style={{ fontWeight: "bold", fontSize: 30 }}>My Cards</Text>
			</View>

			<FlatList
				data = {creditCardsList}
				renderItem = {({ item}) => (
					<MyCardsCard
						cardData = {item}
						style = {{
							height: 150,
							width: 250,
							borderRadius: 10,
							marginTop:10,
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
