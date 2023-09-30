import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import MyCards from "../screens/my-cards"
import MyRewards from "../screens/my-rewards"
import ProfileAndSettings from "../screens/profile-and-settings"

export default function NavBar () {
	const Tab = createBottomTabNavigator()

	return (
		<Tab.Navigator
			screenOptions = {() => ({
				tabBarHideOnKeyboard:true,
				headerShown:false,
				tabBarActiveTintColor:"black",
				tabBarShowLabel:true,
				tabBarStyle: {
					height: 60,
					borderRadius:20,
					backgroundColor: "#fff",
					position: "absolute",
					bottom: 20,
					left: 20,
					right: 20,
					alignItems: "center",
					justifyContent: "center",
					shadowColor: "#000",
					shadowOffset: {
						width: 0,
						height: 4,
					},
					shadowOpacity: 0.2,
					shadowRadius: 4,
					elevation: 5,
				}
			})}
		>
			<Tab.Screen name = "My Cards" component = {MyCards} />
			<Tab.Screen name = "My Rewards" component = {MyRewards} />
			<Tab.Screen name = "Profile/Settings" component = {ProfileAndSettings} />
		</Tab.Navigator>
	)
}
