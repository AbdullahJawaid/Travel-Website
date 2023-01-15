//style 
import { Link } from 'react-router-dom';
import './Button.css'

const styles=['btn--primary','btn-outline'];

const size=['btn--medium','btn--large'];

export const Button=({children,type,onClick,buttonStyle,buttonSize})=>{
    const checkedButtonStyle=styles.includes(buttonStyle) ? buttonStyle : styles[0];

    const checkedButtonSize=styles.includes(buttonSize) ? buttonSize : size[0];

    return(
        <Link to='/sign-up' className='btn-mobile'>
            <button
            className={`btn ${checkedButtonStyle} ${checkedButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
                </button>
        </Link>
    )

}