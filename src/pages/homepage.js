import React from 'react';
import Header from '../components/header/header'
import Body from '../components/body/body';
import Footer from '../components/footer/footer'
import ScrollToTop from '../hooks/scroll_to_top'
function HomePage() {

    return (
        <div>
            <ScrollToTop />
            <Header />
            <Body />
            <Footer />
        </div>

    );
}

export default HomePage;