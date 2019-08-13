import React, { Component } from 'react';
import ensayo from '../images/ensayo.jpg';


export default class carousel extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src={ensayo} height="700" width="333" alt="First slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={ensayo} height="700" width="333" alt="Second slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={ensayo} height="700" width="333" alt="Third slide" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Anterior</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Siguiente</span>
                    </a>
                </div>
            </React.Fragment>
        )
    }
}
