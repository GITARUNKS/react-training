import React, { useEffect, useState } from 'react';
import { IProduct } from '../../models/ProductTypes';
import axios from 'axios';
import ProductCard from './ProductCard';

const ProductsPage: React.FC = () => {

    const [products, setProducts] = useState<IProduct[]>([]);
    const getProducts = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products`);
            setProducts(response.data);
        } catch (err) {
            console.log(err);
        } finally {
            //setIsLoading(false);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <h1>Products</h1>

            <div className="row">
                {products && products.map((product) => {
                    return (
                        <ProductCard
                            key = {product.id}
                            {...product}
                            >
                        </ProductCard>
                    )
                })}

            </div>
        </div>
    );
}

export default ProductsPage