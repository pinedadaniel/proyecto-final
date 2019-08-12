import React from 'react';
import './styles/FooterStyle.css'
import { Link } from 'react-router-dom';
import phone from '../images/phoneFooter.svg';
import location from '../images/locationFooter.svg';
import email from '../images/emailFooter.svg';
import cell from '../images/cellFooter.svg';
import cell2 from '../images/cell2Footer.svg';
import twitter from '../images/twitter.svg';
import whatsapp from '../images/whatsapp.png';
import copy from '../images/copyFooter.svg'


class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <footer class=" page-footer font-small blue pt-4">
                    <div class="container-fluid text-center text-md-left">
                        <div class="row">
                            <div class="col-md-4 mt-md-0 mt-3">
                                <h5 class="text-uppercase textFooterTittle">Programador Front-End</h5>
                                <p className='textFooterP'> ¿Trabajamos Juntos? Enviame un mensaje a cualquiera de mis redes para que podamos Desarrollar un Proyecto Juntos  :)  Te Espero!! </p>
                            </div>
                            <div className='col-1'>
                                <div className="vl">
                                </div>
                            </div>
                            <div class="col-md-3 mb-md-0 mb-3">
                                <h5 class="text-uppercase linkstittleFooter">contactos</h5>
                                <ul class="list-unstyled">
                                    <li>
                                        <a href="#!" class="linkFooter"><img src={phone} className='' width='20' /> 4993302</a>
                                    </li>
                                    <li>
                                        <a href="#" target='_blank' class="linkFooter"><img src={cell} className='' width='20' /> (+57) 3013700505</a>
                                    </li>
                                    <li>
                                        <a href="#" target='_blank' class="linkFooter"><img src={cell2} className='' width='20' /> (+57) 3206545520</a>
                                    </li>
                                    <li>
                                        <a href="#" target='_blank' class="linkFooter"><img src={email} className='' width='20' /> Danny.Systemyes@Gmail.com</a>
                                    </li>
                                    <li>
                                        <a href="#" target='_blank' class="linkFooter"><img src={location} className='' width='20' /> Localidad: Medellin/Antioquia  </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-1'>
                                <div className="vl">
                                </div>
                            </div>
                            <div class="col-md-3 mb-md-0 mb-3">
                                <h5 class="text-uppercase linkstittleFooter">Buscame</h5>
                                <ul class="list-unstyled">
                                    <li>
                                        <a href="#" target='_blank'><img src={twitter} className='iconRedes' width='32' /> @Daniel30953516</a>
                                    </li>
                                    <li>
                                        <a href="#" target='_blank'><img src={copy} className='iconRedes' width='32' /> Consulta los Derechos de Autor</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="footer-copyright text-center py-3 Copyright">© 2019 Copyright:
                <a href="#"> Licores colombia </a> All Rights Reserved
              </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default Footer;