import React from 'react'



const GoogleAds = () => {
    return (
        <>
            <section className='GoogleAds'>
                <div className='GoogleAds__title'>
                    <h2 className='GoogleAds__title--modifier'>GoogleAds</h2>

                    <ul className="GoogleAds__title--modifierList">
                        <li>Grupo de anuncios search</li>
                        <li>Campaña display</li>
                        <li>Campaña de video</li>
                        <li>Campaña de shopping</li>
                        <li>Campaña universal de aplicaciones</li>
                    </ul>


                </div>
                <div className='GoogleAds__description'>
                    <p>De acuerdo a tus objetivos podemos crear campañas de redirección a tu página web</p>
                </div>
            </section>
        </>
    )
}

export { GoogleAds }