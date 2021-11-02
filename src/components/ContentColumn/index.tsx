/* eslint-disable prettier/prettier */
import React, { useMemo } from 'react';
import { isEmptyString } from '../../utils';
import ContentItem from '../ContentItem';
import Loader from '../Loader';
import classes from './styles.module.scss';

interface IContentColumnProps {
    color?: string;
    title: string;
    subtitle?: string;
    data: Array<any>;
    loading: boolean;
    error: any;
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
    loading,
    error,
    titleStyle,
    titleClass,
    subtitleStyle,
    subtitleClass,
    columnStyle,
    columnClass,
    wrapperStyle,
    wrapperClass,
}) => {
    const renderContent = useMemo(() => {
        const errorMessage = error
            ? `Something went wrong 🥺`
            : !data?.length
                ? `Nothing to show 🤷🏻‍♂️`
                : '';
        if (!isEmptyString(errorMessage)) {
            return <div className={classes.noData} style={{ color }}>{errorMessage}</div>;
        }
        return data?.map((item, index) => (
            <ContentItem key={item?.id || (index + 1)} data={item} color={color} />
        ));
    }, [
        data,
        error,
    ]);

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
                {loading ? <div className={classes.loaderWrapper}>
                    <Loader color={color} />
                </div> : null}
                {renderContent}
            </div>
        </div>
    );
};

export default ContentColumn;
