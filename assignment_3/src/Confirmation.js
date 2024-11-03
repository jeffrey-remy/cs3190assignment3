import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.css";
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';



function Confirmation({ cart, setViewer, data }) {


    console.log(data)

    let sum = 0;

    const returnToCart = () => {
        setViewer(1);
    }

    return (

        <div className="d-flex" style={{ height: "100vh" }}>
            <div className="flex-grow-1 p-4">
                <Button variant="secondary" onClick={() => {
                    console.log("pressed return");
                    returnToCart();
                }
                }>← Return</Button>{console.log("Testing Secondary")}
                <Table striped>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Description</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((product) => {
                            sum += product.price;
                            return (
                                <tr>
                                    <td><img
                                        src={product.image}
                                        alt={product.title}
                                        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                    /></td>
                                    {/* <td>{product.image}</td> */}
                                    {/* <td>{product.id}</td> */}
                                    <td>{product.title}</td>
                                    <td>{product.description}</td>
                                    <td>{product.price}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                    <tfoot>
                        <th></th>
                        <th>Total</th>
                        <th>{sum.toFixed(2)}</th>
                        <th>Total w/tax: {(sum*1.07).toFixed(2)}</th>
                    </tfoot>
                </Table>

                <h1 style={{ color: 'green' }}>Thanks for your buisness {data.fullName}, Order Confirmed!</h1>

                <div style={{ display: 'flex', gap: '1rem' }}>
                <Card style={{ width: '30rem' }}>
                    <Card.Body>Order Info
                        <ul>
                            <li><strong>Name: </strong>{data.fullName}</li>
                            <li><strong>Email: </strong>{data.email}</li>
                            <li><strong>Card Info: </strong>{data.creditCard}</li>
                            <li><strong>Address: </strong>{data.address}</li>
                            <li><strong>Apartment, studio, or floor: </strong>{data.address2}</li>
                            <li><strong>City: </strong>{data.city}</li>
                            <li><strong>zip:</strong> {data.zip}</li>
                        </ul>
                    </Card.Body>
                </Card>
                <Card style={{ width: '30rem' }}>
                    <Card.Body>Cost break down
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((product) => {
                                    sum += product.price;
                                    return (
                                        <tr>
                                            <td>{product.title}</td>
                                            <td>{product.price}</td>
                                        </tr>
                                    )
                                })}
                                <tr>
                                    <td>Tax</td>
                                    <td>7%</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <th>Total</th>
                                {/* <th>{sum.toFixed(2)}</th> */}
                                <th>{(sum * 1.07).toFixed(2)}</th>
                            </tfoot>
                        </Table>
                    </Card.Body>
                </Card>
                </div>

                


                
            </div>
        </div>
    )
}

export default Confirmation;