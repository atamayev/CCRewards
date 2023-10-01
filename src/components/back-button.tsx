import { Pressable, View } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import { useNavigation } from "@react-navigation/native"

export default function BackButton() {
	const navigation = useNavigation()

	return (
		<View>
			<Pressable
				onPress = {() => {
					navigation.goBack()
					console.log("here")
				}}
			>
				<Ionicons name = "chevron-back-outline" size = {30} />
			</Pressable>
		</View>
	)
}
