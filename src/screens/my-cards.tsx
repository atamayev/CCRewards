import { Pressable, View, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import Ionicons from "react-native-vector-icons/Ionicons"
import ContainerStyles from "../styles/container-styles"
import AddNewCardButtonStyles from "../styles/add-new-card-button-styles"

export default function MyCards () {
	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

	const handleAddCard = () => {
		navigation.navigate("AddNewCard")
	}

	return (
		<View style={ContainerStyles.container}>
			<Text>My Cards</Text>
			<Pressable onPress={handleAddCard} style={AddNewCardButtonStyles.plusIcon}>
				<Ionicons name="add-circle-outline" size = {60} />
			</Pressable>
		</View>
	)
}
