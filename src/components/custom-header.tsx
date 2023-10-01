import { Text, View } from "react-native"
import BackButton from "./back-button"
import HeaderAreaStyles from "../styles/header-area-styles"

interface Props {
	headerText: string
}

export default function CustomHeader (props: Props) {
	const { headerText } = props

	return (
		<View style = {HeaderAreaStyles.headerArea}>
			<View style = {HeaderAreaStyles.headerBackButton}>
				<BackButton />
			</View>
			<Text style = {HeaderAreaStyles.headerText}>
				{headerText}
			</Text>
		</View>
	)
}
