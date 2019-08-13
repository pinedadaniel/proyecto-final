import React from 'react';
import './styles/HomeStyle.css';
import Carousel from '../components/carouselComponent';


class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <Carousel />

            </div>
        );
    }
}
export default Home;