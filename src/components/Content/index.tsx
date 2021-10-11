import React from 'react';
import ContentColumn from '../ContentColumn';
import classes from './styles.module.scss';
import user from '../../data';
import { COLORS } from '../../constants';

interface IContentProps {}

const Content: React.FC<IContentProps> = () => {
    return (
        <div className={classes.contentWrapper}>
            <ContentColumn
                wrapperClass={classes.columnWrapperFirst}
                columnClass={classes.columnFirst}
                titleClass={classes.columnTitleFirst}
                title="Leaders"
                data={[]}
                color={COLORS.ACCENT_ORANGE}
            />
            <ContentColumn
                columnClass={classes.columnMiddle}
                titleClass={classes.columnTitleMiddle}
                title="2-Way Street"
                data={[user, user, user, user, user, user]}
                color={COLORS.ACCENT_PURPLE}
            />
            <ContentColumn
                wrapperClass={classes.columnWrapperLast}
                columnClass={classes.columnLast}
                titleClass={classes.columnTitleLast}
                title="Supporters"
                data={[user, user, user, user]}
                color={COLORS.ACCENT_BLUE}
            />
        </div>
    );
};

export default Content;
