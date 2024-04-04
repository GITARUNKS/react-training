import { createContext, useContext, useState } from "react";
import { IProduct } from "../models/ProductTypes";

interface CartContextProps {
    cartItems: IProduct[];
    addToCart: (product: IProduct) => void;
    removeFromCart: (product: IProduct) => void;
}

// Step 1 : Create Context using createContext()
const CartContext = createContext<CartContextProps | undefined>(undefined);

// Step 2 : Create a Provider for the context created
// children is the prop here of type React.ReactNode.
// children is nothing but <Header> <Footer> <Routes> ReactNodes
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    //if we want cart data save in rest api
    // try connecting to rest api using useEffect hook using axios
    const [cartItems, setCartItems] = useState<IProduct[]>([]);

    // The following fn is for the publisher to set data
    const addToCart = ((product : IProduct) => {
        setCartItems([...cartItems, product]);
    });

    const removeFromCart = ((product : IProduct) => {
        const productId = product.id;
        setCartItems(cartItems.filter(item => item.id !== productId));
    });

    return (
        <CartContext.Provider value={{ cartItems: cartItems, addToCart: addToCart, removeFromCart: removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Step 3 : Create a custom user hook 
// Subscribe to the context data in the desired component using useContext()
// useCart() will be called in <Header> as well as <ProductsPage> in this case.
export const useCartContext = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error(
            "useCart custom hook  must be used within CartProvider component's descendents"
        );
    }

    return context;
}