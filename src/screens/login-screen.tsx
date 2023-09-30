import { View, Text, Button } from "react-native"
import { StackNavigationProp } from "@react-navigation/stack"
import containerStyles from "../styles/container-styles"

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "Login">

interface LoginScreenProps {
	navigation: LoginScreenNavigationProp
}

export default function LoginScreen (props: LoginScreenProps) {
	const { navigation } = props

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
