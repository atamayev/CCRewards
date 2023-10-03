/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dropdown } from "react-native-element-dropdown"

interface Props<T extends DropdownItem>{
	data: T[]
	labelField: keyof T
	valueField: keyof T
	placeholder: string
	onChange: (value: T) => void
	value: string
	customStyle?: any
	setIsFocus?: (value: boolean) => void
}

export default function DropdownInput <T extends DropdownItem>(props: Props<T>) {
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
			selectedTextStyle = {{ color: "blue" }}
			inputSearchStyle = {{
				borderBottomWidth: 0,
				backgroundColor: "#f2f2f2",
				borderRadius: 10,
				paddingHorizontal: 12,
				marginHorizontal: 16,
				marginBottom: 8,
			}}
			iconStyle = {{
				width: 20,
				height: 20,
				marginRight: 8,
			}}
			data = {data}
			search
			labelField = {labelField as any}
			valueField = {valueField as any}
			placeholder = {placeholder}
			searchPlaceholder = "Search..."
			value = {value}
			onChange = {onChange}
		/>
	)
}
