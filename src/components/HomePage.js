import React from 'react';
import splashPhoto from '../images/splash-photo.jpg';

const Home = () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to Shampoodle's Dog Grooming</h1>
        <p className="lead">Hours: Monday to Friday, 9:00 AM - 6:00 PM</p>
        <p className="lead">Location: 123 Main Street, City, State</p>
      </div>
      <img src={splashPhoto} alt="Splash" className="img-fluid" />
    </div>
  );
};

export default Home;
