const getIconName = (routeName: string, focused: boolean) => {
	let iconName

	if (routeName === "My Cards") {
		iconName = focused ? "card" : "card-outline"
	} else if (routeName === "Search") {
		iconName = focused ? "search" : "search-outline"
	} else if (routeName === "My Rewards") {
		iconName = focused ? "analytics" : "analytics-outline"
	} else if (routeName === "Profile") {
		iconName = focused ? "person" : "person-outline"
	}

	return iconName
}

export default getIconName
