import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react';
import customFetch from '../utils/CustomFetch';
import ArrayProducts from '../utils/Data';

console.log(ArrayProducts[0])

const ItemDetailContainer = () => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        customFetch(2000, ArrayProducts[0])
            .then(response => setDatos(response))
            .catch(err => console.log(err))
    }, [])

    return (
        <ItemDetail datos={datos} />
    )
}

export default ItemDetailContainer;

