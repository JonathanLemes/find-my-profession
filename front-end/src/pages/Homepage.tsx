import React, { useEffect, useState } from 'react';

import '../styles/pages/homepage.css';

import Navbar from '../components/Navbar';
import api from '../services/api';

interface Service {
    name: string,
    description: string,
    url: string
}

export default function Homepage() {
    const [services, setServices] = useState<Service[]>([]);

    useEffect(() => {
        api.get('/services').then((response) => {
            setServices(response.data);
        });
    }, []);

    return (
        <div className="App">
            <Navbar />
            <main role="main">
                <div className="jumbotron">
                    <div className="container">
                        <h1 className="display-3">Hello, world!</h1>
                        <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                        <p><a className="btn btn-primary btn-lg" href="/" role="button">Learn more &raquo;</a></p>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        {services.map((service, index) => {
                            return (
                                <div className="col-md-4" key={index}>
                                    <h2>{service.name}</h2>
                                    <p>{service.description}</p>
                                    <p><a className="btn btn-secondary" href="/" role="button">View details &raquo;</a></p>
                                </div>
                            )
                        })}
                    </div>

                    <hr />

                </div>

            </main>

            <footer className="container">
            <p>&copy; Company 2017-2020</p>
            </footer>
        </div>
    );
}