import React from 'react';
import classes from './styles.module.scss';

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
    return (
        <div className={classes.header}>
            <span>Fo</span>
            <span>Git</span>
            <div className={classes.headerOverlay} />
        </div>
    );
};

export default Header;
