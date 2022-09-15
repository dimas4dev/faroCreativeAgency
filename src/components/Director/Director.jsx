import React from 'react'

const Director = (props) => {
    const { Directors } = props
    return (
        <>
            {Directors.map((element, index) => (
                <section className="director" key={index}>
                    <article className="director__card">
                        <h2 className="director__card__title">{element.name}</h2>
                        <figure className="director__card__image">
                            <img src={element.urlImage} alt="" />
                            <figcaption className="director__card__image--job">CEO Global</figcaption>
                        </figure>
                    </article>
                </section>
            ))}
        </>

    )
}

export { Director }