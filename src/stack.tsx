import { createNativeStackNavigator} from "@react-navigation/native-stack"
import LoginScreen from "./screens/login-screen"
import NavBar from "./components/nav-bar"

export default function Stack () {
	const StackNavigator = createNativeStackNavigator()

	return (
		<StackNavigator.Navigator initialRouteName = "Login" screenOptions = {{headerShown:false}}>
			<StackNavigator.Screen name = "Login" component = {LoginScreen}/>
			<StackNavigator.Screen name = "MainTabs" component = {NavBar} />
		</StackNavigator.Navigator>
	)
}
