export function handleOrderById(stateArray, setStateArray, order, setOrder) {
  const localCharges = [...stateArray]
  if (order) {
    localCharges.sort((a, b) => b.charge_id - a.charge_id)
    setOrder(false)
  } else {
    localCharges.sort((a, b) => a.charge_id - b.charge_id)
    setOrder(true)
  }
  setStateArray(localCharges)
}

export function handleOrderByName(stateArray, setStateArray, order, setOrder) {
  const localCharges = [...stateArray]
  if (order) {
    localCharges.sort((a, b) => b.client_name.localeCompare(a.client_name))
    setOrder(false)
  } else {
    localCharges.sort((a, b) => a.client_name.localeCompare(b.client_name))
    setOrder(true)
  }
  setStateArray(localCharges)
}
