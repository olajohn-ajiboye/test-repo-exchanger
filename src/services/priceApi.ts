const FX_BASE_URL = 'https://api.exchangeratesapi.io/latest?'

interface CurrencyPair {
    source: string
    target: string
}

export const fetchCurrencyPairPrices = async ({ source, target }: CurrencyPair): Promise<Record<string, number>> => {
    try {
        const sourceTargetPrice = await fetch(`${FX_BASE_URL}symbols=${target}&base=${source}`).then(res => res.json())
        const targetSourcePrice = await fetch(`${FX_BASE_URL}symbols=${source}&base=${target}`).then(res => res.json())
        return {
            [`${source}/${target}`]: sourceTargetPrice.rates[target],
            [`${target}/${source}`]: targetSourcePrice.rates[source],
        }
    } catch (e) {
        console.error(e)
        return {}
    }
}
