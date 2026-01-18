import styles from './Button.module.css'

const Button = ({onClick}) => {
    return(
        <>
            <button onClick={onClick}>Лайк! </button>
        </>
    )
}
export default Button