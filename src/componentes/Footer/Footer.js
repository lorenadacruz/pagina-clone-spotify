import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="footer-placeholder"></div> {/* Espaço reservado para evitar sobreposição */}
            <div className="footer-container">
                <footer className="disclaimer-premium">
                    <div className="text">
                        <p className="disclaimer-premium__title">Testar o Premium de graça</p>
                        <p className="disclaimer-premium__subtitle">
                            Inscreva-se para curtir música ilimitada e podcasts só com alguns
                            anúncios. Não precisa de cartão de crédito.
                        </p>
                    </div>
                    <div className="button">
                        <button type="button">Inscreva-se grátis</button>
                    </div>
                </footer>
                <div className="footer-credit">
                    <p>Desenvolvido por <a href="https://github.com/lorenadacruz" target="_blank" rel="noopener noreferrer">Lorena da Cruz</a></p>
                </div>
            </div>
        </>
    );
};

export default Footer;




