import React from 'react';
import brand from '../images/Brand.png';
import { Link } from 'react-router-dom';
import './styles/NavbarStyle.css'
import product from '../images/product.svg';
import energy from '../images/energy.svg';
import liquor from '../images/liquor.svg';
import beer from '../images/beer.svg';
import cart from '../images/shopping-cart.svg';
import $ from 'jquery';


class Navbar extends React.Component {
    render() {
        return (


            <nav className="navbar navbar-expand-lg navbar-light " id='header'>

                <Link className="navbar-brand" to="#">
                    <img src={brand} id='brand' width="200" height="80" className="d-inline-block align-top" alt="IconDisk" />
                    <span className="menu-collapsed" ></span>

                </Link>


                <button className="navbar-toggler bg-warning btn btn-light" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon  "></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav " id='contItem'>
                        <li className="nav-item">
                            <Link className="nav-link" to="/"> <img src={product} width="35" />  PRODUCTOS  </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About"> <img src={liquor} width="35" /> LICORES </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Services"> <img src={beer} width="35" />  CERVEZAS </Link>
                        </li>


                        <li className="nav-item">
                            <Link className="nav-link" to="/Projects"> <img src={energy} width="35" /> BEBIDAS </Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src={cart} width="35" />
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">aqui hay una vuelta</a>
                                <a class="dropdown-item" href="#">aqui hay otra vuelta</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#"> y mas vueltas</a>
                            </div>
                        </li>

                        <div>

                        </div>

                    </ul>
                </div>

            </nav>


        );
    }
}

export default Navbar;