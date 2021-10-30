import React from 'react';
import { COLORS } from '../../constants';

interface IExternalLinkProps {
    color?: string;
    size?: number | string;
    style?: React.CSSProperties;
    className?: string;
}

const ExternalLink: React.FC<IExternalLinkProps> = ({
    color,
    size,
    style,
    className,
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke={color}
            style={{
                ...style,
                height: size,
                width: size,
            }}
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
        </svg>
    );
};

export default ExternalLink;

ExternalLink.defaultProps = {
    size: 20,
    color: COLORS.LIGHT,
    style: {},
};
