import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({greetings}) => {

    const styleILC = {
        marginTop: 25,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        paddingInlineEnd: 40
    }

    return (
        <div style={styleILC}>
            <ul>
                {
                    greetings.map((greeting,index) => 
                        <li class="item-list" key="index">
                            {greeting.language} - {greeting.content}
                        </li>
                    )
            }
            </ul>
        </div>
    )
}



export default ItemListContainer