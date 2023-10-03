import _ from "lodash"
import Ionicons from "react-native-vector-icons/Ionicons"
import { RouteProp, ParamListBase } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import MyCards from "./screens/my-cards"
import MyRewards from "./screens/my-rewards"
import Search from "./screens/search"
import Profile from "./screens/profile"
import TabNavigatorStyles from "./styles/navigator-styles"
import getIconName from "./helper-functions/get-icon-name"

export default function MainContainer() {
	const Tab = createBottomTabNavigator()

	const screenOptions = ({ route }: { route: RouteProp<ParamListBase, string> }) => ({
		tabBarStyle: TabNavigatorStyles.tabBarStyle,
		headerShown: false,
		tabBarIcon: ({ focused, color }: { focused: boolean; color: string }) => {
			const iconName = getIconName(route.name, focused)
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
			<Tab.Screen name = "Search" component = {Search} />
			<Tab.Screen name = "My Rewards" component = {MyRewards} />
			<Tab.Screen name = "Profile" component = {Profile} />
		</Tab.Navigator>
	)
}
