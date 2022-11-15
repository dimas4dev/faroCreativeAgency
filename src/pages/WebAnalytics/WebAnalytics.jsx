import React from 'react'



const WebAnalytics = () => {
    return (
        <>
            <section className='WebAnalytics'>
                <div className='WebAnalytics__title'>
                    <h2 className='WebAnalytics__title--modifier'>Analítica Web</h2>

                    <ul className="WebAnalytics__title--modifierList">
                        <li>Configuración de Google Analytics</li>
                        <li>Reporte en Google Data Studio</li>
                        <li>Configuración de FB Pixel</li>
                        <li>Configuración de Google Tag Manager</li>
                    </ul>


                </div>
                <div className='WebAnalytics__description'>
                    <p>Mediante la Analítica Web podremos optimizar las campañas y estrategias para obtener los resultados esperados.</p>
                </div>
            </section>
        </>
    )
}

export { WebAnalytics }