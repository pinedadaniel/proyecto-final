import React from 'react';
import './styles/HomeStyle.css';
import Carousel from '../components/carouselComponent';
import Make from  '../components/makeComponent';
import Events from '../components/EventsComponent';


class Home extends React.Component {
    render() {
        return (
            <div className="Home">
               <Carousel/>
               <Make/>
                <Events/>
            </div>
        );
    }
}
export default Home;