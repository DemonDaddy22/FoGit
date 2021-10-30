/* eslint-disable object-curly-newline */
import React, { useCallback, useEffect, useState } from 'react';
import { differenceBy, intersectionBy } from 'lodash';
import ContentColumn from '../ContentColumn';
import classes from './styles.module.scss';
import { COLORS, GITHUB_BASE_URI, PAGE_SIZE } from '../../constants';
import axios from 'axios';
import useAsyncExec from '../../hooks/useAsyncExec';
import { createListOfSize } from '../../utils';

interface IContentProps {}

interface IAPIContent {
    count: number;
    data: Array<any>;
    loading: boolean;
    error: any;
}

interface IData {
    leaders: Array<any>;
    mutual: Array<any>;
    supporters: Array<any>;
}

// TODO - move out loading and error, and pass them to content columns

const Content: React.FC<IContentProps> = () => {
    const [getFollowers, setGetFollowers] = useState<boolean>(false);
    const [getFollowing, setGetFollowing] = useState<boolean>(false);
    const [followers, setFollowers] = useState<IAPIContent>({
        count: 0,
        data: [],
        loading: false,
        error: null,
    });
    const [following, setFollowing] = useState<IAPIContent>({
        count: 0,
        data: [],
        loading: false,
        error: null,
    });
    const [data, setData] = useState<IData>({
        leaders: [],
        mutual: [],
        supporters: [],
    });

    const fetchUserData = useCallback(async () => {
        try {
            const userResponse = await axios.get(
                `${GITHUB_BASE_URI}/DemonDaddy22`
            );
            const { followers = 0, following = 0 } = userResponse?.data || {};
            setFollowers((prevFollowers) => ({
                ...prevFollowers,
                count: followers,
            }));
            setFollowing((prevFollowing) => ({
                ...prevFollowing,
                count: following,
            }));
            setGetFollowers(true);
            setGetFollowing(true);
            useAsyncExec(() => {
                setGetFollowers(false);
                setGetFollowing(false);
            });
        } catch (err) {}
    }, []);

    const fetchFollowers = useCallback(async (followersCount: number) => {
        setFollowers((prevFollowers) => ({
            ...prevFollowers,
            loading: true,
        }));
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
            setFollowers((prevFollowers) => ({
                ...prevFollowers,
                data: pagesData?.[0]?.data || [],
                error: null,
            }));
        } catch (error) {
            setFollowers((prevFollowers) => ({
                ...prevFollowers,
                error,
            }));
        }
        setFollowers((prevFollowers) => ({
            ...prevFollowers,
            loading: false,
        }));
    }, []);

    const fetchFollowing = useCallback(async (followingCount: number) => {
        setFollowing((prevFollowing) => ({
            ...prevFollowing,
            loading: true,
        }));
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
            setFollowing((prevFollowing) => ({
                ...prevFollowing,
                data: pagesData?.[0]?.data || [],
                error: null,
            }));
        } catch (error) {
            setFollowing((prevFollowing) => ({
                ...prevFollowing,
                error,
            }));
        }
        setFollowing((prevFollowing) => ({
            ...prevFollowing,
            loading: false,
        }));
    }, []);

    useEffect(() => {
        const supporters = differenceBy(followers.data, following.data, 'id');
        const leaders = differenceBy(following.data, followers.data, 'id');
        const mutual = intersectionBy(followers.data, following.data, 'id');
        setData({ supporters, leaders, mutual });
    }, [followers.data, following.data]);

    useEffect(() => {
        fetchUserData();
    }, [fetchUserData]);

    useEffect(() => {
        if (getFollowers) {
            fetchFollowers(followers.count);
        }
    }, [getFollowers, followers.count, fetchFollowers]);

    useEffect(() => {
        if (getFollowers) {
            fetchFollowing(following.count);
        }
    }, [getFollowing, following.count, fetchFollowing]);

    return (
        <div className={classes.contentWrapper}>
            <ContentColumn
                wrapperClass={classes.columnWrapperFirst}
                columnClass={classes.columnFirst}
                titleClass={classes.columnTitleFirst}
                subtitleClass={classes.columnSubtitleFirst}
                title="Leaders"
                subtitle="Worth following them even if they don't follow back"
                data={data.leaders}
                color={COLORS.ACCENT_ORANGE}
            />
            <ContentColumn
                columnClass={classes.columnMiddle}
                titleClass={classes.columnTitleMiddle}
                subtitleClass={classes.columnSubtitleMiddle}
                title="2-Way Street"
                subtitle="Helping each other grow together"
                data={data.mutual}
                color={COLORS.ACCENT_PURPLE}
            />
            <ContentColumn
                wrapperClass={classes.columnWrapperLast}
                columnClass={classes.columnLast}
                titleClass={classes.columnTitleLast}
                subtitleClass={classes.columnSubtitleLast}
                title="Supporters"
                subtitle="Rooting for you all the way"
                data={data.supporters}
                color={COLORS.ACCENT_BLUE}
            />
        </div>
    );
};

export default Content;
