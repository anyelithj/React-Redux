import React from 'react'
import ListarProducto from '../components/ListarProductos'
import Producto from '../components/Producto'

const AppRedux = () => {
  return (
    <div className="container text-center">
    <div className="row mt-3">
      <div className="col-md-6">
        <Producto />
      </div>
      <div className="col-md-6">
        <ListarProducto />
      </div>
    </div>
  </div>
  )
}

export default AppRedux
