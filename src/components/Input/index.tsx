import React from 'react';
import ArrowRight from '../../assets/icons/ArrowRight';
import classes from './styles.module.scss';

interface IInputProps {
    value: string;
    placeholder?: string;
    onChange?: (...args: any[]) => void;
    onSubmit?: (...args: any[]) => void;
    style?: React.CSSProperties;
    className?: string;
}

const Input: React.FC<IInputProps> = ({
    value,
    placeholder,
    onChange,
    onSubmit,
    style,
    className,
    ...props
}) => {
    return (
        <div className={classes.inputContainer}>
            <input
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                style={style}
                className={`${classes.input} ${className}`}
                {...props}
            />
            <button onClick={onSubmit}>
                <ArrowRight className={classes.arrowButton} />
            </button>
        </div>
    );
};

export default Input;
