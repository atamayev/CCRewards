import { useMemo } from "react"
import { NavigationContainer } from "@react-navigation/native"
import AppContext, { CCRewardsContext } from "./src/contexts/cc-rewards-context"
import Stack from "./src/stack"

export default function App() {
	const sharedState = useMemo(() => new CCRewardsContext(), [])

	return (
		<NavigationContainer>
			<AppContext.Provider value = {sharedState}>
				<Stack />
			</AppContext.Provider>
		</NavigationContainer>
	)
}
