import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Col, Button } from 'react-bootstrap';

import Browse from './Browse';

function App() {
    const [cart, setCart] = useState([]);
    const [viewer, setViewer] = useState(0);

    return (
        <div>
            {viewer === 0 && <Browse cart={cart} setCart={setCart} setViewer={setViewer}/>}
        </div>
    )
}

export default App;
