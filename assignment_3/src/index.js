import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Col, Button } from 'react-bootstrap';


import BrowseView from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
      <BrowseView/>
    </div>
);
