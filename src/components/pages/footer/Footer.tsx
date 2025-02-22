import styles from './Footer.module.scss'

const Footer: React.FC = () => {
    return(
        <>
            <footer className={styles.footer}>
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
                                <a href="https://www.tiktok.com/@soyynaniii">
                                    <figure className={styles.footer__figure}>
                                        <img src="https://project-power-her-images.s3.us-east-1.amazonaws.com/inspirationIcon.svg" alt="Descargar desde PlayStore" />
                                        <figcaption>soyynaniii</figcaption>
                                    </figure>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitch.tv/soyynanii" target="_blank" rel="noopener noreferrer">
                                    <figure className={styles.footer__figure}>
                                        <img src="https://project-power-her-images.s3.us-east-1.amazonaws.com/inspirationIcon.svg" alt="Descargar desde AppStore" />
                                        <figcaption>soyynanii</figcaption>
                                    </figure>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/soyynani/" target="_blank" rel="noopener noreferrer">
                                    <figure className={styles.footer__figure}>
                                        <img src="https://project-power-her-images.s3.us-east-1.amazonaws.com/inspirationIcon.svg" alt="Descargar desde AppStore" />
                                        <figcaption>soyynani</figcaption>
                                    </figure>
                                </a>
                            </li>
                        </ul>
                    </article>
                </div>
            </footer>
        </>

    )
}
export default Footer;