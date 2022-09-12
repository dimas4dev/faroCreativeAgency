import React from 'react'

const Director = ({ name, job }) => {
    return (
        <section className="director">
            <article className="director__card">
                <h2 className="director__card__title">Jeison Bolivar</h2>
                <figure className="director__card__image">
                    <img src="https://faropsicopedagogia.org/wp-content/uploads/Anny-Jeisson.png" alt="" />
                    <figcaption>CEO Global</figcaption>
                </figure>
            </article>

        </section>
    )
}

export { Director }