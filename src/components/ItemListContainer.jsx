import Productos from './Productos'
import { useState, useEffect } from 'react';
import customFetch from '../utils/CustomFetch';
import ArrayProducts from '../utils/Data';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        if (categoryId) {
            customFetch(2000, ArrayProducts.filter(item => item.categoryId == categoryId))
                .then(response => setDatos(response))
                .catch(err => console.log(err))
        }
        else {
            customFetch(2000, ArrayProducts)
                .then(response => setDatos(response))
                .catch(err => console.log(err))
        }
    }, [categoryId])

    return (
        <Productos datos={datos} />
    )
}

export default ItemListContainer;

