export const priceFormatter = (currency: string) => new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: currency
});
