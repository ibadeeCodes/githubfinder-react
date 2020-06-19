import React, { Fragment } from 'react'

export const About = () => {
  return (
    <Fragment>
      <h1>About Us</h1>
      <p>Find users on github</p>
      <p>Version : 1.0.0</p>
      <a
        href='https://github.com/ibadeeCodes'
        className='btn btn-green btn-sm my-1'
      >
        Developed by Ibad
      </a>
    </Fragment>
  )
}

export default About
