import React from 'react';
import './styles/FooterStyle.css'
import { Link } from 'react-router-dom';

import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import twitter from '../images/twitter.svg';

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <footer class="footer-area footer--light">
          <div class="footer-big">
            <div class="container">
              <div class="row">
                
                <div class="col-md-4 col-sm-4">
                  <div class="footer-widget">
                    <div class="footer-menu footer-menu--1">
                      <h4 class="footer-widget-title"> Aca Abajo va ir una Imagen</h4>
                      <ul>
                        <li>
                          <Link to="#">desde aqui </Link>
                        </li>
                        <li>
                          <Link to="#">pasando por aqui</Link>
                        </li>
                        <li>
                          <Link to="#">hasta aqui</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 col-sm-4">
                  <div class="footer-widget">
                    <div class="footer-menu">
                      <h4 class="footer-widget-title">Contactos</h4>
                      <ul>
                        <li>
                          <a href="https://api.whatsapp.com/send?phone=573206545520&text=Hola!%20Soy%20Daniel%20Pineda%20Enviame%20un%20Mensaje%20y%20Te%20Respondere%20Lo%20Mas%20Rapido%20Posible!%20" target='_blank'>(+57) 3013700505</a>
                        </li>
                        <li>
                          <a href="https://api.whatsapp.com/send?phone=573206545520&text=Hola!%20Soy%20Daniel%20Pineda%20Enviame%20un%20Mensaje%20y%20Te%20Respondere%20Lo%20Mas%20Rapido%20Posible!%20" target='_blank'>(+57) 3206545520</a>
                        </li>
                        <li>
                          <a href="https://mail.google.com/mail/u/0/#inbox" target='_blank'>ColombiaLicores@gmail.com</a>
                        </li>
                       
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 col-sm-4">
                  <div class="footer-widget">
                    <div class="footer-menu no-padding">
                      <h4 class="footer-widget-title">Buscanos</h4>
                      <ul>
                        <li>
                          <a href="https://www.facebook.com/Colombialicores" target='_blank'> <img src={facebook} width='24'/> Colombia Licores  </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/colombialicores/?igshid=1x0swfsfqqbny&fbclid=IwAR0Z04mK2hFacMaunlS7YcUcj4anu613BAhQClSbOo85pTJ4k-NK-sGWpdk" target='_blank'><img src={instagram} width='24'/> ColombiaLicores</a>
                        </li>
                        <li>
                          <a href="https://twitter.com/Colombi51535889?s=07&fbclid=IwAR0Po_V3-qH3arGGdA6Ui0_J3tcCUK3SRjTr0gUvcJ6P7FBJ_nUygRcJLTs"> <img src={twitter} width='24'/>@Colombia Licores</a>
                        </li>
                       
                      </ul>
                    </div>
                  </div>
                </div>


              </div>

            </div>

          </div>


          <div class="mini-footer">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="copyright-text">
                    <p>© 2019
                    Copyright All rights reserved. Created by
                     <Link to="#"> Licores Colombia</Link>
                    </p>
                  </div>

                  <div class="go_top">
                    <span class="icon-arrow-up"></span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;