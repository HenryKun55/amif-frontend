export const maskDate = (value: string) =>
  value
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{4})\d+?$/, '$1')

export const maskCreditCardNumber = (value: string) =>
  value
    .replace(/\D/g, '')
    .replace(/^(\d{4})(\d)/, '$1 $2')
    .replace(/(\d{4})(\d)/, '$1 $2')
    .replace(/(\d{4})(\d)/, '$1 $2')
    .replace(/(\d{4})\d+?$/, '$1')

export const maskCurrency = (value?: string | number | null) =>
  value && value !== 'R$'
    ? `R$ ${String(value)
        .replace(/\D/g, '')
        .replace(/(\d)(\d{2})$/, '$1.$2')
        .replace(/(?=(\d{3})+(\D))\B/g, ',')}`
    : ''

export const maskNumber = (value: string) => value.replace(/\D/g, '')

export const removeMaskCurrency = (value: string) =>
  Number(value.replace(/[^0-9.-]+/g, ''))
