import React from 'react'



const WebDevelopment = () => {
    return (
        <>
            <section className='WebDevelopment'>
                <div className='WebDevelopment__title'>
                    <h2 className='WebDevelopment__title--modifier'>Desarrollo Web</h2>

                    <ul className="WebDevelopment__title--modifierList">
                        <li>Ajustes de contenido en el sitio web</li>
                        <li>Soporte técnico</li>
                        <li>Diseño de contenido para web</li>
                        <li>Creación de landing pages</li>
                    </ul>


                </div>
                <div className='WebDevelopment__description'>
                    <p>Te ayudamos con tareas como realizar ajustes de contenido, soporte técnico, elección e instalación de plugins, diseño de contenido, landing pages y muchas cosas más en tu sitio web.</p>
                </div>
            </section>
        </>
    )
}

export { WebDevelopment }