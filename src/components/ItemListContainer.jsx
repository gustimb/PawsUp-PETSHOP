import Productos from './Productos'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../utils/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const fetchFirebase = async () => {
            let q;

            if (categoryId) {
                q = query(collection(db, "productos"), where('categoryId', '==', categoryId));
            } else {
                q = query(collection(db, "productos"));
            }

            const querySnapshot = await getDocs(q);
            const dataFromFirestore = querySnapshot.docs.map(item => (
                {
                    id: item.id,
                    ...item.data()
                }))
            return dataFromFirestore;
        }

        fetchFirebase()
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [categoryId])

    return (
        <Productos datos={datos} />
    )
}

export default ItemListContainer;

