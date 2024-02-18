import React from 'react'
import Navbar from './navbar'
import BannerBackground from "../assets/home-banner-background.png"
import BannerImage from "../assets/home-banner-image.png"
import {FiArrowRight} from "react-icons/fi"


const home = () => {
    const handleRedirect = () => {
        window.location.href = 'https://maps.app.goo.gl/Km2Dp8khjijoTu8c6'
    }

  return (
    <div className='home-container'>
        <Navbar/> 
        <div className="home-banner-container">
            <div className="home-bannerImage-container">
                <img src={BannerBackground} alt="" />
            </div>
            <div className="home-text-section">
                <h1 className="primary-heading">Lo mejor en detalles para tus seres queridos</h1>
                <p className='primary-text'>
                En Ambarte, nuestro compromiso es ofrecerte no solo belleza, sino también calidad y sostenibilidad. Trabajamos directamente con minas y artesanos locales, asegurando prácticas éticas y apoyando a las comunidades que nos rodean.
                </p>
                <button className='secondary-button'onClick={handleRedirect}>
                    Encuentranos aqui <FiArrowRight/>
                </button>

            </div>

            <div className="home-image-container">
                <img src={BannerImage} alt="" />
            </div>
        </div>
    </div>
  )
}

export default home
