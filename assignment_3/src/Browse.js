import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, FormControl, InputGroup } from "react-bootstrap";

function Browse({cart, setCart, setViewer}) {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/products.json");
            const data = await response.json();
            setFilteredCatalog(data);
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

    // respond to new search input
    const handleSearch = () => {
        let input = document.getElementById("searchInput").value;
        const results = catalog.filter(product => {
            if (input === "") 
                return catalog;
            return product.title.toLowerCase().includes(input.toLowerCase());
        });
        // update filtered catalog to search results
        setFilteredCatalog(results);
    }


    return (
        <div className="d-flex m-4 justify-content-center">   
            <div className="mb-4">  
                <div className="d-flex justify-content-center">
                    <h1>Store Catalog</h1>  
                </div>
                {/* Top bar for searchbar and checkout button */}
                <nav className="navbar navbar-light bg-light ">
                    <div className="mx-3 my-2 form-group">
                        <form className="row g-3">
                            <div className="col-auto">
                                <input id="searchInput" className="form-control" type="text" placeholder="Search products"/>
                            </div>
                            <div className="col-auto">
                                <button type="button" className="btn btn-outline-success form-control" onClick={() => handleSearch()}>Search</button>
                            </div>
                        </form>
                    </div>
                    <div className="mx-3">
                        <button type="button" className="btn btn-primary" onClick={() => onCheckout()}>Checkout</button>
                    </div>
                </nav>
                <div className="row mt-2" style={{width: "75vw"}}>
                    {filteredCatalog.map((product) => {
                        return (
                            <div key={product.id} className="col-lg-3 col-md-4">
                                <div className="card mb-4" style={{height: "fit"}}>
                                    <img
                                        src={product.image}
                                        className="card-img-top"
                                        style={{ width: "10vw", height: "20vh", margin: "auto"}}
                                        alt={product.title}
                                    />
                                    <div className="card-body">
                                        <div class="row g-2">
                                            <h5 className="col-auto card-text" style={{backgroundColor: "green", color: "white", borderRadius: "40%"}}>${product.price}</h5>
                                            <h5 className="col-auto card-title">{product.title}</h5>
                                        </div>
                                        <p className="card-text">
                                            {product.description} <br />
                                        </p>
                                        <InputGroup>
                                            <input className="form-control" style={{backgroundColor : "lightgray"}} type="text" placeholder={getQuantity(product)} readOnly />
                                            <button type="button" className="btn btn-outline-success" onClick={() => addToCart(product)}>+</button>
                                            <button type="button" className="btn btn-outline-success" onClick={() => removeFromCart(product)}>-</button>
                                        </InputGroup>
                                        
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