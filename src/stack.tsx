import { createNativeStackNavigator} from "@react-navigation/native-stack"
import NavBar from "./components/nav-bar"
import AddNewCard from "./screens/add-new-card"
import MyCards from "./screens/my-cards"

export default function Stack () {
	const StackNavigator = createNativeStackNavigator()

	return (
		<StackNavigator.Navigator initialRouteName = "My Cards" screenOptions = {{headerShown:false}}>
			<StackNavigator.Screen name = "My Cards" component = {MyCards}/>
			<StackNavigator.Screen name = "AddNewCard" component = {AddNewCard} />
			<StackNavigator.Screen name = "MainTabs" component = {NavBar} />
		</StackNavigator.Navigator>
	)
}
