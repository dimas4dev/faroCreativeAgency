import React from 'react'



const SocialMediaContent = () => {
    return (
        <>
            <section className='SocialMediaContent'>
                <div className='SocialMediaContent__title'>
                    <h2 className='SocialMediaContent__title--modifier'>Contenido para Social Media</h2>

                    <div className="SocialMediaContent__list">
                        <ul className="SocialMediaContent__title--modifierList">
                            <li>Campaña en YouTube</li>
                            <li>Campaña en Facebook o Instagram</li>
                            <li>Campaña en LinkedIn</li>
                            <li>Seguimiento Semanal</li>
                        </ul>
                    </div>


                </div>
                <div className='SocialMediaContent__description'>
                    <p className='SocialMediaContent__description--text'>Diseño de estrategia de contenidos para tu marca enfocado en tus objetivos
                        por medio de contenido estático o multimedia para Facebook, Instagram,
                        LinkedIn, Youtube, Pinterest, Twitter, Snapchat & TikTok.</p>
                </div>
            </section>
        </>
    )
}

export { SocialMediaContent }