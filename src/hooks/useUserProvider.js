import { useEffect, useState } from 'react'
import { useLocalStorage } from 'react-use'
import { getDashboard, listCharges } from '../services/charge'
import { detailClient as getClient, listClients } from '../services/client'
import { detailUser } from '../services/user'
import { messageError } from '../utils/messages'
import useGlobal from './useGlobal'

function useUserProvider() {
  const { openModalAddEditCharge, openModalCharge, openModalDeleteCharge } = useGlobal()
  const [token, setToken, removeToken] = useLocalStorage('token')
  const [user, setUser, removeUser] = useLocalStorage('user')
  const [clientFilterSelected, setClientFilterSelected] = useState({})
  const [chargeFilterSelected, setChargeFilterSelected] = useState({})
  const [searchClient, setSearchClient] = useState('')
  const [searchCharge, setSearchCharge] = useState('')
  const [clients, setClients] = useState([])
  const [charges, setCharges] = useState([])
  const [overdueCharges, setOverdueCharges] = useState({})
  const [paidCharges, setPaidCharges] = useState({})
  const [pendingCharges, setPendingCharges] = useState({})
  const [upToDateClients, setUpToDateClients] = useState({})
  const [defaulterClients, setDefaulterClients] = useState({})
  const [currentClient, setCurrentClient, removeCurrentClient] =
    useLocalStorage('current_client')
  const [currentCharge, setCurrentCharge, removeCurrentCharge] =
    useLocalStorage('current_charge')
  const [detailClient, setDetailClient, removeDetailClient] =
    useLocalStorage('detail_client')
  const [detailChargesClient, setDetailChargesClient, removeDetailChargesClient] =
    useLocalStorage('detail_charges_client')

  async function handleListClients() {
    try {
      const result = await listClients(token)
      setClients(result)
    } catch (error) {
      messageError(error.response.data.mensagem)
    }
  }

  async function handleListCharges() {
    try {
      const result = await listCharges(token)
      setCharges(result)
    } catch (error) {
      messageError(error.response.data.mensagem)
    }
  }

  async function handleDetailClient(id) {
    try {
      const { client, client_charges } = await getClient(token, id)
      setDetailClient(client)
      setDetailChargesClient(client_charges)
    } catch (error) {
      messageError(error.response.data.mensagem)
    }
  }

  async function loadDashboard() {
    try {
      const {
        overdueCharges,
        amountOverdueCharges,
        totalOverdueCharges,
        paidCharges,
        amountPaidCharges,
        totalPaidCharges,
        pendingCharges,
        amountPendingCharges,
        totalPendingCharges,
        upToDateClients,
        totalUpToDateClients,
        defaulterClients,
        totalDefaulterClients
      } = await getDashboard(token)
      setOverdueCharges({
        charges: overdueCharges,
        amountOverdueCharges,
        totalOverdueCharges
      })
      setPaidCharges({ charges: paidCharges, amountPaidCharges, totalPaidCharges })
      setPendingCharges({
        charges: pendingCharges,
        amountPendingCharges,
        totalPendingCharges
      })
      setUpToDateClients({ clients: upToDateClients, totalUpToDateClients })
      setDefaulterClients({ clients: defaulterClients, totalDefaulterClients })
    } catch (error) {
      messageError(error.response.data.mensagem)
    }
  }

  async function loadUserProfile() {
    try {
      const result = await detailUser(token)
      const { token: _, ...userData } = result
      setUser(userData)
    } catch (error) {
      messageError(error.response.data.mensagem)
    }
  }
  useEffect(() => {
    if (!openModalAddEditCharge && !openModalCharge && !openModalDeleteCharge) {
      return setCurrentCharge(false)
    }
  }, [openModalAddEditCharge, openModalCharge, openModalDeleteCharge])

  useEffect(() => {
    if (token) {
      loadUserProfile()
      handleListCharges()
      handleListClients()
      loadDashboard()
    }
  }, [token])

  return {
    token,
    setToken,
    removeToken,
    user,
    setUser,
    removeUser,
    clients,
    setClients,
    charges,
    setCharges,
    currentClient,
    setCurrentClient,
    removeCurrentClient,
    currentCharge,
    setCurrentCharge,
    removeCurrentCharge,
    detailClient,
    setDetailClient,
    removeDetailClient,
    detailChargesClient,
    setDetailChargesClient,
    removeDetailChargesClient,
    handleListClients,
    handleListCharges,
    handleDetailClient,
    searchClient,
    setSearchClient,
    searchCharge,
    setSearchCharge,
    overdueCharges,
    setOverdueCharges,
    paidCharges,
    setPaidCharges,
    pendingCharges,
    setPendingCharges,
    upToDateClients,
    setUpToDateClients,
    defaulterClients,
    setDefaulterClients,
    loadUserProfile,
    loadDashboard,
    clientFilterSelected,
    setClientFilterSelected,
    chargeFilterSelected,
    setChargeFilterSelected
  }
}

export default useUserProvider
