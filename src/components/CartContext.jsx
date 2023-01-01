
import { useState, createContext } from "react";
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    const addToCart = (item, cantidadItems) => {
        let found = cartList.find(product => product.id === item.id);

        if (found === undefined) {
            setCartList([...cartList,
            {
                id: item.id,
                name: item.name,
                cantidadItems: cantidadItems,
                cost: item.price,
                image: item.image
            }
            ])
        }
        else {
            found.cantidadItems += cantidadItems;
            setCartList([...cartList])
        }
    }

    const deleteThis = (id) => {
        const modCartList = cartList.filter(item => item.id !== id);
        setCartList(modCartList);
    }

    const vaciarCarrito = () => {
        setCartList([])
    }

    const totalItem = (id) => {
        let index = cartList.map(item => item.id).indexOf(id);
        return cartList[index].cost * cartList[index].cantidadItems;
    }

    const totalCarrito = () => {
        let precioTotal = cartList.map(item => totalItem(item.id));
        return precioTotal.reduce((valorAnterior, valorActual) => valorAnterior + valorActual);
    }

    const sumaitemsEnCarrito = () => {
        let itemsCarrito = cartList.map(item => item.cantidadItems);
        return itemsCarrito.reduce((curr, accum) => curr + accum, 0);
    }

    return (
        <CartContext.Provider value={{ cartList, addToCart, deleteThis, totalItem, totalCarrito, vaciarCarrito, sumaitemsEnCarrito }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;