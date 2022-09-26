import React from "react"

const CompanyCard = (props) => {

    const { companies } = props

    return (
        <>
            {companies.map((element, index) =>
                <a key={index} href={element.url} target="_blank">
                    <article className='companyCard'>
                        <figure className='companyCard__image'>
                            <img className="companyCard__image--modifier" src={element.image} alt={`${element.image} image`} />
                        </figure>
                    </article>
                </a>
            )
            }

        </>
    )
}

export { CompanyCard }