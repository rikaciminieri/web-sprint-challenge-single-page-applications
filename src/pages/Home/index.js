import React from 'react'
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div>
      <p>Your favorite food, delivered while coding</p>
      <Link to="/pizza" id="order-pizza">Pizza?</Link>
    </div>
  );
};

export default Home;
