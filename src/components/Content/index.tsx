import React from 'react';
import ContentColumn from '../ContentColumn';
import classes from './styles.module.scss';
import user from '../../data';

interface IContentProps {}

const Content: React.FC<IContentProps> = () => {
    return (
        <div className={classes.contentWrapper}>
            <ContentColumn
                wrapperClass={classes.columnWrapperFirst}
                columnClass={classes.columnFirst}
                titleClass={classes.columnTitleFirst}
                title="Leaders"
                data={[user, user, user]}
            />
            <ContentColumn
                columnClass={classes.columnMiddle}
                titleClass={classes.columnTitleMiddle}
                title="2-Way Street"
                data={[user, user, user, user, user, user]}
            />
            <ContentColumn
                wrapperClass={classes.columnWrapperLast}
                columnClass={classes.columnLast}
                titleClass={classes.columnTitleLast}
                title="Supporters"
                data={[user, user, user, user]}
            />
        </div>
    );
};

export default Content;
