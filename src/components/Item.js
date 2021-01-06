import React from 'react'


const Item = ({ id, title, description, price, pictureUrl }) => {

    return (
/*         <div>
            <div>
                <img src={pictureUrl} alt=""/>
            </div>
            <div>
                <p>CODIGO PRODUCTO: {id}</p>
                <p>{title}</p>
                <p>{description}</p>
                <p>${price}</p>
            </div>
        </div> */
        
        <div className="card col-3 card-product mt-4 mb-2" >
            <img src={pictureUrl} className="card-img-top border-bottom border-2" alt="..." />
            <div className="card-body">
                <div className="d-flex justify-content-center">
                    <h5 className="card-title">{title} <span className="badge">{"$" + price}</span></h5>
                </div>
                <p className="card-text">{description}</p>
                {/* eslint-disable-next-line */}
                <a href="#" className="btn btn-item fw-bold">Ver detalle</a>
            </div>
        </div>
        
    )
}

export default Item
