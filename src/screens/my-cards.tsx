import { Pressable, View, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import containerStyles from "../styles/container-styles"
import Ionicons from "react-native-vector-icons/Ionicons"
import { StackNavigationProp } from "@react-navigation/stack"
import NavBar from "../components/nav-bar"

export default function MyCards () {
	const navigation = useNavigation<StackNavigationProp<RootStackParamList, "MyCards">>()

	const handleAddCard = () => {
		navigation.navigate("AddNewCard")
	}

	return (
		<View style={containerStyles.container}>
			<Text>Welcome to My Cards</Text>
			<Pressable onPress={() => navigation.goBack()}>
				<Ionicons name="chevron-back-outline" size={30} />
			</Pressable>
			{/* Button to navigate to the "AddNewCard" screen */}
			<Pressable onPress={handleAddCard}>
				<Text>Add New Card</Text>
			</Pressable>
			<NavBar />
		</View>
	)
}
