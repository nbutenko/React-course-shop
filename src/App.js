import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import marketingIcon from "./images/marketing.png";
import translationsIcon from "./images/translations.png";
import trainingIcon from "./images/training.png";
import facebookIcon from "./images/facebook.png";
import twitterIcon from "./images/twitter.png";
import instagramIcon from "./images/instagram.png";
import {useState} from "react";
import OrderCall from "./OrderCall";
import OrderCallList from "./OrderCallList";

function App() {
    const siteName = 'Courses';
    const siteMotto = 'Courses for thus, loving to learn'
    const mainMenu = ['Main page', 'Products', 'Services', 'Our team', 'Contact'];
    const searchBarPlaceholder = 'Search...';
    const products = [
        {
            name: 'Good Girls Course',
            price: 200,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est ex, vehicula eget dapibus ac, malesuada sit amet metus. Suspendisse potenti. Phasellus fermentum elit in porttitor vestibulum. Curabitur tristique interdum ornare. Aliquam id risus id justo condimentum dictum. Ut congue nisi eu mi iaculis commodo. Nam in ornare ligula. Etiam ut massa et urna consequat sagittis sed vitae arcu. Praesent ut felis velit.',
        },
        {
            name: 'Driving Course',
            price: 500,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est ex, vehicula eget dapibus ac, malesuada sit amet metus. Suspendisse potenti. Phasellus fermentum elit in porttitor vestibulum. Curabitur tristique interdum ornare. Aliquam id risus id justo condimentum dictum. Ut congue nisi eu mi iaculis commodo. Nam in ornare ligula. Etiam ut massa et urna consequat sagittis sed vitae arcu. Praesent ut felis velit.',
        },
        {
            name: 'Young Fighters Course',
            price: 250,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est ex, vehicula eget dapibus ac, malesuada sit amet metus. Suspendisse potenti. Phasellus fermentum elit in porttitor vestibulum. Curabitur tristique interdum ornare. Aliquam id risus id justo condimentum dictum. Ut congue nisi eu mi iaculis commodo. Nam in ornare ligula. Etiam ut massa et urna consequat sagittis sed vitae arcu. Praesent ut felis velit.',
        },
        {
            name: 'Programming Course',
            price: 1000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est ex, vehicula eget dapibus ac, malesuada sit amet metus. Suspendisse potenti. Phasellus fermentum elit in porttitor vestibulum. Curabitur tristique interdum ornare. Aliquam id risus id justo condimentum dictum. Ut congue nisi eu mi iaculis commodo. Nam in ornare ligula. Etiam ut massa et urna consequat sagittis sed vitae arcu. Praesent ut felis velit.',
        }];
    const services = {
        marketing:
            {
                name: 'Marketing',
                image: marketingIcon
            },
        translations:
            {
                name: 'Translations',
                image: translationsIcon
            },
        training:
            {
                name: 'Training',
                image: trainingIcon
            }
    };

    const social = {
        facebook: {
            name: 'Facebook',
            image: facebookIcon,
            link: 'https://www.facebook.com/',
            alt: 'Facebook icon'
        },
        twitter: {
            name: 'Twitter',
            image: twitterIcon,
            link: 'https://www.twitter.com',
            alt: 'Twitter icon'
        },
        instagram: {
            name: 'Instagram',
            image: instagramIcon,
            link: 'https://www.instagram.com',
            alt: 'Twitter icon'
        }
    }
    const links = ['Policy', 'Cookies', 'Price List', 'Contact'];

    // Function for getting Phone Number in Order Call component (using call-back function)
    const [phoneNumbersList, setPhoneNumbersList] = useState([]);
    const getNumber = (phoneNumber) => {
        // spread operator - for copy an array
        const newArr = [...phoneNumbersList, phoneNumber];
        setPhoneNumbersList(newArr);
    }

    return (
      <div className="App">
        <Header name={siteName} motto={siteMotto} menu={mainMenu} search={searchBarPlaceholder}/>
        <Content products={products} services={services} getNumber={getNumber}/>
        <Footer social={social} links={links}/>
        <OrderCallList phoneNumbersList={phoneNumbersList}/>
      </div>
  );
}

export default App;
