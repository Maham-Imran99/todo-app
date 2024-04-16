import React, { Fragment } from 'react'
import NavBar from '../NavBar'

export const Layout = ({ children }) => <Fragment>
  <NavBar />
  {children}
</Fragment>

