import { useState } from "react";
import { IProduct } from "../../models/ProductTypes"
import { useCartContext } from "../../contexts/CartContext";

const ProductCard: React.FC<IProduct> = (product: IProduct) => {

    const cartContext = useCartContext();
    
    const [isAddToCart, setIsAddToCart] = useState(!cartContext.cartItems.some((item) => item.id === product.id));

    const handleAddToCart = (product: IProduct) => {
        isAddToCart? cartContext.addToCart(product) : cartContext.removeFromCart(product);
        setIsAddToCart((prevState: boolean) => {
            return !prevState;
        })
    }

    return (
            <div className="col-md-3 mb-3">
                <div className="card">
                    <img
                        src={product.image}
                        className="card-img-top"
                        alt="..."
                        height={280}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text text-truncate">{product.description}</p>
                        <p>USD {product.price}</p>
                    </div>
                    <div className="card-footer">
                        <button
                            type="button"
                            className="btn btn-primary btn-sm"
                            onClick={() => handleAddToCart(product)}
                        >
                            {isAddToCart? "Add to Cart" : "Remove from Cart"}
                        </button>
                        <button
                            type="button"
                            className="ms-2 btn btn-outline-danger btn-sm"
                        >
                            Favorite
                        </button>
                    </div>
                </div>
            </div>
    )
}

export default ProductCard