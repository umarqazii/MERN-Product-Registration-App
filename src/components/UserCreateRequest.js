import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function UserCreateRequest() {
  const [productName, setProductName] = useState('');
  const [version, setVersion] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming you have an authentication token in localStorage

    axios.post(
      'http://localhost:5000/create-request',
      {
        productName: productName,
        version: version,
        description: description,
      }

    )
      .then((res) => {
        console.log(res);
        // Handle success, such as displaying a success message to the user
      })
      .catch((err) => {
        console.error(err);
        // Handle error, such as displaying an error message to the user
      });
  };

  return (
    <div>
      {/* Navbar (This will stay visible) */}
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

      {/* Form for creating a request */}
      <div className="container mt-5">
        <h1 style={{ textAlign: "center", marginTop: "50px", color: "white" }}>Create Request</h1>
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#f8f9fa', marginTop: '20px' }}>
  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
    Product Name:
    <input
      style={{ width: '100%', padding: '8px', marginBottom: '16px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}
      type="text"
      id="productName"
      value={productName}
      onChange={(e) => setProductName(e.target.value)}
      required
    />
  </label>
  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
    Version:
    <input
      style={{ width: '100%', padding: '8px', marginBottom: '16px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}
      type="text"
      id="version"
      value={version}
      onChange={(e) => setVersion(e.target.value)}
      required
    />
  </label>
  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
    Description:
    <textarea
      style={{ width: '100%', padding: '8px', marginBottom: '16px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}
      id="description"
      rows="3"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      required
    ></textarea>
  </label>
  <button
    style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
    type="submit"
  >
    Submit Request
  </button>
</form>

      </div>
    </div>
  );
}

export default UserCreateRequest;
