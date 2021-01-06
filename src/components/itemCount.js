import React, {useState} from 'react'

const ItemCount = props => {
    
    const [cantidad, setCantidad] = useState(0)

    const { stock, nombreProducto, productImg, imgAlt} = props

    const incrementarCantidad = () => {
      if(cantidad <= stock -1){
        setCantidad(cantidad +1)
      }
    }
    const descrementarCantidad = () => {
        if(cantidad > 0) {
            setCantidad(cantidad -1)
        } else {
            console.log('No hay unidades de este producto en el carrito')
        }
    }
    const agregarAlCarrito = () => {
        if(stock - cantidad >= 0){
            setCantidad(0)  
            console.log(`[al carrito] PunteHB - 1: ${cantidad}` )  
        } else {
            console.log('Hubo algún error')
        }
    }

    return(
        <div className="d-flex mt-4 pt-4 justify-content-center border border-dark border-3">
            <div className="card col-3 card-product mb-4">
                <img src={productImg} className="card-img-top border-bottom border-2" alt={ imgAlt } />
                <div className="card-body">
                    <h2 className="card-title">{nombreProducto}</h2>
                    <p className="stock">Stock: {stock - cantidad}</p>  
                    <div className="productCounter row">
                        <button type="button" onClick={ descrementarCantidad } className="btn btn-outline-dark btn-lg col-3" disabled={cantidad === 0}>-</button>
                        <p className="col-4 displayCounter">{ cantidad }</p>
                        <button type="button" onClick={ incrementarCantidad } className="btn btn-outline-dark btn-lg col-3" disabled={stock - cantidad === 0}>+</button>

                        <button type="button" onClick={ agregarAlCarrito } className="btn btn-outline-dark btn-lg mt-1 " disabled={cantidad === 0}>Agregar al carrito</button>
                    </div>
                    
                </div>
            </div>
        </div>    
    )
}

export default ItemCount