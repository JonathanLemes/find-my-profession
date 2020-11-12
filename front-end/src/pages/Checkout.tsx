import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import api from '../services/api';

interface TierParams {
    id: string
}

interface Tier {
    name: string,
    price: number,
    id: number,
    service_name: string
}

export default function Checkout() {
    const params = useParams<TierParams>();
    const [tier, setTier] = useState<Tier>();

    useEffect(() => {
        api.get(`/tier/${params.id}`).then((response) => {
            setTier(response.data);
        });
    }, [params.id]);

    return (
        <div className="checkout">
            <Navbar />

            <div className="container">
                <div className="py-5 text-center">
                    <h2>Checkout form</h2>
                    <p className="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
                </div>

                <div className="row">
                    <div className="col-md-4 order-md-2 mb-4">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-muted">Your cart</span>
                        </h4>
                        <ul className="list-group mb-3">
                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 className="my-0">{tier && tier.service_name}</h6>
                                    <small className="text-muted">{tier && tier.name}</small>
                                </div>
                                <span className="text-muted">${tier?.price.toFixed(2)}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>${tier && tier.price.toFixed(2)}</strong>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-8 order-md-1">
                        <h4 className="mb-3">Billing address</h4>
                        <form className="needs-validation">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label>First name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="" value="" required />
                                    <div className="invalid-feedback">
                                    Valid first name is required.
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label>Last name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="" value="" required />
                                    <div className="invalid-feedback">
                                    Valid last name is required.
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label>Email</label>
                                <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                <div className="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                            </div>

                            <div className="mb-3">
                                <label>Address</label>
                                <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                                <div className="invalid-feedback">
                                    Please enter your shipping address.
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-5 mb-3">
                                    <label>Country</label>
                                    <select className="custom-select d-block w-100" id="country" required>
                                        <option value="">Choose...</option>
                                        <option>United States</option>
                                    </select>
                                    <div className="invalid-feedback">
                                    Please select a valid country.
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label>State</label>
                                    <select className="custom-select d-block w-100" id="state" required>
                                    <option value="">Choose...</option>
                                    <option>California</option>
                                    </select>
                                    <div className="invalid-feedback">
                                    Please provide a valid state.
                                    </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label>Zip</label>
                                    <input type="text" className="form-control" id="zip" placeholder="" required />
                                    <div className="invalid-feedback">
                                    Zip code required.
                                    </div>
                                </div>
                            </div>
                            <hr className="mb-4" />

                            <h4 className="mb-3">Payment: Paypal</h4>

                            <hr className="mb-4" />
                            <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
                        </form>
                    </div>
                </div>

                <footer className="my-5 pt-5 text-muted text-center text-small">
                    <p className="mb-1">&copy; 2017-2020 Company Name</p>
                    <ul className="list-inline">
                    <li className="list-inline-item"><a href="/">Privacy</a></li>
                    <li className="list-inline-item"><a href="/">Terms</a></li>
                    <li className="list-inline-item"><a href="/">Support</a></li>
                    </ul>
                </footer>
            </div>
        </div>
    );
}