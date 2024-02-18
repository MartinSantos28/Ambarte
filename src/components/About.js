import React from 'react'
import AboutBackground from "../assets/about-background.png"
import AboutBackgroundImage from "../assets/about-background-image.png"
import { BsFillPlayCircleFill } from 'react-icons/bs'

const About = () => {
    const handleRedirect = () => {
        window.location.href = 'https://wa.me/9681189874'
    }
  return (
    <div className='about-section-container'id='about'>
        <div className="about-background-image-container">
            <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
            <img src= {AboutBackgroundImage} alt="" />
        </div>
        <div className="about-section-text-container">
            <p className='primary-subheading'>
                Acerca de Ambarte
            </p>
            <h1 className="primary-heading">
                ¿Quienes somos en Ambarte?
            </h1>
            <p className="primary-text">
            Bienvenidos a Ambarte, el corazón palpitante del ámbar mexicano en Chiapas. Nuestra misión es traer a tu vida la belleza inigualable y la historia milenaria del ámbar, directamente desde las profundidades de la tierra en San Cristóbal de las Casas. En Ambarte, no solo vendemos joyas y artefactos de ámbar; compartimos un legado.
            </p>
            <p className="primary-text">
                
            </p>
            <div className="about-buttons-container">
                <button className="secondary-button" onClick={handleRedirect}>Contactanos</button>
                
            </div>
        </div>
    </div>
  )
}

export default About
