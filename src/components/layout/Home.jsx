import React from 'react';
import './home.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
 
  return (
    <div className='home-head'> 
    
{/* <video autoplay muted loop id="myVideo">
  <source src={vid} type="video/mp4"/>
  Your browser does not support HTML5 video.
</video> */}
    <div className="home">
    
      <h1>Welcome to  Pokemon adoption Web</h1>
       
      <button type="button" class="btn buttonh btn-outline-success">
        <NavLink
          exact
            className="nav-link"
            to="/game"
          >
            Adopt
        </NavLink>
      </button>
    </div>
    </div>
  );
};

export default Home;
