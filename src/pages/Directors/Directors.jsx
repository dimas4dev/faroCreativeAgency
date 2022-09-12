import { Director } from '@components/Director/Director'
import React from 'react'

const Directors = () => {

    const arrayDirectors = [{
        name: "Jeison Bolivar",
        job: "Ceo Global"

    },
    {
        name: "Mallerly Romero",
        job: "Directora de Cuentas"
    },
    {
        name: "Sebastian",
        job: "Copy Creativo"
    }]
    return (
        <>
            <section className="directors">
                <Director />
            </section>
        </>
    )
}

export { Directors }