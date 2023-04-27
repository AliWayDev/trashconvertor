"use strict"
import {getCurrentCurrenyRates} from "./helpers/getCurrentCurrenyRates.js";

export const convertor = async (target, toMake) => {
    if(toMake === 'UZS') {
        throw new Error('Currency is not correct')
    }

    const currentCurrency = await getCurrentCurrenyRates(toMake)

    if(currentCurrency) {
        return target / +currentCurrency.Rate
    } else {
        throw new Error('Check currencyName')
    }
}
