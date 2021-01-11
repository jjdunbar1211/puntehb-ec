import React from 'react'

const ItemDetail = ({item}) => {

    const { title, price, pictureUrl, detail} = item
    console.log(pictureUrl)
        return (
            <div className="card mx-auto my-4 col-8 border border-black border-4" >
            <div className="row g-0">
              <div className="col-md-4">
                <img className="p-2" src={pictureUrl} alt="..." />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <hr />
                  <p className="card-text">{detail}</p>
                  <p className="card-text"><small className="text-muted">Últimas en stock! </small><span className="badge">{"$" + price}</span></p>
                </div>
              </div>
            </div>
          </div>
        )
    }
        



export default ItemDetail
