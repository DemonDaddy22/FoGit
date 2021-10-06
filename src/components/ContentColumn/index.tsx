import React from 'react';
import classes from './styles.module.scss';

interface IContentColumnProps {
    title: string;
    data: Array<any>;
    columnStyle?: React.CSSProperties;
    columnClass?: string;
    titleStyle?: React.CSSProperties;
    titleClass?: string;
    wrapperStyle?: React.CSSProperties;
    wrapperClass?: string;
}

const ContentColumn: React.FC<IContentColumnProps> = ({
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
                {data?.length ? 'Data' : 'No Data'}
            </div>
        </div>
    );
};

export default ContentColumn;
