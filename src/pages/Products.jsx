import React, { useEffect, useState } from "react";

import '../termstyles.css';
import "../styles.css";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc'); 
    const [filterCategory, setFilterCategory] = useState('');

    useEffect(() => {
        fetch('http://localhost:4000/products') 
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setFilterCategory(event.target.value);
    };

    const sortedProducts = products
        .sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        })
        .filter(product => filterCategory === '' || product.category === filterCategory);

    return (
        <div>
            <main id="terms">
                <h1>Products</h1>
                <div className="filter-options">
                    <select onChange={handleSortChange}>
                        <option value="asc">Price: Low to High</option>
                        <option value="desc">Price: High to Low</option>
                    </select>
                    <select onChange={handleCategoryChange}>
                        <option value="">All Categories</option>
                        {Array.from(new Set(products.map(p => p.category))).map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
                <div className="product-grid">
                   
                    {sortedProducts.map(product => (
                        <div key={product.product_id} className="product">
                            <h2>{product.name}</h2>
                            <img src={product.image_url} alt={product.name} />
                            <p>Category: {product.category}</p>
                            <p>{product.description}</p>
                            <p>${product.price}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
