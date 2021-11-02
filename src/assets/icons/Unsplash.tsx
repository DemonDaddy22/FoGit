import React from 'react';
import { COLORS } from '../../constants';

interface IUnsplashProps {
    color?: string;
    size?: number | string;
    style?: React.CSSProperties;
    className?: string;
}

const Unsplash: React.FC<IUnsplashProps> = ({
    color,
    size,
    style,
    className,
}) => {
    return (
        <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill={color}
            style={{
                ...style,
                height: size,
                width: size,
            }}
            className={className}
        >
            <title>Unsplash</title>
            <path d="M7.5 6.75V0h9v6.75h-9zm9 3.75H24V24H0V10.5h7.5v6.75h9V10.5z" />
        </svg>
    );
};

export default Unsplash;

Unsplash.defaultProps = {
    size: 20,
    color: COLORS.ACCENT_PINK,
    style: {},
};
