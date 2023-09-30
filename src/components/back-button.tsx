import { Pressable } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import { useNavigation } from "@react-navigation/native"
import BackButtonStyles from "../styles/back-button-styles"

export default function BackButton() {
	const navigation = useNavigation()

	return (
		<Pressable onPress = {() => navigation.goBack()} style = {BackButtonStyles.backIcon}>
			<Ionicons name="chevron-back-outline" size={30} />
		</Pressable>
	)
}
