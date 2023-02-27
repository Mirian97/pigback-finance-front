import { Grid, Typography } from '@mui/material'
import { useEffect } from 'react'
import overdueIcon from '../../assets/charge-overdue-icon.svg'
import paidIcon from '../../assets/charge-paid-icon.svg'
import expectedIcon from '../../assets/charge-pending-icon.svg'
import CardCharges from '../../components/CardCharges'
import Header from '../../components/Header'
import ModalEditUser from '../../components/Modals/ModalEditUser'
import ModalSuccessEditUser from '../../components/Modals/ModalSuccessEditUser'
import NavBar from '../../components/NavBar/index'
import TableResumeCharges from '../../components/Tables/TableResumeCharges'
import TableResumeClients from '../../components/Tables/TableResumeClients'
import useUser from '../../hooks/useUser'
import { CustomContainer } from '../../styles/containers'
import { CustomContentHome } from './style'

function Home() {
  const {
    overdueCharges,
    paidCharges,
    pendingCharges,
    upToDateClients,
    defaulterClients,
    loadUserProfile,
    loadDashboard
  } = useUser()

  useEffect(() => {
    loadUserProfile()
    loadDashboard()
  }, [])

  return (
    <CustomContainer disableGutters>
      <NavBar home />
      <CustomContentHome disableGutters>
        <Header>
          <Typography variant='h1' color='grey.200' mb={2}>
            Resumo das cobranças
          </Typography>
        </Header>
        <ModalEditUser />
        <ModalSuccessEditUser />
        <div className='charges-resume'>
          <Grid container spacing={3}>
            <Grid container item xs={12} spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <CardCharges
                  image={paidIcon}
                  title='Cobraças Pagas'
                  totalCharges={paidCharges.totalPaidCharges}
                  type='paid'
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <CardCharges
                  image={overdueIcon}
                  title='Cobraças Vencidas'
                  totalCharges={overdueCharges.totalOverdueCharges}
                  type='overdue'
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <CardCharges
                  image={expectedIcon}
                  title='Cobraças Previstas'
                  totalCharges={pendingCharges.totalPendingCharges}
                  type='expected'
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} spacing={4} mb={1}>
              <Grid item xs={12} sm={6} md={4}>
                <TableResumeCharges
                  title='Cobranças Vencidas'
                  type='overdue'
                  charges={overdueCharges.charges}
                  total={overdueCharges.amountOverdueCharges}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TableResumeCharges
                  title='Cobranças Previstas'
                  type='expected'
                  charges={pendingCharges.charges}
                  total={pendingCharges.amountPendingCharges}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <TableResumeCharges
                  title='Cobranças Pagas'
                  type='paid'
                  charges={paidCharges.charges}
                  total={paidCharges.amountPaidCharges}
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} spacing={4}>
              <Grid item xs={12}>
                <TableResumeClients
                  title='Clientes Inadimplentes'
                  type='overdue'
                  clients={defaulterClients.clients}
                  total={defaulterClients.totalDefaulterClients}
                />
              </Grid>
              <Grid item xs={12}>
                <TableResumeClients
                  title='Clientes em dia'
                  type='paid'
                  clients={upToDateClients.clients}
                  total={upToDateClients.totalUpToDateClients}
                />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </CustomContentHome>
    </CustomContainer>
  )
}
export default Home
