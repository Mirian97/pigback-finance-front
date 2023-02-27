import { useState } from 'react'
import deleteIcon from '../../../assets/delete-icon.svg'
import editIcon from '../../../assets/edit-icon.svg'
import filterIcon from '../../../assets/filter-title-clients-icon.svg'
import useGlobal from '../../../hooks/useGlobal'
import useUser from '../../../hooks/useUser'
import { CustomAlignIconNameOfTable } from '../../../styles/aligners'
import {
  CustomEditDeleteOption,
  CustomTypographyEllipsis
} from '../../../styles/typography'
import { chargeClasses1 } from '../../../utils/constants'
import { handleFormatToMoney } from '../../../utils/formatters'
import { handleSearch } from '../../../utils/functions'
import { handleOrderById, handleOrderByName } from '../../../utils/sort'
import NotFound from '../../NotFound'
import { CustomTableCharges } from './style'

function TableCharges() {
  const [orderByName, setOrderByName] = useState(false)
  const [orderById, setOrderById] = useState(false)
  const { searchCharge, charges, setCharges, setCurrentCharge } = useUser()
  const { setOpenModalAddEditCharge, setOpenModalDeleteCharge, setOpenModalCharge } =
    useGlobal()

  function detailCharge(charge) {
    setCurrentCharge(charge)
    setOpenModalCharge(true)
  }

  function handleOpenModalEditCharge(charge, e) {
    e.stopPropagation()
    setCurrentCharge(charge)
    setOpenModalAddEditCharge(true)
  }

  function handleOpenModalDeleteCharge(charge, e) {
    e.stopPropagation()
    setCurrentCharge(charge)
    setOpenModalDeleteCharge(true)
  }

  const allCharges = handleSearch(searchCharge, charges)

  return (
    <CustomTableCharges elevation={0}>
      {allCharges.length ? (
        <table>
          <thead className='container-title-table'>
            <tr>
              <th>
                <CustomAlignIconNameOfTable>
                  <img
                    src={filterIcon}
                    alt='icone filtro'
                    onClick={() =>
                      handleOrderByName(charges, setCharges, orderByName, setOrderByName)
                    }
                  />
                  Cliente
                </CustomAlignIconNameOfTable>
              </th>
              <th>
                <CustomAlignIconNameOfTable>
                  <img
                    src={filterIcon}
                    alt='icone filtro'
                    onClick={() =>
                      handleOrderById(charges, setCharges, orderById, setOrderById)
                    }
                  />
                  Id da Cob.
                </CustomAlignIconNameOfTable>
              </th>
              <th>Valor</th>
              <th>Data de Venc.</th>
              <th>Status</th>
              <th className='descricao'>Descrição</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allCharges.map((charge) => (
              <tr
                className='table-body-row'
                key={charge.charge_id}
                onClick={() => detailCharge(charge)}
              >
                <td className='client-name'>
                  <CustomTypographyEllipsis>
                    {charge.client_name}
                  </CustomTypographyEllipsis>
                </td>
                <td>{charge.charge_id}</td>
                <td>{handleFormatToMoney(charge.amount)}</td>
                <td>{charge.due_date}</td>
                <td>
                  <span className={chargeClasses1[charge.status]}>{charge.status}</span>
                </td>
                <td>
                  <CustomTypographyEllipsis>
                    {charge.description}
                  </CustomTypographyEllipsis>
                </td>
                <td className='options-charges'>
                  <div className='edit-delete'>
                    <div onClick={(e) => handleOpenModalEditCharge(charge, e)}>
                      <img src={editIcon} alt='Ícone de edição de cobrança' />
                      <CustomEditDeleteOption color='grey.300'>
                        Editar
                      </CustomEditDeleteOption>
                    </div>
                    <div onClick={(e) => handleOpenModalDeleteCharge(charge, e)}>
                      <img src={deleteIcon} alt='Ícone de deletar cobrança' />
                      <CustomEditDeleteOption color='error'>
                        Exluir
                      </CustomEditDeleteOption>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <NotFound />
      )}
    </CustomTableCharges>
  )
}
export default TableCharges
