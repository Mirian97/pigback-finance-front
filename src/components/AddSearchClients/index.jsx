import { Typography } from '@mui/material'
import chargeIcon from '../../assets/charges-disabled-icon.svg'
import clientsIcon from '../../assets/clients-disabled-icon.svg'
import filterIcon from '../../assets/filter-icon.svg'
import plusIcon from '../../assets/plus-icon.svg'
import searchIcon from '../../assets/search-icon.svg'
import useGlobal from '../../hooks/useGlobal'
import useUser from '../../hooks/useUser'
import FilterClientsCharges from '../Filter'
import { CustomButtomAddClient, CustomSectionAddSearchClients } from './style'

function AddSearchClients({ title, clients }) {
  const { setOpenModalAddEditClient, setOpenFilter, openFilter } = useGlobal()
  const { searchClients, searchCharges, setSearchClient, setSearchCharge } = useUser()

  function handleChangeInputSearch(value) {
    clients ? setSearchClient(value) : setSearchCharge(value)
  }

  return (
    <CustomSectionAddSearchClients>
      <div className='people-text'>
        <img src={clients ? clientsIcon : chargeIcon} alt='Ícone de clientes' />
        <Typography variant='h1' color='grey.200'>
          {title}
        </Typography>
      </div>
      <div className='container-add-search'>
        {clients && (
          <CustomButtomAddClient
            color='primary'
            variant='contained'
            onClick={() => setOpenModalAddEditClient(true)}
          >
            <img className='plus-icon' src={plusIcon} alt='Ícone de soma' /> Adicionar
            Cliente
          </CustomButtomAddClient>
        )}
        <div className='container-search'>
          <img
            className='filter-icon'
            src={filterIcon}
            alt='Ícone de filtrar clientes'
            onClick={() => setOpenFilter(!openFilter)}
          />
          <FilterClientsCharges clients={clients ? true : false} />
          <input
            type='text'
            name='search'
            placeholder='Pesquise pelo nome do cliente'
            value={clients ? searchClients : searchCharges}
            onChange={(e) => handleChangeInputSearch(e.target.value)}
          />
          <img className='search-icon' src={searchIcon} alt='Ícone de pesquisa' />
        </div>
      </div>
    </CustomSectionAddSearchClients>
  )
}

export default AddSearchClients
