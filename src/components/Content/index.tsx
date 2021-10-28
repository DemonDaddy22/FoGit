import React, { useCallback, useEffect, useState } from 'react';
import ContentColumn from '../ContentColumn';
import classes from './styles.module.scss';
import user from '../../data';
import { COLORS, GITHUB_BASE_URI, PAGE_SIZE } from '../../constants';
import axios from 'axios';
import useAsyncExec from '../../hooks/useAsyncExec';
import { createListOfSize } from '../../utils';

interface IContentProps {}

// TODO - first get the followers and following counts from users API -                                             DONE
// TODO - make parallel calls for paginated data since we are not concerned with order of data                      DONE
// TODO - simply state variables by arranging followers and following data into objects
// TODO - if any fetch call fails, prompt the user to retry by displaying an error
// TODO - populate the data lists with fetched data
// TODO - following and followers APIs send paginated data, need to get complete data for further processing
// TODO - must fetch following and followers list in parallel since the data is independent of each other
const Content: React.FC<IContentProps> = () => {
    const [followersCount, setFollowersCount] = useState<number>(0);
    const [followingCount, setFollowingCount] = useState<number>(0);
    const [getFollowers, setGetFollowers] = useState<boolean>(false);
    const [getFollowing, setGetFollowing] = useState<boolean>(false);
    const [followersLoading, setFollowersLoading] = useState<boolean>(false);
    const [followers, setFollowers] = useState<Array<any>>([]);
    const [followersError, setFollowersError] = useState<any>(null);
    const [followingLoading, setFollowingLoading] = useState<boolean>(false);
    const [following, setFollowing] = useState<Array<any>>([]);
    const [followingError, setFollowingError] = useState<any>(null);

    const fetchUserData = useCallback(async () => {
        const userResponse = await axios.get(`${GITHUB_BASE_URI}/DemonDaddy22`);
        const { followers = 0, following = 0 } = userResponse?.data || {};
        setFollowersCount(followers);
        setFollowingCount(following);
        setGetFollowers(true);
        setGetFollowing(true);
        useAsyncExec(() => {
            setGetFollowers(false);
            setGetFollowing(false);
        });
    }, []);

    const fetchFollowers = useCallback(async (followersCount: number) => {
        setFollowersLoading(true);
        const pages = Math.ceil(followersCount / PAGE_SIZE);
        const pageList = createListOfSize(pages);
        try {
            const pagesData = await Promise.all(
                pageList.map((page) =>
                    axios.get(`${GITHUB_BASE_URI}/DemonDaddy22/followers`, {
                        params: { page, per_page: PAGE_SIZE },
                    })
                )
            );
            setFollowers(pagesData);
            setFollowersError(null);
        } catch (err) {
            setFollowersError(err);
        }
        setFollowersLoading(false);
    }, []);

    const fetchFollowing = useCallback(async (followingCount: number) => {
        setFollowingLoading(true);
        const pages = Math.ceil(followingCount / PAGE_SIZE);
        const pageList = createListOfSize(pages);
        try {
            const pagesData = await Promise.all(
                pageList.map((page) =>
                    axios.get(`${GITHUB_BASE_URI}/DemonDaddy22/following`, {
                        params: { page, per_page: PAGE_SIZE },
                    })
                )
            );
            setFollowing(pagesData);
            setFollowingError(null);
        } catch (err) {
            setFollowingError(err);
        }
        setFollowingLoading(false);
    }, []);

    useEffect(() => {
        fetchUserData();
    }, []);

    useEffect(() => {
        if (getFollowers) {
            fetchFollowers(followersCount);
        }
    }, [getFollowers, followersCount, fetchFollowers]);

    useEffect(() => {
        if (getFollowers) {
            fetchFollowing(followingCount);
        }
    }, [getFollowing, followingCount, fetchFollowing]);

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
