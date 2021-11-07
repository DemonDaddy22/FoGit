import React, { useCallback, useContext } from 'react';
import BuyMeACoffee from '../../assets/icons/BuyMeACoffee';
import GitHub from '../../assets/icons/GitHub';
import Twitter from '../../assets/icons/Twitter';
import Unsplash from '../../assets/icons/Unsplash';
import {
    BUY_ME_A_COFFEE_URL,
    GITHUB_URL,
    TWITTER_URL,
    UNSPLASH_URL,
} from '../../constants';
import { InputContext } from '../../context/InputContext';
import Input from '../Input';
import classes from './styles.module.scss';

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
    const { value, handleValueChange, handleSearch } = useContext(InputContext);

    const handleIconClick = useCallback((url: string) => {
        window.open(url, '__blank', 'noopener,noreferrer');
    }, []);

    const onInputChange = useCallback((e: any) => {
        handleValueChange(e?.target?.value);
    }, []);

    const onSubmit = useCallback(() => {
        handleSearch(true);
    }, [handleSearch]);

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
            <Input
                value={value}
                placeholder="Search GitHub username"
                onChange={onInputChange}
                onSubmit={onSubmit}
                className={classes.inputWrapper}
            />
        </div>
    );
};

export default Header;
