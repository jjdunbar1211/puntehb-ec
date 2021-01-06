import React from 'react'
import Item from './Item'

const ItemList = ({ list }) => {
    return (
        <div className="d-flex justify-content-around mt-4 border border-black border-3">
            { list.map( item => <Item key={item.id} id={item.id} title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl} />) }
        </div>
    )
}

export default ItemList