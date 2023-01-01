import { useContext } from "react";
import { CartContext } from './CartContext';
import { increment, serverTimestamp, doc, setDoc, collection, updateDoc } from "firebase/firestore";
import { db } from '../utils/firebaseConfig';

const Cart = () => {

    const { cartList, deleteThis, totalItem, totalCarrito, vaciarCarrito, sumaitemsEnCarrito } = useContext(CartContext);

    const ordenar = () => {
        const orden = {
            buyer: {
                name: 'Leo Messi',
                email: 'leo_messi@gmail.com',
                phone: '1199899899'
            },
            date: serverTimestamp(),
            items: cartList.map(item => ({
                cantidadItems: item.cantidadItems,
                cost: item.cost,
                id: item.id,
                name: item.name
            })),
            total: totalCarrito()
        }

        const orderToFirestore = async () => {
            const nuevaOrdenRef = doc(collection(db, "ordenes"))
            await setDoc(nuevaOrdenRef, orden);
            return nuevaOrdenRef
        }

        orderToFirestore()
            .then(response => {
                alert('Orden número ' + response.id + ' creada con éxito!')
                cartList.forEach(async (item) => {
                    const itemRef = doc(db, 'productos', item.id);
                    await updateDoc(itemRef, {
                        stock: increment(-item.cantidadItems)
                    });
                })
                vaciarCarrito()
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='contenedorCarrito'>
            <h1 className="tituloCarrito">Carrito  {
                sumaitemsEnCarrito() > 0
                    ? `( ${sumaitemsEnCarrito()} )`
                    : ""
            } </h1>
            <ul>
                {
                    cartList.length === 0
                        ? <p className="carritoVacioTxt">Tu carrito está vacío!</p>
                        : cartList.map(item =>
                            <li className="itemLista" key={item.id}>
                                <div className="itemListaProduct">
                                    <img className="imgRefCarrito" src={item.image} alt={item.name} />
                                    <div className="textListaCarrito">
                                        <h3 className="textProductoCarrito">{item.name}</h3>
                                        <h4 className="textProductoCarrito">${item.cost}</h4>
                                        <p className="txtp" >Cantidad: {item.cantidadItems}</p>
                                        <p className="txtp">Subtotal: ${totalItem(item.id)}</p>
                                    </div>
                                </div>
                                <button className="botonXCarrito" onClick={() => deleteThis(item.id)}>X</button>
                            </li>)
                }
            </ul>
            {cartList.length === 0
                ? <p> </p>
                : <div>
                    <h2 className="textTotalCarrito"> Total de orden: $ {totalCarrito()}</h2>
                    <div>
                        <button className="botonCart" onClick={() => vaciarCarrito()}>Eliminar todo</button>
                        <button className="botonCart" onClick={ordenar}>Finalizar compra</button>
                    </div>
                </div>}
        </div>
    )
}

export default Cart