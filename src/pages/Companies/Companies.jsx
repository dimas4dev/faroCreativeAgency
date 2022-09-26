import React from "react"

import { CompanyCard } from '@components/CompanyCard/CompanyCard'

import company from "../../assets/images/companyLogos/santiamen.png"

const Companies = () => {
    const companies = [{
        name: "Santiamen",
        url: "https://santiamendotacioneseinsumos.com/",
        image: company
    },
    {
        name: "Santiamen",
        url: "https://santiamendotacioneseinsumos.com/",
        image: company
    },
    {
        name: "Santiamen",
        url: "https://santiamendotacioneseinsumos.com/",
        image: company
    },
    {
        name: "Santiamen",
        url: "https://santiamendotacioneseinsumos.com/",
        image: company
    },
    {
        name: "Santiamen",
        url: "https://santiamendotacioneseinsumos.com/",
        image: company
    },
    {
        name: "Santiamen",
        url: "https://santiamendotacioneseinsumos.com/",
        image: company
    },
    {
        name: "Santiamen",
        url: "https://santiamendotacioneseinsumos.com/",
        image: company
    },
    {
        name: "Santiamen",
        url: "https://santiamendotacioneseinsumos.com/",
        image: company
    },
    {
        name: "Santiamen",
        url: "https://santiamendotacioneseinsumos.com/",
        image: company
    }]
    return (
        <>
            <section className='companiesContainer'>
                <div className='companiesContainer__title'>
                    <h2 className='companiesContainer__title--modifier'>Los que han creído en nosotros</h2>
                </div>
                <div className='companiesContainer__images'>
                    <CompanyCard companies={companies} />
                </div>
            </section>
        </>)
}

export { Companies }