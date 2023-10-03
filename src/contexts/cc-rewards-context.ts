import _ from "lodash"
import { createContext } from "react"
import { makeAutoObservable } from "mobx"
import AsyncStorage from "@react-native-async-storage/async-storage"

export class CCRewardsContext {
	constructor() {
		makeAutoObservable(this)
		this.retrieveDataFromStorage()
	}

	private _creditCards: CreditCardNames[] = []

	private async retrieveDataFromStorage(): Promise<void> {
		try {
			const creditCardsFromStorage = await AsyncStorage.getItem("Credit Cards List")
			if (!_.isNull(creditCardsFromStorage)) {
				this._creditCards = JSON.parse(creditCardsFromStorage)
			}
		} catch (e) {
			console.log(e)
		}
	}

	public async addCreditCard(creditCard: CreditCardNames): Promise<void> {
		this._creditCards.push(creditCard)
		await this.saveDataToStorage()
	}

	public async removeCreditCard(creditCard: CreditCardNames): Promise<void> {
		this._creditCards = this._creditCards.filter((cc) => cc !== creditCard)
		await this.saveDataToStorage()
	}

	public async saveDataToStorage(): Promise<void> {
		try {
			await AsyncStorage.setItem("Credit Cards List", JSON.stringify(this._creditCards))
		} catch (e) {
			console.log(e)
		}
	}

	get creditCards(): CreditCardNames[] {
		return this._creditCards
	}

	set creditCards(creditCards: CreditCardNames[]) {
		this._creditCards = creditCards
	}

}

const AppContext = createContext(new CCRewardsContext())
export default AppContext
