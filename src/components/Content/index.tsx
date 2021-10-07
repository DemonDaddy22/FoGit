import React from 'react';
import ContentColumn from '../ContentColumn';
import classes from './styles.module.scss';

interface IContentProps {}

const Content: React.FC<IContentProps> = () => {
    return (
        <div className={classes.contentWrapper}>
            <ContentColumn
                wrapperClass={classes.columnWrapperFirst}
                columnClass={classes.columnFirst}
                title="Leaders"
                data={[]}
            />
            <ContentColumn
                columnClass={classes.columnMiddle}
                title="2-Way Street"
                data={[]}
            />
            <ContentColumn
                wrapperClass={classes.columnWrapperLast}
                columnClass={classes.columnLast}
                title="Supporters"
                data={[]}
            />
        </div>
    );
};

export default Content;
