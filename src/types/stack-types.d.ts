declare global {
	type RootStackParamList = {
		MyCards: undefined
		MainTabs: undefined
		AddNewCard: undefined
		CardDetails: { cardData: CardData }
	}
}

export {}
