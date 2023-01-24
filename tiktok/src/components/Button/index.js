import styles from './Button.module.css'

function Button(){
    return(
        <>
            <button className={styles.btn}>
                Click me!
            </button>
            <button className={[styles.btn, styles.active].join(' ')}>
                Click me!
            </button>
        </>
    )
}

export default Button