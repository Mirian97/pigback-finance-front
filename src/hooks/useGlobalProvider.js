import { useState } from 'react'

function useGlobalProvider() {
  const [currentStep, setCurrentStep] = useState(0)
  const [openModalSuccessAddUser, setOpenModalSuccessAddUser] = useState(false)
  const [openModalSuccessEditUser, setOpenModalSuccessEditUser] = useState(false)
  const [openModalEditUser, setOpenModalEditUser] = useState(false)
  const [openModalAddEditClient, setOpenModalAddEditClient] = useState(false)
  const [openModalAddEditCharge, setOpenModalAddEditCharge] = useState(false)
  const [openModalDeleteCharge, setOpenModalDeleteCharge] = useState(false)
  const [openModalCharge, setOpenModalCharge] = useState(false)
  const [openFilter, setOpenFilter] = useState(false)
  const [notify, setNotify] = useState({
    open: false,
    color: 'success',
    severity: 'success',
    message: ''
  })

  return {
    currentStep,
    setCurrentStep,
    openModalSuccessAddUser,
    setOpenModalSuccessAddUser,
    openModalSuccessEditUser,
    setOpenModalSuccessEditUser,
    openModalAddEditClient,
    setOpenModalAddEditClient,
    openModalEditUser,
    setOpenModalEditUser,
    openModalAddEditCharge,
    setOpenModalAddEditCharge,
    openModalDeleteCharge,
    setOpenModalDeleteCharge,
    openModalCharge,
    setOpenModalCharge,
    openFilter,
    setOpenFilter,
    notify,
    setNotify
  }
}

export default useGlobalProvider
