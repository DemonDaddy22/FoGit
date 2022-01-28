import React, { useCallback, useContext } from 'react';
import BuyMeACoffee from '../../assets/icons/BuyMeACoffee';
import GitHub from '../../assets/icons/GitHub';
import Twitter from '../../assets/icons/Twitter';
import Unsplash from '../../assets/icons/Unsplash';
import {
    BUY_ME_A_COFFEE_URL,
    GITHUB_LOGIN_URL,
    GITHUB_URL,
    TWITTER_URL,
    UNSPLASH_URL,
} from '../../constants';
import classes from './styles.module.scss';

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
    const handleIconClick = useCallback((url: string) => {
        window.open(url, '__blank', 'noopener,noreferrer');
    }, []);

    return (
        <div className={classes.headerContainer}>
            <div className={classes.header}>FoGit</div>
            <div className={classes.iconsContainer}>
                <div
                    className={classes.icon}
                    onClick={() => handleIconClick(GITHUB_URL)}
                >
                    <GitHub />
                </div>
                <div
                    className={classes.icon}
                    onClick={() => handleIconClick(TWITTER_URL)}
                >
                    <Twitter />
                </div>
                <div
                    className={classes.icon}
                    onClick={() => handleIconClick(UNSPLASH_URL)}
                >
                    <Unsplash />
                </div>
                <div
                    className={classes.icon}
                    onClick={() => handleIconClick(BUY_ME_A_COFFEE_URL)}
                >
                    <BuyMeACoffee />
                </div>
            </div>
            <a href={GITHUB_LOGIN_URL}>Login with GitHub</a>
        </div>
    );
};

export default Header;
