export function handleFormatUserName(name) {
  const nameFormatted = name[0].toUpperCase() + name[2].toUpperCase()
  return nameFormatted
}

export function handleFormatToMoney(value) {
  const money = Number(value).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })
  return money
}

export function handleFormatNumberOfClientsAndCharges(number) {
  const numberFormatted = number > 9 ? number : `0${number}`
  return numberFormatted
}
