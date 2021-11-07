/* eslint-disable object-curly-newline */
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { differenceBy, intersectionBy } from 'lodash';
import ContentColumn from '../ContentColumn';
import classes from './styles.module.scss';
import { COLORS, GITHUB_BASE_URI, PAGE_SIZE } from '../../constants';
import axios from 'axios';
import useAsyncExec from '../../hooks/useAsyncExec';
import { createListOfSize } from '../../utils';
import { InputContext } from '../../context/InputContext';

interface IContentProps {}

interface IAPIContent {
    count: number;
    data: Array<any>;
}

interface IData {
    leaders: Array<any>;
    mutual: Array<any>;
    supporters: Array<any>;
}

const Content: React.FC<IContentProps> = () => {
    const { searchValue, fetchResults, handleSearch } =
        useContext(InputContext);

    const [getFollowers, setGetFollowers] = useState<boolean>(false);
    const [getFollowing, setGetFollowing] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);
    const [followers, setFollowers] = useState<IAPIContent>({
        count: 0,
        data: [],
    });
    const [following, setFollowing] = useState<IAPIContent>({
        count: 0,
        data: [],
    });
    const [data, setData] = useState<IData>({
        leaders: [],
        mutual: [],
        supporters: [],
    });

    const fetchUserData = useCallback(async () => {
        setLoading(true);
        try {
            const userResponse = await axios.get(
                `${GITHUB_BASE_URI}/${searchValue}`
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
            setError(null);
            useAsyncExec(() => {
                setGetFollowers(false);
                setGetFollowing(false);
            });
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    }, [searchValue]);

    const fetchFollowers = useCallback(
        async (followersCount: number) => {
            setLoading(true);
            const pages = Math.ceil(followersCount / PAGE_SIZE);
            const pageList = createListOfSize(pages);
            try {
                const pagesData = await Promise.all(
                    pageList.map((page) =>
                        axios.get(
                            `${GITHUB_BASE_URI}/${searchValue}/followers`,
                            {
                                params: { page, per_page: PAGE_SIZE },
                            }
                        )
                    )
                );
                setError(null);
                setFollowers((prevFollowers) => ({
                    ...prevFollowers,
                    data: pagesData?.[0]?.data || [],
                }));
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        },
        [searchValue]
    );

    const fetchFollowing = useCallback(
        async (followingCount: number) => {
            setLoading(true);
            const pages = Math.ceil(followingCount / PAGE_SIZE);
            const pageList = createListOfSize(pages);
            try {
                const pagesData = await Promise.all(
                    pageList.map((page) =>
                        axios.get(
                            `${GITHUB_BASE_URI}/${searchValue}/following`,
                            {
                                params: { page, per_page: PAGE_SIZE },
                            }
                        )
                    )
                );
                setError(null);
                setFollowing((prevFollowing) => ({
                    ...prevFollowing,
                    data: pagesData?.[0]?.data || [],
                }));
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        },
        [searchValue]
    );

    useEffect(() => {
        const supporters = differenceBy(followers.data, following.data, 'id');
        const leaders = differenceBy(following.data, followers.data, 'id');
        const mutual = intersectionBy(followers.data, following.data, 'id');
        setData({ supporters, leaders, mutual });
    }, [followers.data, following.data]);

    useEffect(() => {
        if (fetchResults) {
            fetchUserData();
            handleSearch(false);
        }
    }, [fetchResults, fetchUserData, handleSearch]);

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
                loading={loading}
                error={error}
                data={data.leaders}
                color={COLORS.ACCENT_ORANGE}
            />
            <ContentColumn
                columnClass={classes.columnMiddle}
                titleClass={classes.columnTitleMiddle}
                subtitleClass={classes.columnSubtitleMiddle}
                title="2-Way Street"
                subtitle="Helping each other grow together"
                loading={loading}
                error={error}
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
                loading={loading}
                error={error}
                data={data.supporters}
                color={COLORS.ACCENT_BLUE}
            />
        </div>
    );
};

export default Content;
