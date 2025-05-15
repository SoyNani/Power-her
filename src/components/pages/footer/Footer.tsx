import styles from './Footer.module.scss'

const Footer: React.FC = () => {
    return(
        <>
            <footer className={styles.footerPrincipal}>
                <div className={styles.footer}>
                    <div className={styles.footer__container}>
                        <article className={styles.footer__article}>
                            <h2>Descargas</h2>
                            <ul>
                                <li>
                                    <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                                        <figure className={styles.footer__figure}>
                                            <img src="https://project-power-her-images.s3.us-east-1.amazonaws.com/inspirationIcon.svg" alt="Descargar desde PlayStore" />
                                            <figcaption>PlayStore</figcaption>
                                        </figure>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                                        <figure className={styles.footer__figure}>
                                            <img src="https://project-power-her-images.s3.us-east-1.amazonaws.com/inspirationIcon.svg" alt="Descargar desde AppStore" />
                                            <figcaption>AppStore</figcaption>
                                        </figure>
                                    </a>
                                </li>
                            </ul>
                        </article>
                        
                        <article className={styles.footer__article}>
                            <h2>Ayuda y Recursos</h2>
                            <ul>
                                <li>
                                    <a href=" ">
                                        <figure>
                                            <p>Preguntas frecuentes</p>
                                        </figure>
                                    </a>
                                </li>
                                <li>
                                    <a href=" ">
                                        <figure>
                                            <p>Centro de ayuda</p>
                                        </figure>
                                    </a>
                                </li>
                                <li>
                                    <a href=" ">
                                        <figure>
                                            <p>Blog comunitario</p>
                                        </figure>
                                    </a>
                                </li>
                            </ul>
                        </article>

                        <article className={styles.footer__article}>
                            <h2>Explora</h2>
                            <ul>
                                <li>
                                    <a href=" ">
                                        <figure>
                                            <p>Historias inspiradoras</p>
                                        </figure>
                                    </a>
                                </li>
                                <li>
                                    <a href=" ">
                                        <figure>
                                            <p>Testimonios de usuarias</p>
                                        </figure>
                                    </a>
                                </li>
                                <li>
                                    <a href=" ">
                                        <figure>
                                            <p>Eventos y novedades</p>
                                        </figure>
                                    </a>
                                </li>
                            </ul>
                        </article>

                        <article className={styles.footer__article}>
                            <ul>
                                <li>
                                    <a href="#">
                                        <figure className={styles.footer__figure}>
                                            <img src="https://project-power-her-images.s3.us-east-1.amazonaws.com/ig.svg" alt="Descargar desde PlayStore" />
                                            <figcaption>itsPowerHer</figcaption>
                                        </figure>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <figure className={styles.footer__figure}>
                                            <img src="https://project-power-her-images.s3.us-east-1.amazonaws.com/x.svg" alt="Descargar desde AppStore" />
                                            <figcaption>itsPowerHer</figcaption>
                                        </figure>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <figure className={styles.footer__figure}>
                                            <img src="https://project-power-her-images.s3.us-east-1.amazonaws.com/meta.svg" alt="Descargar desde AppStore" />
                                            <figcaption> Power Her Oficial</figcaption>
                                        </figure>
                                    </a>
                                </li>
                            </ul>
                        </article>
                    </div>
                </div>
                <div className={styles.footer__bottom}>
                    <h2>PowerHer <span>    |    </span></h2>
                    <h3>Empodera tu voz, inspira el cambio</h3>
                </div>
            </footer>
        </>

    )
}
export default Footer;