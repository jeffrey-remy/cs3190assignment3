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

    return (
        <div className="d-flex" style={{ height: "100vh" }}>        
            <div className="flex-grow-1 p-4">
                <h1>Store Catalog</h1>
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