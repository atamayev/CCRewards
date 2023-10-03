import _ from "lodash"
import Ionicons from "react-native-vector-icons/Ionicons"
import { RouteProp, ParamListBase } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import MyCards from "./screens/my-cards"
import MyRewards from "./screens/my-rewards"
import TabNavigatorStyles from "./styles/navigator-styles"

export default function MainContainer() {
	const Tab = createBottomTabNavigator()

	const screenOptions = ({ route }: { route: RouteProp<ParamListBase, string> }) => ({
		tabBarStyle: TabNavigatorStyles.tabBarStyle,
		headerShown: false,
		tabBarIcon: ({ focused, color }: { focused: boolean; color: string }) => {
			let iconName
			if (route.name === "My Cards") {
				iconName = focused ? "card" : "card-outline"
			} else if (route.name === "My Rewards") {
				iconName = focused ? "analytics" : "analytics-outline"
			}
			if (_.isUndefined(iconName)) return null

			return (
				<Ionicons
					name = {iconName}
					size = {32}
					color = {color}
				/>
			)
		}
	})

	return (
		<Tab.Navigator screenOptions = {screenOptions}>
			<Tab.Screen name = "My Cards" component = {MyCards} />
			<Tab.Screen name = "My Rewards" component = {MyRewards} />
		</Tab.Navigator>
	)
}
