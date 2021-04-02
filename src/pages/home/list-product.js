import { Link } from "react-router-dom";
import { useState } from "react";

const ListProducts = () => {
    const [product, setProductList] = useState(() => {
        const initializeProductList = {
            data: [
                {
                    id: 1,
                    name: 'TV Sony'
                },
                {
                    id: 2,
                    name: 'TV Samsung',
                    sale: 50
                },
                {
                    id: 3,
                    name: 'TV LG'
                }
            ]
        }
        return initializeProductList;
    });

    const productList = product.data.length > 0 && product.data.map(item => {
        return (<li key={item.id}>
            <Link to={{
                pathname: `/product/${item.id}`,
                state: item, search: `${item.sale ? `?deal = ${item.sale}` : ''}`
            }}
                classname="navlink">{item.name}</Link>
        </li>)
    });
    return (
        <div className="App" style={{ textAlign: 'Center' }}>
            <p>List Product</p>
            <ul style={{ listStyle: 'none' }}>{productList}</ul>
        </div>
    );
};

export default ListProducts;