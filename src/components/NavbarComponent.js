import React from 'react';
//import brand from '../images/brand.png';
import { Link } from 'react-router-dom';
import './styles/NavbarStyle.css'
//import modal from './ModalComponent'
import Home from '../images/HomeNavbar.svg';
import icon from '../images/Brand.png';
import $ from 'jquery';


class Navbar extends React.Component {
    render() {
        return (


            <nav className="navbar navbar-expand-lg navbar-light " id='header'>

                <Link className="navbar-brand" to="#">
                    <img src={icon} id='brand' width="200" height="80" className="d-inline-block align-top" alt="IconDisk" />
                    <span className="menu-collapsed" ></span>

                </Link>


                <button className="navbar-toggler bg-warning btn btn-light" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon  "></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto" id='contItem'>
                        <li className="nav-item">
                            <Link className="nav-link" to="/"> <img src={Home} width="25"/>  INICIO  </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About"> <img src='#' /> SOBRE MI </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Services"> <img src='#'/>  SERVICIOS  </Link>
                        </li>


                        <li className="nav-item">
                            <Link className="nav-link" to="/Projects"> <img src='#'/> PROYECTOS  </Link>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-outline-light btn-contac text-warning" data-toggle="modal" data-target="#modalCompra1">CONTACTAME!</a>
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