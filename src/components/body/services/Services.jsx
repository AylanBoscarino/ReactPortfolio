import React from 'react';
import './style.css';
import services from './data';

export default function Services() {
    return (
        <section className="section" id="services">
            <div className="section-heading">
                <h3 className="title is-2">Services</h3>
                <h4 className="subtitle is-5">What can I do for you?</h4>
            </div>
            <br />
            <div className="container">
                <div className="columns is-multiline">
                    {services.map((service, index) => (
                        <div className="column is-half pull-left" key={index}>
                            <div className="box">
                                <div className="content">
                                    <h4 className="title is-5">
                                        {service.title}
                                    </h4>
                                    {service.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
