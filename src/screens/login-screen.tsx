import { View, Text, Button } from "react-native"
import { StackNavigationProp } from "@react-navigation/stack"
import containerStyles from "../styles/container-styles"
import { useNavigation } from "@react-navigation/native"

//Login screen not currently being used
export default function LoginScreen () {
	const navigation = useNavigation<StackNavigationProp<RootStackParamList, "Login">>()

	const handleLogin = () => {
		navigation.navigate("MainTabs")
	}

	return (
		<View style = {containerStyles.container}>
			<Text>Login Screen</Text>
			<Button title="Login" onPress={handleLogin} />
		</View>
	)
}
