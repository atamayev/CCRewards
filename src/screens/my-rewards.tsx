import { View, Text } from "react-native"
import ContainerStyles from "../styles/container-styles"
import MyRewardsStyles from "../styles/my-rewards-styles"

export default function MyRewards () {
	return (
		<View style = {ContainerStyles.container}>
			<View style = {MyRewardsStyles.pageView}>
				<Text style = {MyRewardsStyles.headerText}>
					My Rewards
				</Text>
			</View>
		</View>
	)
}
