import {constants} from "./constants.js";

export const getCurrentCurrenyRates = async (currenyName) => {
    if(!currenyName) {
        throw new Error(`Currency name shouldn't be empty!`)
    }

    try {
        const response = await fetch(constants.cbuRatesArchive);

        const data = await response.json();

        return data.find((c) => c.Ccy === currenyName)
    } catch (e) {
        throw new Error(e)
    }
};