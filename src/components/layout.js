import React from 'react';
import Navbar from './NavbarComponent';
import Footer from './FooterComponent';

class Layout extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <h1>Hola mundo</h1>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Layout;