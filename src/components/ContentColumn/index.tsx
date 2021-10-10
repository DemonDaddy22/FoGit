/* eslint-disable prettier/prettier */
import React from 'react';
import ContentItem from '../ContentItem';
import classes from './styles.module.scss';

interface IContentColumnProps {
    color?: string;
    title: string;
    data: Array<any>;
    columnStyle?: React.CSSProperties;
    columnClass?: string;
    titleStyle?: React.CSSProperties;
    titleClass?: string;
    wrapperStyle?: React.CSSProperties;
    wrapperClass?: string;
}

// TODO - handle no data case
const ContentColumn: React.FC<IContentColumnProps> = ({
    color,
    title,
    data,
    titleStyle,
    titleClass,
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
                className={`${classes.column} ${columnClass}`}
                style={columnStyle}
            >
                {data?.length
                    ? data?.map((item) => (
                        <ContentItem key={item?.id} data={item} color={color} />
                    ))
                    : 'No Data'}
            </div>
        </div>
    );
};

export default ContentColumn;
