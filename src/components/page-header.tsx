import { ReactNode } from "react"
import { View, Text } from "react-native"
import CommonStyles from "../styles/common-styles"

interface PageHeaderProps {
	title: string
	children: ReactNode
}

export default function PageHeader(props: PageHeaderProps) {
	const { title, children } = props

	return (
		<View style = {CommonStyles.mainContainer}>
			<View style = {CommonStyles.pageView}>
				<Text style = {CommonStyles.headerText}>
					{title}
				</Text>
			</View>
			{children}
		</View>
	)
}
