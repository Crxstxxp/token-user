import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Ingresa from '../src/pages/ingresar'
import Suscribir from '../src/pages/Suscribir'

function Routes() {
  return (
    <BrowserRouter>
    <Switch>
        <Route exact path='/' component={Ingresa} />
        <Route exact path='/Registro' component={Suscribir} />
    </Switch>
    </BrowserRouter>
  )
}

export default Routes
