import Button from '../Components/Button'
import Footer from '../Components/Footer'
import styles from './Community.module.css'
const Community = () => {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.left}>
                    <span>Community &#x2192;</span>
                    <h1>Canal St. Community</h1>
                </div>
                <div className={styles.right}>
                    <p>
                        Our mixed-use space hosts
                        <br />
                        ongoing events, podcasts
                        <br />
                        &amp; artists in residence
                        <br />
                    </p>
                    <span>文化</span>
                </div>
            </section>

            <section className={styles.events}>
                <div className={styles.eventsList}>
                    <div className={styles.event}>
                        <p>09/21 (past)</p>
                        <p>Small Business Retail Pop Up Weekend!</p>
                    </div>
                    <div className={styles.event}>
                        <p>02/07 (past)</p>
                        <p>SNew Balance x Paperboy Paris by Greenhouse @ Canal Street Market</p>
                    </div>
                    <div className={styles.event}>
                        <p>12/11 (past)</p>
                        <p>Hack City 12/11</p>
                    </div>
                    <div className={styles.event}>
                        <p>07/27 (past)</p>
                        <p>Taiwanese Wave</p>
                    </div>
                    <div className={styles.eventTag}>
                        <p>Market Events</p>
                    </div>
                </div>

                <div className={styles.button}>
                    <Button text="view all" />
                </div>
            </section>

            <section className={styles.features}>
                <span className={styles.title}>Features</span>
                <div className={styles.featuresList}>
                    <div className={styles.item}>
                        <div className={styles.picture}></div>
                        <div className={styles.name}>SCM Community - AMDC</div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.picture}></div>
                        <div className={styles.name}>SCM Community - Joe's Steam Rice Rolls</div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.picture}></div>
                        <div className={styles.name}>SCM Community - Bereop Tech</div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.picture}></div>
                        <div className={styles.name}>SCM Community - Izakaya</div>
                    </div>

                </div>

                <div className={styles.button}><Button text='view all stories'/></div>
            </section>

            <Footer/>
        </div>
    )
}

export default Community
