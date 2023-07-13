import React from 'react';
import servicesData from '../data/servicesData';

const Services = () => {
  return (
    <div>
      <h1>Our Services</h1>
      {servicesData.map((service) => (
        <div key={service.id}>
          <h2>{service.name}</h2>
          <p>{service.description}</p>
          <p>Price: ${service.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
