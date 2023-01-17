import React from 'react'
import { NavBar } from '../../components/home/home.component'

const ErrorPage = ({error}) => {
  return (
    <>
        <NavBar/>
        {error == 404 ? <div><h1>404 Not Found</h1></div> : <h1>server Error</h1>}
    </>
    
  )
}

export default ErrorPage