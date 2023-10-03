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
	private _rewardPreference: CreditCardRewardTypes | "" = ""

	private async retrieveDataFromStorage(): Promise<void> {
		try {
			const creditCardsFromStorage = await AsyncStorage.getItem("Credit Cards List")
			if (!_.isNull(creditCardsFromStorage)) {
				this._creditCards = JSON.parse(creditCardsFromStorage)
			}
			const rewardsPreferenceFromStorage = await AsyncStorage.getItem("Reward Preference")
			if (!_.isNull(rewardsPreferenceFromStorage)) {
				this._rewardPreference = JSON.parse(rewardsPreferenceFromStorage)
			}
		} catch (e) {
			console.log(e)
		}
	}

	public async addCreditCard(creditCard: CreditCardNames): Promise<void> {
		this._creditCards.push(creditCard)
		await this.saveDataToStorage("Credit Cards List", this._creditCards)
	}

	public async removeCreditCard(creditCard: CreditCardNames): Promise<void> {
		this._creditCards = this._creditCards.filter((cc) => cc !== creditCard)
		await this.saveDataToStorage("Credit Cards List", this._creditCards)
	}

	public async updateRewardPreference(rewardPreference: CreditCardRewardTypes): Promise<void> {
		this._rewardPreference = rewardPreference
		await this.saveDataToStorage("Reward Preference", this._rewardPreference)
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	public async saveDataToStorage(key: AsyncStorageSavableKeys, whatToSave: any): Promise<void> {
		try {
			await AsyncStorage.setItem(key, JSON.stringify(whatToSave))
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

	get rewardPreference(): CreditCardRewardTypes | "" {
		return this._rewardPreference
	}

	set rewardPreference(rewardPreference: CreditCardRewardTypes | "") {
		this._rewardPreference = rewardPreference
	}
}

const AppContext = createContext(new CCRewardsContext())
export default AppContext
