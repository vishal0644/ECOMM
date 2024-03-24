import React from 'react';
import logo from '../asset/Logo.png'

const Heading = () => {
    return (
        <div>
            <style>
                {`
                    body {
                        font-family: 'Lato', sans-serif;
                    }
                    /* If you want to apply Lato only to specific elements, you can do it like this */
                    .navbar-brand,
                    .nav-link {
                        font-family: 'Lato', sans-serif;
                    }

                      .navbar-brand img {
                        width: 85px;
                        height: 40px;
                        margin: 10px;
                        margin-left:20px;

                    }
                    /* Add gap between navbar items */
                    .navbar-nav .nav-item {
                        margin-left: 10px; /* Adjust the value as needed */
                        
                    }

                    .collapse{
                        margin-left:70px;
                    }
                    input{
                        outline : none;
                    }
                `}
            </style>
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <div className="navbar-brand"> {/* Added me-5 class for margin */}
                        <a class="navbar-brand" href="#">
                            <img src={logo} alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />

                        </a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto "> {/* Center align the ul */}
                            <li className="nav-item gap-3">
                                <a className="nav-link active" aria-current="page" href="#">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">ELECTRONICS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">BOOKS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">MOVIES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">MUSIC</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">CLOTHING</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">GAMES</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    MORE
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Heading;
