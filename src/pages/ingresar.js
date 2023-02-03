import React from 'react';
import BarraSuperior from '../components/BarraSuperior';
import FormularioIngreso from '../components/FormularioIngreso';
import UserInfo from '../components/UserInfo';


function Ingresa() {
    return (
       <>
       <BarraSuperior />
       <FormularioIngreso />
       <UserInfo/>
       </>
    )
}

export default Ingresa;