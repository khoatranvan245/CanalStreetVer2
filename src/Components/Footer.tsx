import Button from './Button'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.vendor}>
                <h1>Interested in becoming a vendor?</h1>
                <div className={styles.button}>
                    <Button text="click here" />
                </div>
            </div>

            <div className={styles.socialMedia}>
                <div className={styles.block}>
                    <i className="fa-solid fa-pencil"></i>
                    <p>Email us</p>
                </div>
                <div className={styles.block}>
                    <i className="fa-brands fa-facebook-f"></i>
                    <p>Follow us on facebook</p>
                </div>
                <div className={styles.block}>
                    <i className="fa-brands fa-square-instagram"></i>
                    <p>Follow us on instagram</p>
                </div>
            </div>

            <div className={[styles.form, styles.block].join(' ')}>
                <p>Stay up to date with our newsletter</p>
                <input placeholder="Email"></input>
            </div>

            <div className={styles.policy}>
                <div>
                    <p>Copyright Canal Street Market 2024</p>
                </div>
                <div>
                    <a href='#'>Privacy Policy</a>
                    <a href='#'>Vendor Login</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
