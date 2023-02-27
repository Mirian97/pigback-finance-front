import CloseIcon from '@mui/icons-material/Close'
import { Snackbar } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import useGlobal from '../../hooks/useGlobal.js'
import { CustomAlert } from './style.js'

function Toast() {
  const { notify, setNotify } = useGlobal()

  function handleClose(reason) {
    if (reason === 'clickaway') {
      return
    }
    setNotify({ ...notify, open: false })
  }

  return (
    <Snackbar
      mb={9}
      open={notify.open}
      autoHideDuration={2000}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      onClose={handleClose}
    >
      <CustomAlert
        onClose={handleClose}
        severity={notify.severity}
        variant='filled'
        color={notify.color}
        action={
          <IconButton
            aria-label='close'
            color='inherit'
            size='small'
            onClick={handleClose}
          >
            <CloseIcon fontSize='inherit' />
          </IconButton>
        }
      >
        <span>{notify.message}</span>
      </CustomAlert>
    </Snackbar>
  )
}

export default Toast
