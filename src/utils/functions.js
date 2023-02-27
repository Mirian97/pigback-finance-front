export function deleteEmptyProperties(obj) {
  for (let prop in obj) {
    if (obj[prop] === '') {
      delete obj[prop]
    }
  }
}

export function handleSetStatus(status) {
  const currentStatus = status === 'Paga' ? true : false
  return currentStatus
}

export function handleSearch(searchValue, clientArray) {
  const searchLowerCase = searchValue.toLowerCase()
  const result = clientArray.filter((client) =>
    client.client_name.toLowerCase().includes(searchLowerCase)
  )
  return result
}

export function verifyFalsyProperties(obj) {
  for (let propriedade in obj) {
    if (obj[propriedade]) {
      return false
    }
  }
  return true
}
