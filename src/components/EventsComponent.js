import React, { Component } from 'react';
import './styles/EventStyle.css';
import img from '../images/image-1-1.png'

export default class Events extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="colr 12 events">
                        <h1> Eventos </h1>
                    </div>

                    <div className="row ">
                        <div class="col-lg-3 col-md-12 col-sm-12 card- card bg-dark text-white">
                            <img src={img} 
                            class="card-img" alt="..."  />
                            <div class="card-img-overlay">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional 
                                content. This content is a little bit longer.</p>
                                <p class="card-text">Last updated 3 mins ago</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-12 col-sm-12 card- card bg-dark text-white">
                            <img src={img}
                            class="card-img" alt="..." />
                            <div class="card-img-overlay">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional 
                                 content. This content is a little bit longer.</p>
                                <p class="card-text">Last updated 3 mins ago</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-12 col-sm-12 card- card bg-dark text-white">
                            <img src={img} 
                            class="card-img" alt="..." />
                            <div class="card-img-overlay">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional 
                                 content. This content is a little bit longer.</p>
                                <p class="card-text">Last updated 3 mins ago</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
