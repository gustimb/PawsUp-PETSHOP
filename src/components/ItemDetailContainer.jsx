import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react';
import customFetch from '../utils/CustomFetch';
import ArrayProducts from '../utils/Data';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [datos, setDatos] = useState([]);
    const { itemId } = useParams ();

    useEffect(() => {
        customFetch(2000, ArrayProducts.find (item => item.id == itemId))
            .then(response => setDatos(response))
            .catch(err => console.log(err))
    }, [itemId])

    return (
        <ItemDetail datos={datos} />
    )
}

export default ItemDetailContainer;

