import React from 'react';
import ClientsFeedBack from '../ClientsFeedback/ClientsFeedBack';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import OurWorks from '../OurWorks/OurWorks';
import ProvidedServices from '../ProvidedServices/ProvidedServices';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ProvidedServices></ProvidedServices>
            <OurWorks></OurWorks>
            <ClientsFeedBack></ClientsFeedBack>
            <Contact></Contact>
        </div>
    );
};

export default Home;