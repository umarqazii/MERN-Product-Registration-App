import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function UserShowRequest() {
  const [userRequests, setUserRequests] = useState([]);

  useEffect(() => {
    // Fetch all requests when the component mounts
    axios.get('http://localhost:5000/user-own-requests')
      .then(response => setUserRequests(response.data))
      .catch(error => console.error(error));
  }, []);
  return (
    <div>
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
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="text-center" style={{ marginTop: '50px', color: 'white' }}>My Requests</h1>
            <table className="table" style={{ marginTop: '20px' }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgb(34, 145, 224)' }}>Customer ID</th>
                  <th scope="col" style={{ background: 'rgb(34, 145, 224)' }}>Product Name</th>
                  <th scope="col" style={{ background: 'rgb(34, 145, 224)' }}>Version</th>
                  <th scope="col" style={{ background: 'rgb(34, 145, 224)' }}>Description</th>
                </tr>
              </thead>
              <tbody>
                {userRequests.map((request, index) => (
                  <tr key={index}>
                    <th scope="row" style={{ background: 'rgb(160, 203, 235)' }}>{request.userId}</th>
                    <td style={{ background: 'rgb(160, 203, 235)' }}>{request.productName}</td>
                    <td style={{ background: 'rgb(160, 203, 235)' }}>{request.version}</td>
                    <td style={{ background: 'rgb(160, 203, 235)' }}>{request.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserShowRequest