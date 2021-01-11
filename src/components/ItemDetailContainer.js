import React, { useEffect, useState} from 'react'
import ItemDetail from './ItemDetail';
import imgProd1 from '../images/mochi-1.jpg'

const ItemDetailContainer = () => {

    const [item, setItem ] = useState();

    useEffect(() => {

        const itemPromise = new Promise((resolve,reject)=>{

            let promesaOK = true;
    
            setTimeout(()=> {
    
                const product = 
                    {
                        id: 1,
                        title: "mochi-1 - PunteHB",
                        description: "bla bla bla",
                        detail: 'la mejor mochila del mundo ... #HANDMADE',
                        price: 1250,
                        pictureUrl: imgProd1
                    }  
    
                promesaOK ? resolve(product) : reject("[itemDetailContainer] fallo promesa");
    
            }, 2000);
        });

        itemPromise
        .then(item => {
            setItem(item)
            console.log(item) }
            )
        .catch(e => console.log(e))
    
    }, []);

    return (
        <div >
            { 
                item ? <ItemDetail item={item} /> : <h2 className="text-center mt-4 py-2 border border-dark border-3"> Loading...  </h2>
            }
        </div>
    )
}

export default ItemDetailContainer
