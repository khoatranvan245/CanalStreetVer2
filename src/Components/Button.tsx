
import styles from './Button.module.css'

const Button = ({text} : {text: string}) => {

    return <div className={styles.button}>{text}</div>
}

export default Button