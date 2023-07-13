import React from 'react';
import servicesData from '../data/servicesData';

const Services = () => {
  return (
    <div className="container">
      <h1>Our Services</h1>
      <div className="row">
        {servicesData.map((service) => (
          <div key={service.id} className="col-md-6 col-lg-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{service.name}</h5>
                <p className="card-text">{service.description}</p>
                <p className="card-text">Price: ${service.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
