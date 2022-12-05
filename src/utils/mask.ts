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

export const maskPhone = (value: string) => {
  let r = value.replace(/\D/g, '')
  r = r.replace(/^0/, '')
  if (r.length > 10) {
    r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, '($1) $2-$3')
  } else if (r.length > 5) {
    r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, '($1) $2-$3')
  } else if (r.length > 2) {
    r = r.replace(/^(\d\d)(\d{0,5})/, '($1) $2')
  } else {
    r = r.replace(/^(\d*)/, '($1')
  }
  return r
}
