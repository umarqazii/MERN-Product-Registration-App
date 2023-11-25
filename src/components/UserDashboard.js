import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


function UserDashboard() {


  return (
    <div className="App"  >
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to={"/userdashboard"} className="nav-link">
            <h2 style={{ color: "white" }}>User Dashboard</h2>
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item" style={{ border: "1px solid white", borderRadius: "15px", marginRight: "10px" }}>
                <Link to={"/UserCreateRequest"} className="nav-link">
                  Create Request
                </Link>
              </li>
              <li className="nav-item" style={{ border: "1px solid white", borderRadius: "15px", marginRight: "10px" }}>
                <Link to={"/UserShowRequests"} className="nav-link" >
                  Show Requests
                </Link>
              </li>
              <li className="nav-item" style={{ border: "1px solid white", borderRadius: "15px", marginRight: "10px" }}>
                <Link to={"/UserProductList"} className="nav-link">
                  Show Registered Products
                </Link>
              </li>
              <li className="nav-item" style={{ border: "1px solid white", borderRadius: "15px", marginRight: "10px" }}>
                <Link to={"/UserActivateLicense"} className="nav-link">
                  Activate License
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

export default UserDashboard