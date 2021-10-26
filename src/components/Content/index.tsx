import React, { useCallback, useEffect } from 'react';
import ContentColumn from '../ContentColumn';
import classes from './styles.module.scss';
import user from '../../data';
import { COLORS, GITHUB_BASE_URI } from '../../constants';
import axios from 'axios';

interface IContentProps {}

// TODO - first get the followers and following counts from users API -                     DONE
// TODO - keep the page size as 100, and use counts to make sequential paginated calls
// TODO - make parallel calls for paginated data as well since we are not concerned with order of data
// TODO - if any fetch call fails, prompt the user to retry by displaying an error
// TODO - populate the data lists with fetched data
// TODO - following and followers APIs send paginated data, need to get complete data for further processing
// TODO - must fetch following and followers list in parallel since the data is independent of each other
const Content: React.FC<IContentProps> = () => {
    const fetchUserData = useCallback(async () => {
        const userResponse = await axios.get(`${GITHUB_BASE_URI}/DemonDaddy22`);
        const { followers = 0, following = 0 } = userResponse?.data || {};
        console.log({ followers, following });
    }, []);

    useEffect(() => {
        fetchUserData();
    }, []);

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
