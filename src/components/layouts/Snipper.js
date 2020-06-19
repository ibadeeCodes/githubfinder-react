import React, { Fragment } from 'react'
import spinner from './spinner.gif'

export const Snipper = () => (
  <Fragment>
    <img
      src={spinner}
      alt='loading..'
      style={{
        width: '200px',
        display: 'block',
        margin: '20% auto',
        alignItems: 'center',
      }}
    />
  </Fragment>
)

export default Snipper
