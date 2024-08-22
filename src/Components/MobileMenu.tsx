import { useState } from 'react'
import styles from './MobileMenu.module.css'
import { Link } from 'react-router-dom'
import Button from './Button'

const MobileMenu = () => {
    const [show, setShow] = useState(false)

    return (
        <div className={styles.mobileMenu}>
            <div
                className={styles.onOffButton}
                onClick={() => setShow(!show)}
            >
                {show ? <i className="fa-solid fa-x"></i> : <i className="fa-solid fa-bars"></i>}
            </div>

            {show ? (
                <div className={styles.container}>
                    <div className={styles.linkBox}>
                        <Link to="/" onClick={() => setShow(!show)}>
                            <p>About</p>
                        </Link>
                        <Link to="/food" onClick={() => setShow(!show)}>
                            <p>Food</p>
                        </Link>
                        <Link to="/retail" onClick={() => setShow(!show)}>
                            <p>Retail</p>
                        </Link>
                        <Link to="/community" onClick={() => setShow(!show)}>
                            <p>Community</p>
                        </Link>
                    </div>

                    <div className={styles.button}>
                        <Button text="become a vendor" />
                    </div>

                    <div className={styles.information}>
                        <div>
                            <p>265 Canal Street</p>
                            <p>New York, New York</p>
                        </div>
                        <div>
                            <p>Food Hall Hours:</p>
                            <p>Mon - Sun: 11AM- 8PM</p>
                        </div>
                        <div>
                            <p>Retail Market Hours:</p>
                            <p>Thurs – Sun: 11AM- 7PM</p>
                        </div>
                        <a href='#'>Email us</a>
                    </div>

                    <div className={styles.socialMedia}>
                        <a href='#'>
                        <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href='#'>
                        <i className="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}

export default MobileMenu
