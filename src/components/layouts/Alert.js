import React, { useEffect, useContext } from 'react'
import AlertContext from '../../context/alert/alertContext'

export const Alert = () => {
  const alertContext = useContext(AlertContext)
  const { alert, clearAlert } = alertContext

  return (
    alert !== null && (
      <div style={alertStyle} className={`alert alert-${alert.type}`}>
        <div>
          <i className='fas fa-info-circle'></i> &nbsp;
          {alert.msg}
        </div>
        <i
          className='far fa-times-circle'
          style={iconStyle}
          onClick={clearAlert}
        ></i>
      </div>
    )
  )
}

const alertStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}

const iconStyle = {
  cursor: 'pointer',
}

export default Alert
