/* eslint-disable prettier/prettier */
import React from 'react';
import ContentItem from '../ContentItem';
import classes from './styles.module.scss';

interface IContentColumnProps {
    color?: string;
    title: string;
    subtitle?: string;
    data: Array<any>;
    columnStyle?: React.CSSProperties;
    columnClass?: string;
    titleStyle?: React.CSSProperties;
    titleClass?: string;
    subtitleStyle?: React.CSSProperties;
    subtitleClass?: string;
    wrapperStyle?: React.CSSProperties;
    wrapperClass?: string;
}

const ContentColumn: React.FC<IContentColumnProps> = ({
    color,
    title,
    subtitle,
    data,
    titleStyle,
    titleClass,
    subtitleStyle,
    subtitleClass,
    columnStyle,
    columnClass,
    wrapperStyle,
    wrapperClass,
}) => {
    return (
        <div
            className={`${classes.columnWrapper} ${wrapperClass}`}
            style={wrapperStyle}
        >
            <div
                className={`${classes.columnTitle} ${titleClass}`}
                style={titleStyle}
            >
                {title}
            </div>
            <div
                className={`${classes.columnSubtitle} ${subtitleClass}`}
                style={subtitleStyle}
            >
                {subtitle}
            </div>
            <div
                className={`${classes.column} ${columnClass}`}
                style={columnStyle}
            >
                {data?.length
                    ? data?.map((item, i) => (
                        <ContentItem key={i} data={item} color={color} />
                    ))
                    : <div className={classes.noData} style={{ color }}>Nothing to show 🤷🏻‍♂️</div>}
            </div>
        </div>
    );
};

export default ContentColumn;
