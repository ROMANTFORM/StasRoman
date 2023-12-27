import React, {useState, useEffect} from 'react';
import styles from './Main.module.scss'
import FilmFilter from "components/common/FilmFilter/FilmFilter";
import ListEpisodes from "components/common/ListEpisodes/ListEpisodes";
import {useGetEpisodesRequestQuery, useClearFilterMutation} from "features/episodes/episodes";
import PaginationRounded from "components/common/Pagination/Pagination";
import SkeletonItem from "components/common/ListEpisodes/SkeletonLoading";
import {useSelector} from 'react-redux';
import {RootState} from 'app/store';

const Main = () => {
    const [page, setPage] = React.useState(1);
    const [countPage, setCountPage] = React.useState(1);
    const [filterDataEpisodes, setFilterDataEpisodes] = useState(null);
    const [listEpisodesData, setListEpisodesData] = useState(null);
    const [isLoadingPage, setLoadingPage] = useState(true);

    const isAnyStoryViewed: any = useSelector((state: RootState) => state.episodes);

    useEffect(() => {
        if (isAnyStoryViewed && isAnyStoryViewed.info) {
            setCountPage(isAnyStoryViewed.info.pages)
            setListEpisodesData(isAnyStoryViewed.results)
        }
    }, [isAnyStoryViewed]);

    // useEffect(() => {
    //     console.log('page111', page);
    // }, [page]);

    const {
        data: episodesData,
        isLoading: isLoadingEpisodes,
        error: errorEpisodesRequest
    } = useGetEpisodesRequestQuery(null);

    useEffect(() => {
        if (episodesData) {
            setCountPage(episodesData.info.pages)
            setListEpisodesData(episodesData.results)
        }

        setLoadingPage(isLoadingEpisodes)


        if (errorEpisodesRequest) {
            // Ваши действия при возникновении ошибки
            console.error('Ошибка запроса:', errorEpisodesRequest);
        }
    }, [episodesData, isLoadingEpisodes, errorEpisodesRequest]);

    useEffect(() => {
        // console.log('filterDataEpisodes', filterDataEpisodes);
        if (filterDataEpisodes) {
            setCountPage(filterDataEpisodes.info.pages)
            setListEpisodesData(filterDataEpisodes.results)
        }
    }, [filterDataEpisodes]);

    return (
        <div className={styles.main_wrap}>
            <FilmFilter setPage={setPage} setFilterDataEpisodes={setFilterDataEpisodes}/>

            {
                isLoadingPage ? <SkeletonItem width={'100%'} height={250} count={3}/> :
                    <ListEpisodes listEpisodes={listEpisodesData}/>
            }
            {
                countPage && <PaginationRounded countPage={countPage} page={page} setPage={setPage}/>
            }

        </div>
    )
};

export default Main;
