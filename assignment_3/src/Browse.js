import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.css";

function Browse({cart, setCart, setViewer}) {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/products.json");
            const data = await response.json();
            setCatalog(data);
        }        

        fetchData();
    }, []);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (product) => {
        let itemFound = false;
        const updatedCart = cart.filter((cartItem) => {
            if (cartItem.id === product.id && !itemFound) {
                itemFound = true;
                return false;
            }
            return true;
        });
        if (itemFound) {
            setCart(updatedCart);
        }
    };

    const onCheckout = () => {
        setViewer(1);
    };

    const getQuantity = (product) => {
        let matchingProducts = cart.filter((cartItem) => cartItem.id === product.id);
        return matchingProducts.length;
    } 

    return (
        <div className="d-flex" style={{ height: "100vh" }}>        
            <div className="flex-grow-1 p-4">
                <h1>Store Catalog</h1>
                <button type="button" className="btn btn-primary" onClick={() => onCheckout()}>Checkout</button>
                <div className="row">
                    {catalog.map((product) => {
                        return (
                            <div key={product.id} className="col-md-4">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">
                                            <strong>Price:</strong> ${product.price} <br />
                                            <strong>Description:</strong> {product.description} <br />
                                        </p>
                                        <p>Quantity: {getQuantity(product)}</p>
                                        <button type="button" className="btn btn-secondary" onClick={() => addToCart(product)}>+</button>
                                        <button type="button" className="btn btn-secondary" onClick={() => removeFromCart(product)}>-</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Browse;