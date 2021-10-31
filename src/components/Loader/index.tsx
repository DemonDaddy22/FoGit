import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { default as Rls } from 'react-loader-spinner';
import '../../constants/styles.scss';

interface ILoaderProps {
    type?:
        | 'Audio'
        | 'BallTriangle'
        | 'Bars'
        | 'Circles'
        | 'Grid'
        | 'Hearts'
        | 'Oval'
        | 'Puff'
        | 'Rings'
        | 'TailSpin'
        | 'ThreeDots'
        | 'Watch'
        | 'RevolvingDot'
        | 'Triangle'
        | 'Plane'
        | 'MutatingDots'
        | 'CradleLoader';
    color?: string;
    height?: number;
    width?: number;
}

const Loader: React.FC<ILoaderProps> = ({
    type = 'Circles',
    color = '#EE7C11',
    height = 40,
    width = 40,
}) => {
    return (
        <Rls visible type={type} color={color} height={height} width={width} />
    );
};

export default Loader;
