// About.js
import React from 'react';
import staffData from '../data/staffData';
import employee1 from '../images/employee-1.jpg';
import employee2 from '../images/employee-2.jpg';

const About = () => {
  return (
    <div className="container">
      <h1>About Us</h1>
      <div className="row">
        {staffData.map((employee) => (
          <div key={employee.id} className="col-md-6 col-lg-4">
            <div className="card mb-4 h-100">
              <img src={employee.id === 1 ? employee1 : employee2} alt={employee.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{employee.name}</h5>
                <p className="card-text">{employee.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
