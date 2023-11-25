import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


function UserActivateLicense() {
  const [productName, setProductName] = useState('');
  const [licenseKey, setLicenseKey] = useState('');

  const handleActivateLicense = async (e) => {
    e.preventDefault();

    try {
      // Assuming you have the authentication token in localStorage
      const token = localStorage.getItem('token');

      const response = await axios.post(
        'http://localhost:5000/activate-license',
        { productName, licenseKey },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
      // Handle success, such as displaying a success message to the user
    } catch (error) {
      console.error(error);
      // Handle error, such as displaying an error message to the user
    }
  };

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
      <h1 style={{ textAlign: "center", marginTop: "50px", color: "white" }}>Activate License</h1>
      <form onSubmit={handleActivateLicense} style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#f8f9fa', marginTop: "20px" }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
          Product Name:
          <input
            style={{ width: '100%', padding: '8px', marginBottom: '16px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </label>
        <br />
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
          License Key:
          <input
            style={{ width: '100%', padding: '8px', marginBottom: '16px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}
            type="text"
            value={licenseKey}
            onChange={(e) => setLicenseKey(e.target.value)}
          />
        </label>
        <br />
        <button
          style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          type="submit"
        >
          Activate License
        </button>
      </form>
    </div>
  )
}

export default UserActivateLicense