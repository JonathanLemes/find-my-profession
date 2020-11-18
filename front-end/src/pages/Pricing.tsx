import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

import '../styles/pages/pricing.css';

import Navbar from '../components/Navbar';
import { Link, useParams } from 'react-router-dom';
import api from '../services/api';

interface ServiceParams {
    url: string
}

interface Tier {
    name: string,
    price: number,
    id: number
}

interface Service {
    name: string,
    description: string,
    url: string
}

export default function Pricing() {
    const params = useParams<ServiceParams>();
    const [tiers, setTiers] = useState<Tier[]>([]);
    const [service, setService] = useState<Service>();

    useEffect(() => {
        api.get(params.url.charAt(0) === "/" ? (`/tier/service${params.url}`) : (`/tier/service/${params.url}`)).then((response) => {
            setTiers(response.data);
        });

        api.get(params.url.charAt(0) === "/" ? (`/service${params.url}`) : (`/service/${params.url}`)).then((response) => {
            setService(response.data);
        });
    }, [params.url]);

    if (tiers.length === 0 || !service) {
        return (
            <div className="Pricing">
                <Navbar />

                <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center loading">
                    <ReactLoading type={"spin"} color={'#6c757d'}/>
                </div>

                <div className="container">
                    <div className="card-deck mb-3 text-center">
                        <ReactLoading type={"spin"} color={'#6c757d'}/>
                    </div>
                </div>

                <footer className="pt-4 my-md-5 pt-md-5 border-top">
                    <div className="row">
                        <div className="col-12 col-md">
                            <small className="d-block mb-3 text-muted">&copy; 2017-2020</small>
                        </div>
                        <div className="col-6 col-md">
                            <h5>Features</h5>
                            <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="/">Cool stuff</a></li>
                            <li><a className="text-muted" href="/">Random feature</a></li>
                            <li><a className="text-muted" href="/">Team feature</a></li>
                            <li><a className="text-muted" href="/">Stuff for developers</a></li>
                            <li><a className="text-muted" href="/">Another one</a></li>
                            <li><a className="text-muted" href="/">Last time</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5>Resources</h5>
                            <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="/">Resource</a></li>
                            <li><a className="text-muted" href="/">Resource name</a></li>
                            <li><a className="text-muted" href="/">Another resource</a></li>
                            <li><a className="text-muted" href="/">Final resource</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5>About</h5>
                            <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="/">Team</a></li>
                            <li><a className="text-muted" href="/">Locations</a></li>
                            <li><a className="text-muted" href="/">Privacy</a></li>
                            <li><a className="text-muted" href="/">Terms</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }

    return (
        <div className="Pricing">
            <Navbar />

            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">{service && service.name}</h1>
                <p className="lead">{service && service.description}</p>
            </div>

            <div className="container">
                <div className="card-deck mb-3 text-center">
                    {tiers.map((tier, index) => {
                        return (
                            <div className="card mb-4 shadow-sm" key={index}>
                                <div className="card-header">
                                    <h4 className="my-0 font-weight-normal">{tier.name}</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title">${tier.price.toFixed(2)} <small className="text-muted">/ mo</small></h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>10 users included</li>
                                        <li>2 GB of storage</li>
                                        <li>Email support</li>
                                        <li>Help center access</li>
                                    </ul>
                                    <Link to={`/checkout/${tier.id}`}><button type="button" className="btn btn-lg btn-block btn-outline-primary">Buy service {tier.name}</button></Link>
                                </div>                        
                            </div>
                        )
                    })}
                </div>
            </div>

            <footer className="pt-4 my-md-5 pt-md-5 border-top">
                <div className="row">
                    <div className="col-12 col-md">
                        <small className="d-block mb-3 text-muted">&copy; 2017-2020</small>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Features</h5>
                        <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="/">Cool stuff</a></li>
                        <li><a className="text-muted" href="/">Random feature</a></li>
                        <li><a className="text-muted" href="/">Team feature</a></li>
                        <li><a className="text-muted" href="/">Stuff for developers</a></li>
                        <li><a className="text-muted" href="/">Another one</a></li>
                        <li><a className="text-muted" href="/">Last time</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Resources</h5>
                        <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="/">Resource</a></li>
                        <li><a className="text-muted" href="/">Resource name</a></li>
                        <li><a className="text-muted" href="/">Another resource</a></li>
                        <li><a className="text-muted" href="/">Final resource</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>About</h5>
                        <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="/">Team</a></li>
                        <li><a className="text-muted" href="/">Locations</a></li>
                        <li><a className="text-muted" href="/">Privacy</a></li>
                        <li><a className="text-muted" href="/">Terms</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}