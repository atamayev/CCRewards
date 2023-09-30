/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dropdown } from "react-native-element-dropdown"

interface Props {
	data: any[]
	labelField: string
	valueField: string
	placeholder: string
	onChange: (value: string) => void
	value: string
	customStyle?: any
	setIsFocus?: (value: boolean) => void
}

export default function DropdownInput (props: Props) {
	const {
		data,
		labelField,
		valueField,
		placeholder,
		onChange,
		value,
		customStyle,
	} = props

	return (
		<Dropdown
			style = {{
				height: 50,
				borderRadius: 10,
				paddingHorizontal: 60,
				backgroundColor: "whitesmoke",
				text: "black",
				...customStyle
			}}
			// placeholderStyle = {{ color: "red" }}
			// selectedTextStyle = {{ color: "blue" }}
			// inputSearchStyle = {{
			// 	borderBottomWidth: 0,
			// 	backgroundColor: "#f2f2f2",
			// 	borderRadius: 20,
			// 	paddingHorizontal: 12,
			// 	marginHorizontal: 16,
			// 	marginBottom: 8,
			// }}
			iconStyle = {{
				width: 20,
				height: 20,
				marginRight: 8,
			}}
			data = {data}
			// search
			labelField = {labelField as any}
			valueField = {valueField as any}
			// placeholder = {placeholder}
			// searchPlaceholder = "Search..."
			// value = {value}
			onChange = {onChange}
		/>
	)
}
