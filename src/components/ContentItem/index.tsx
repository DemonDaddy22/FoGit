import React, { useCallback, useRef } from 'react';
import { COLORS } from '../../constants';
import {
    isEmptyObject,
    isEmptyString,
    truncateStringToLength,
} from '../../utils';
import classes from './styles.module.scss';

interface IContentItemProps {
    data: any;
    color?: string;
    className?: string;
    style?: React.CSSProperties;
}

const ContentItem: React.FC<IContentItemProps> = ({
    data,
    color = '',
    className,
    style,
}) => {
    const itemRef = useRef<HTMLDivElement>(null);

    const handleItemHover = useCallback(() => {
        if (itemRef?.current) {
            itemRef.current.style.backgroundColor = color;
            itemRef.current.style.color = COLORS.LIGHT;
        }
    }, [color]);

    const handleItemHoverOut = useCallback(() => {
        if (itemRef?.current) {
            itemRef.current.style.backgroundColor = 'transparent';
            itemRef.current.style.color = color;
        }
    }, [color]);

    const handleItemClick = useCallback(() => {
        window.open(data?.html_url, '__blank', 'noopener,noreferrer');
    }, [data?.html_url]);

    return !isEmptyObject(data) ? (
        <div
            ref={itemRef}
            className={`${classes.itemWrapper} ${className}`}
            style={{ ...style, color }}
            onMouseOver={handleItemHover}
            onMouseOut={handleItemHoverOut}
            onClick={handleItemClick}
        >
            <img
                src={data?.avatar_url}
                alt={data?.login}
                className={classes.itemAvatar}
            />
            <div className={classes.itemTextWrapper}>
                <div className={classes.itemUsername}>
                    {truncateStringToLength(data?.login, 25)}
                </div>
                <div className={classes.itemName}>
                    {!isEmptyString(data?.name)
                        ? `(${truncateStringToLength(data?.name, 18)})`
                        : ''}
                </div>
            </div>
        </div>
    ) : null;
};

export default ContentItem;
