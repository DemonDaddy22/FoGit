import React from 'react';
import ContentColumn from '../ContentColumn';
import classes from './styles.module.scss';

interface IContentProps {}

const Content: React.FC<IContentProps> = () => {
    return (
        <div className={classes.contentWrapper}>
            <ContentColumn title="Leaders" data={[]} />
            <ContentColumn title="2-Way Street" data={[]} />
            <ContentColumn title="Supporters" data={[]} />
        </div>
    );
};

export default Content;
