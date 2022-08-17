import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from './ButtonComponent.module.scss'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>


const ButtonComponent: React.FC<DefaultButtonPropsType> = ({title, className,onClick }) => {
    return (
        <>
            <button className={s.button}
                    onClick={onClick}>
                    {title}
            </button>
        </>
    );
};

export default ButtonComponent;