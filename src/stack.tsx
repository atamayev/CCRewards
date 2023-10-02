import { createNativeStackNavigator} from "@react-navigation/native-stack"
import MainContainer from "./main-container"
import AddNewCard from "./screens/add-new-card"
import CardDetails from "./screens/card-details"

export default function Stack () {
	const StackNavigator = createNativeStackNavigator<RootStackParamList>()

	return (
		<StackNavigator.Navigator initialRouteName = "MainContainer" screenOptions = {{headerShown:false}}>
			<StackNavigator.Screen name = "MainContainer" component = {MainContainer} />
			<StackNavigator.Screen name = "AddNewCard" component = {AddNewCard} />
			<StackNavigator.Screen name = "CardDetails" component = {CardDetails} />
		</StackNavigator.Navigator>
	)
}
