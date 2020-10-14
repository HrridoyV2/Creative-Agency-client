import React from 'react';
import { Link } from 'react-router-dom';
import brandLogo from '../../../images/logos/logo.png'
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
  <Link><img src={brandLogo} style={{height:"50px"}} alt="BrandLogo"  class="navbar-brand img-fluid"/></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <Link to="/home" class="nav-link">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link to="/" class="nav-link">Our Portfolio</Link>
      </li>
      <li class="nav-item">
        <Link to="/" class="nav-link">Our Team</Link>
      </li>
      <li class="nav-item">
        <Link to="/" class="nav-link">Contact us</Link>
      </li>
      <li class="nav-item">
        <Link to="/" class="nav-link"><button className="btn btn-dark px-5">Login</button></Link>
      </li>
    </ul>
  </div>
</nav>
    );
};

export default Navbar;