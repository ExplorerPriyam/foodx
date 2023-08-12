import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark  bg-black" style={{background:"green"}}>
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic" to="/">FoodX</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
           <li className="nav-item">
          <Link className="nav-link active" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/createuser">SignUp</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navbar;