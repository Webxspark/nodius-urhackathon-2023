// import css button module
import styles from '../modules/Button.module.css';
const SuperButton = (props) => {
    return (
        <button variant={props.variant} className={styles.superbutton+" inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-solid hover:text-black-800 hover:bg-white mt-4 lg:mt-0"}>
            {props.children}
        </button>
    )
}

export default SuperButton;