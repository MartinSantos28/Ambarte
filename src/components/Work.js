import React from 'react'
import PickMeals from "../assets/pick-meals-image.png"
import ChooseMeals from "../assets/choose-image.png"
import DeliveryMeals from "../assets/delivery-image.png"
const Work = () => {
    const workInfoData=[
        {
            image : PickMeals,
            title : "Anillos",
            Text : "Confeccionados con mano experta, nuestros anillos encapsulan la mística del ámbar chiapaneco, ofreciendo una pieza central de resplandeciente resina fosilizada que es tan única como quien la lleva."
        },
        {
            image : ChooseMeals,
            title : "Collares",
            Text :"Nuestros collares están meticulosamente elaborados para resaltar la belleza singular de cada gema,seleccionada por su calidad superior y su coloración rica y cálida que captura la luz y la mirada."
        },
        {
            image : DeliveryMeals,
            title : "Pulseras",
            Text : "Nuestras pulseras están cuidadosamente diseñadas para resaltar la belleza natural y la calidez del ámbar, que ha sido formado a lo largo de eones y ahora se presenta en una variedad de tonos que van desde el suave amarillo hasta el intenso naranja."
        }
    ]
  return (
    <div className='work-section-wrapper' id='products'>
        <div className="work-section-top">
            <p className="primary-heading">Nuestros productos</p>
            <h1 className="primary-subheading">100% hecho con manos chiapanecas</h1>
            <p className="primary-text">En Ambarte, cada pieza de ámbar es una obra de arte única, moldeada por la naturaleza a lo largo de millones de años. Nuestra colección incluye desde joyería contemporánea hasta piezas de ámbar en bruto, perfectas para coleccionistas y amantes de la naturaleza. </p>
        </div>
        <div className="work-section-bottom">
            {workInfoData.map((data) => (
                <div className="work-section-info">
                    <div className="info-boxes-img-container">
                        <img src={data.image} alt="" />
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.Text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Work
