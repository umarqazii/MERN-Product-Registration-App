import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';



function AdminDashboard() {


  return (
    <div className="App"  >
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <Link to={"/admindashboard"} className="nav-link">
            <h2 style={{ color: 'white' }}>Admin Dashboard</h2>
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item" style={{ border: "1px solid white", borderRadius: "15px", marginRight: "10px" }}>
                <Link to={"/AdminAddProduct"} className="nav-link" style={{ color: 'white' }}>
                  Add Product
                </Link>
              </li>
              <li className="nav-item" style={{ border: "1px solid white", borderRadius: "15px", marginRight: "10px" }}>
                <Link to={"/AdminShowRequests"} className="nav-link" style={{ color: 'white' }}>
                  Show Requests
                </Link>
              </li>
              <li className="nav-item" style={{ border: "1px solid white", borderRadius: "15px", marginRight: "10px" }}>
                <Link to={"/AdminProductList"} className="nav-link" style={{ color: 'white' }}>
                  Product List
                </Link>
              </li>
              <li className="nav-item" style={{ border: "1px solid white", borderRadius: "15px", marginRight: "10px" }}>
                <Link to={"/"} className="nav-link" style={{ color: 'white' }}>
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="wrapper">

        </div>
      </div>
    </div>
  )
}

export default AdminDashboard