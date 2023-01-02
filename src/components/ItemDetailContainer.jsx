import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../utils/firebaseConfig';

const ItemDetailContainer = () => {
    const [datos, setDatos] = useState([]);
    const { itemId } = useParams();

    useEffect(() => {

        const fetchOneFromFirestore = async () => {

            const docRef = doc(db, "productos", itemId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                return {
                    id: itemId,
                    ...docSnap.data()
                }

            } else {
                console.log("No such document!");
            }
        }

        fetchOneFromFirestore()
            .then(response => setDatos(response))
            .catch(err => console.log(err))
    }, [])

    return (
        <ItemDetail datos={datos}
        />
    )
}

export default ItemDetailContainer;

