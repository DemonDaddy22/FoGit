import React from 'react';
import { COLORS } from '../../constants';
import '../../constants/styles.scss';
import classes from './styles.module.scss';

interface ILoaderProps {
    color?: string;
    size?: number;
}

const Loader: React.FC<ILoaderProps> = ({
    color = COLORS.LIGHT,
    size = 40,
}) => {
    return (
        <div
            style={{ height: size, width: size }}
            data-testid="loader-spinner"
            className={classes.spinner}
        >
            <div
                data-testid="loader-dot1"
                style={{ backgroundColor: color }}
                className={classes.dot1}
            ></div>
            <div
                data-testid="loader-dot2"
                style={{ backgroundColor: color }}
                className={classes.dot2}
            ></div>
        </div>
    );
};

export default Loader;
