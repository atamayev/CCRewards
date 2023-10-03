import { createNativeStackNavigator} from "@react-navigation/native-stack"
import MainContainer from "./main-container"
import AddNewCard from "./screens/add-new-card"
import CardDetails from "./screens/card-details"

export default function Stack () {
	const StackNavigator = createNativeStackNavigator<RootStackParamList>()

	return (
		<StackNavigator.Navigator initialRouteName = "Main Container" screenOptions = {{headerShown:false}}>
			<StackNavigator.Screen name = "Main Container" component = {MainContainer} />
			<StackNavigator.Screen name = "Add New Card" component = {AddNewCard} />
			<StackNavigator.Screen name = "Card Details" component = {CardDetails} />
		</StackNavigator.Navigator>
	)
}
