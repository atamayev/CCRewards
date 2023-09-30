import { createBottomTabNavigator, BottomTabNavigationOptions } from "@react-navigation/bottom-tabs"
import MyCards from "./screens/my-cards"
import MyRewards from "./screens/my-rewards"
import TabNavigatorStyles from "./styles/navigator-styles"

export default function MainContainer () {
	const Tab = createBottomTabNavigator()

	return (
		<Tab.Navigator
			screenOptions = {() => (TabNavigatorStyles as BottomTabNavigationOptions)}
		>
			<Tab.Screen name = "My Cards" component = {MyCards} />
			<Tab.Screen name = "My Rewards" component = {MyRewards} />
		</Tab.Navigator>
	)
}
