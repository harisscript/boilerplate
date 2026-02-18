export const formatCurrency = (
    value: number,
    locale = 'id-ID',
    currency = 'IDR'
) => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
        minimumFractionDigits: 0,
    }).format(value);
};