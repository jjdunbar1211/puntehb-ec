import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'
import imgProd1 from '../images/mochi-1.jpg'
import './ItemListContainer.css'

const ItemListContainer = () => {

/*     const styleILC = {
        marginTop: 25,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        paddingInlineEnd: 40
    } */


    const [lista, setLista] = useState([]);  // estado inicial array vacío

    useEffect(() => {
        const promesa = new Promise((resolve,reject)=>{

            setTimeout(()=> {
    
                let promiseOK = true;  // para simular estados finales, fullfilled/rejected, de la promesa
                const productsList = [
                    {
                        id: 1,
                        title: "mochi-1 - PunteHB",
                        description: "bla bla bla",
                        price: 1000,
                        pictureUrl: imgProd1
                    }  
                ]
    
                promiseOK ? resolve(productsList) : reject("[ItemListContainer] Error al cargar los productos");
    
            }, 2000);
        });
        promesa
            .then(listaProductos =>{ 
                setLista(listaProductos);
                console.log("[ItemListContainer] - promesa fullfilled") 
            })
            .catch(error => console.log(error))
    },[])  // este efecto se ejecutara una única vez, dsp del render inicial

    return (
        <div>
            <ItemList list={lista} />
        </div>
    )
}



export default ItemListContainer