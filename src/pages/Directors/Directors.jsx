import React from 'react'
import { Director } from '@components/Director/Director'

const Directors = () => {

    const arrayDirectors = [{
        name: "Jeison Bolivar",
        job: "Ceo Global",
        urlImage: "https://faropsicopedagogia.org/wp-content/uploads/Anny-Jeisson.png"

    },
    {
        name: "Mallerly Romero",
        job: "Directora de Cuentas",
        urlImage: "https://faropsicopedagogia.org/wp-content/uploads/Anny-Jeisson.png"

    },
    {
        name: "Sebastian",
        job: "Copy Creativo",
        urlImage: "https://faropsicopedagogia.org/wp-content/uploads/Anny-Jeisson.png"

    }]
    return (
        <>
            <section className="directors">
                <Director Directors={arrayDirectors} />
            </section>
        </>
    )
}

export { Directors }