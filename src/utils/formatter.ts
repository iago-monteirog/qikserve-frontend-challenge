const currencyToLocale: Record<string, string> = {
    'USD': 'en-US',
    'EUR': 'de-DE',
    'JPY': 'ja-JP',
    'GBP': 'en-GB',
    'AUD': 'en-AU',
    'CAD': 'en-CA',
    'CHF': 'de-CH',
    'CNY': 'zh-CN',
    'HKD': 'zh-HK',
    'NZD': 'en-NZ',
    'BRL': 'pt-BR',
}

const getLocaleFromCurrency = (currency: string): string => {
    return currencyToLocale[currency] || 'en-US'
};

export const priceFormatter = (currency: string) => {
    const locale = getLocaleFromCurrency(currency);
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency
    });
}
