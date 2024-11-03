import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Col, Button } from 'react-bootstrap';

import Browse from './Browse';
import Cart from './Cart';
import Confirmation from './Confirmation';

function App() {
    const [cart, setCart] = useState([]);
    const [viewer, setViewer] = useState(0);
    const [data,setData] = useState([]);

    return (
        <div>
            {viewer === 0 && <Browse cart={cart} setCart={setCart} setViewer={setViewer}/>}
            {viewer === 1 && <Cart cart={cart} setData={setData} setViewer={setViewer}/>}
            {viewer === 2 && <Confirmation cart={cart} setViewer={setViewer} data={data}/>}
        </div>
    )
}

export default App;
