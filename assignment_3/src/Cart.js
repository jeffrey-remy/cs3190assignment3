
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.css";
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import Confirmation from "./Confirmation";



function Cart({ cart, setData, setViewer }) {

    let sum = 0;

    const returnToBrowse = () => {
        setViewer(0);
    }


    const onSubmit = data => {
        console.log(data.fullName); // log all cart
        console.log(data.email);
        console.log(data.creditCard);
        console.log(data.address);
        console.log(data.address2);
        console.log(data.city);
        console.log(data.zip);
        setData(data);
        setViewer(2);
        // update hooks
        //setDataF(cart);
        //setViewer(1);
    }

    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <div className="d-flex" style={{ height: "100vh" }}>
            <div className="flex-grow-1 p-4">
                <Button variant="secondary" onClick={() => {
                    console.log("pressed return");
                    returnToBrowse();
                }
                }>← Return</Button>{console.log("Testing Secondary")}
                {/* <ListGroup>
                    <ListGroup.Item >
                        {cart.map((product) => {
                            return (
                                <div key={product.id}>
                                    {product.id}
                                    {product.title}
                                    {product.description}
                                    {product.price}
                                </div>
                            )
                        })}
                    </ListGroup.Item>
                </ListGroup> */}

                {/* TODO */}
                {/* Alter this to match products */}

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

                <h1>Payment Information</h1>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="row mb-3">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    {...register("fullName", { required: true })}
                                    placeholder="Full Name"
                                    className="form-control"
                                />
                                {errors.fullName && <p className="text-danger">Full Name is required.</p>}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                    placeholder="Email"
                                    className="form-control"
                                />
                                {errors.email && <p className="text-danger">Email is required.</p>}
                            </div>
                        </div>
                    </div>

                    <div className="form-group mb-3">
                        <label>Credit Card</label>
                        <input
                            {...register("creditCard", { required: true })}
                            placeholder="Credit Card"
                            className="form-control"
                        />
                        {errors.creditCard && <p className="text-danger">Credit Card is required.</p>}
                    </div>

                    <div className="form-group mb-3">
                        <label>Address</label>
                        <input
                            {...register("address", { required: true })}
                            placeholder="1234 Main St"
                            className="form-control"
                        />
                        {errors.address && <p className="text-danger">Address is required.</p>}
                    </div>

                    <div className="form-group mb-3">
                        <label>Address 2</label>
                        <input
                            {...register("address2")}
                            placeholder="Apartment, studio, or floor"
                            className="form-control"
                        />
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>City</label>
                                <input
                                    {...register("city", { required: true })}
                                    placeholder="City"
                                    className="form-control"
                                />
                                {errors.city && <p className="text-danger">City is required.</p>}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>State</label>
                                <input
                                    {...register("state", { required: true })}
                                    placeholder="State"
                                    className="form-control"
                                />
                                {errors.state && <p className="text-danger">State is required.</p>}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Zip</label>
                                <input
                                    {...register("zip", { 
                                        required: "Zip is required", 
                                        pattern: {
                                            value: /^\d{5}$/,
                                            message: "Zip must be exactly 5 digits"
                                        }
                                    })}
                                    placeholder="Zip"
                                    className="form-control"
                                />
                                {errors.zip && <p className="text-danger">Zip is required.</p>}
                            </div>
                        </div>
                    </div>

                    <Button variant="success" type="submit">Order</Button>

                </form>
            </div>
        </div>
    )
}

export default Cart;



