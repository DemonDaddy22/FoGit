import React from 'react';
import classes from './styles.module.scss';

interface IContentColumnProps {
    title: string;
    data: Array<any>;
    columnStyle?: React.CSSProperties;
    columnClass?: string;
    titleStyle?: React.CSSProperties;
    titleClass?: string;
}

const ContentColumn: React.FC<IContentColumnProps> = ({
    title,
    data,
    titleStyle,
    titleClass,
    columnStyle,
    columnClass,
}) => {
    return (
        <div className={classes.columnWrapper}>
            <div className={`${titleClass}`} style={titleStyle}>
                {title}
            </div>
            <div className={`${columnClass}`} style={columnStyle}>
                {data?.length ? 'Data' : 'No Data'}
            </div>
        </div>
    );
};

export default ContentColumn;
