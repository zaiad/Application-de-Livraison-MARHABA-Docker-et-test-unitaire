import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'; 

const NavBar = () => {
    const onClick = () => {
        axios.get('http://localhost:5050/api/auth/logout')
            .then(()=>{
                localStorage.clear();
                window.location = '/login'
            })
            .catch(()=>{
                console.log('Error')
            })
    }

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container-fluid ">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/ResetPassword' className="nav-link active" aria-current="page">ResetPassword</Link>
                        </li>
                        <li className="nav-item">
                            <button onClick={onClick} className="border-0 bg-body">Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar