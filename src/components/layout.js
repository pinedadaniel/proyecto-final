import React from 'react';
import NavBar from '../components/NavbarComponent';
import Footer from '../components/FooterComponent';

import what from '../images/whatsapp.svg';

import { BrowserRouter, Route, Switch } from 'react-router-dom';


const Layout = (props) =>{
    return(
        <React.Fragment>
            <NavBar/>
           
            {props.children}
           <Footer/>
           <div class="btn-whatsapp">
<a href="https://api.whatsapp.com/send?phone=573206545520&text=Hola!%20Soy%20Daniel%20Pineda%20Enviame%20un%20Mensaje%20y%20Te%20Respondere%20Lo%20Mas%20Rapido%20Posible!%20" target="_blank">
<img src={what}  width='64' alt="btn-Whatsapp"/>
</a>
</div>
        </React.Fragment>
    )

}

export default Layout;