import React from 'react';

const ContactPage = () => {
    // change the title of the page
    document.title = "Contact | Marvel App";

    return (
        <>
            <h1>Contacter nous</h1>
            <p>
            N'hésitez pas à nous contacter à l'adresse suivante <a href="mailto:marvelApp@gmail.com">marvelApp@gmail.com</a>
            </p>
        </>
    );
};

export default ContactPage;
