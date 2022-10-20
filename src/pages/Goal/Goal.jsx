import React from "react";

const Goal = () => {
  return (
    <>
      <section className="goal">
        <article className="goal__image">
          <figure>
            <img
              src="https://faropsicopedagogia.org/wp-content/uploads/Anny-Jeisson.png"
              alt="goal images"
            />
          </figure>
        </article>
        <article className="goal__description">
          <h2 className='goal__description--title'>Nuestra Meta</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </article>
      </section>
    </>
  );
};

export { Goal }
