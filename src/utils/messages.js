import { toast } from 'react-toastify'

export function messageSuccess(messageContent) {
  toast.success(messageContent, {
    position: 'bottom-rigth',
    autoClose: 2500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    style: {
      fontSize: '1.4rem',
      fontWeight: 400,
      lineHeight: '1.9rem',
      borderRadius: '15px'
    }
  })
}

export function messageError(messageContent) {
  toast.error(messageContent, {
    position: 'bottom-right',
    autoClose: 2500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    style: {
      fontSize: '1.4rem',
      fontWeight: 400,
      lineHeight: '1.9rem',
      borderRadius: '15px'
    }
  })
}
