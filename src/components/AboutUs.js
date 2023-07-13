import React from 'react';
import staffData from '../data/staffData';

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      {staffData.map((employee) => (
        <div key={employee.id}>
          <h2>{employee.name}</h2>
          <p>{employee.bio}</p>
          <img src={employee.image} alt={employee.name} />
        </div>
      ))}
    </div>
  );
};

export default About;
