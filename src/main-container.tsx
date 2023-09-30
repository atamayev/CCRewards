import { createBottomTabNavigator, BottomTabNavigationOptions } from "@react-navigation/bottom-tabs"
import MyCards from "./screens/my-cards"
import MyRewards from "./screens/my-rewards"
import TabNavigatorStyles from "./styles/navigator-styles"
import Ionicons from "react-native-vector-icons/Ionicons";
import {useRoute} from "@react-navigation/native";

// Define types for the focused, color, and route variables
type TabBarIconProps = {
	focused: boolean;
	color: string;
};

type Route = {
	name: string;
};


export default function MainContainer () {
	const Tab = createBottomTabNavigator()
	return (
		<Tab.Navigator
			screenOptions={({route}) => ({
				tabBarStyle:TabNavigatorStyles,
				headerShown:false,
				tabBarIcon: ({focused, color})=>{
					let iconName;
					let rn = route.name;
					if (rn === "My Cards") {
						iconName = focused ? 'card' : 'card-outline';
						return <Ionicons name = {iconName} size = {32} color = {color}/>
					} else if (rn === "My Rewards") {
						iconName = focused ? 'analytics' : 'analytics-outline';
						return <Ionicons name = {iconName} size = {32} color = {color}/>
					}
				}
			})}>
			<Tab.Screen name = "My Cards" component = {MyCards} />
			<Tab.Screen name = "My Rewards" component = {MyRewards} />
		</Tab.Navigator>
	)
}
