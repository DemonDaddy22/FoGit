/* eslint-disable max-len */
import React from 'react';
import { COLORS } from '../../constants';

interface IArrowRightProps {
    color?: string;
    size?: number | string;
    style?: React.CSSProperties;
    className?: string;
}

const ArrowRight: React.FC<IArrowRightProps> = ({
    color,
    size,
    style,
    className,
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill={color}
            style={{
                ...style,
                width: size,
                height: size,
            }}
            className={className}
        >
            <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
            />
        </svg>
    );
};

export default ArrowRight;

ArrowRight.defaultProps = {
    size: 20,
    color: COLORS.LIGHT,
    style: {},
};
