import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function AdminProductList() {

    const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    // Fetch all requests when the component mounts
    axios.get('http://localhost:5000/all-products')
      .then(response => setAllProducts(response.data))
      .catch(error => console.error(error));
  }, []);

    return (
        <>
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
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
            <h1 className="text-center" style={{ marginTop: '50px', color: 'white' }}>All Registered Products</h1>
          <table className="table" style={{ marginTop: '20px' }}>
            <thead>
              <tr>
                <th scope="col" style={{  background: 'rgb(34, 145, 224)' }}>Customer ID</th>
                <th scope="col" style={{  background: 'rgb(34, 145, 224)' }}>Product Name</th>
                <th scope="col" style={{  background: 'rgb(34, 145, 224)' }}>Version</th>
                <th scope="col" style={{  background: 'rgb(34, 145, 224)' }}>Description</th>
                <th scope="col" style={{  background: 'rgb(34, 145, 224)' }}>License Key</th>
                <th scope="col" style={{  background: 'rgb(34, 145, 224)' }}>Activation Status</th>
              </tr>
            </thead>
            <tbody>
              {allProducts.map((product, index) => (
                <tr key={index}>
                  <th scope="row" style={{  background: 'rgb(160, 203, 235)' }}>{product.userId}</th>
                  <td style={{  background: 'rgb(160, 203, 235)' }}>{product.productName}</td>
                  <td style={{  background: 'rgb(160, 203, 235)' }}>{product.version}</td>
                  <td style={{  background: 'rgb(160, 203, 235)' }}>{product.description}</td>
                  <td style={{  background: 'rgb(160, 203, 235)' }}>{product.licenseKey}</td>
                  <td style={{  background: 'rgb(160, 203, 235)' }}>{product.activationStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
    )
}

export default AdminProductList