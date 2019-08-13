import React from 'react';
import './styles/HomeStyle.css';
import Carousel from '../components/carouselComponent';
import Make from '../components/makeComponent';


class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <Carousel />
                <Make/>

            </div>
        );
    }
}
export default Home;