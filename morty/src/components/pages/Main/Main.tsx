import React, {useState, useEffect} from 'react';
import styles from './Main.module.scss'
import FilmFilter from "components/common/FilmFilter/FilmFilter";
import ListEpisodes from "components/common/ListEpisodes/ListEpisodes";
import {useGetEpisodesRequestQuery} from "features/episodes/episodes";
import PaginationRounded from "components/common/Pagination/Pagination";
import SkeletonItem from "components/common/ListEpisodes/SkeletonLoading";

const Main = () => {
    const [filterDataEpisodes, setFilterDataEpisodes] = useState(null);
    const [listEpisodesData, setListEpisodesData] = useState(null);
    const [isLoadingPage, setLoadingPage] = useState(true);

    const {
        data: episodesData,
        isLoading: isLoadingEpisodes,
        error: errorEpisodesRequest
    } = useGetEpisodesRequestQuery(null);

    useEffect(() => {
        // Обработка данных
        if (episodesData) {
            setListEpisodesData(episodesData.results)
        }

        setLoadingPage(isLoadingEpisodes)

        // Обработка ошибки
        if (errorEpisodesRequest) {
            // Ваши действия при возникновении ошибки
            console.error('Ошибка запроса:', errorEpisodesRequest);
        }
    }, [episodesData, isLoadingEpisodes, errorEpisodesRequest]);

    useEffect(() => {
        console.log(filterDataEpisodes);
        if (filterDataEpisodes) {
            setListEpisodesData(filterDataEpisodes.results)
        }
    }, [filterDataEpisodes]);

    return (
        <div className={styles.main_wrap}>
            <FilmFilter setFilterDataEpisodes={setFilterDataEpisodes}/>

            {
                isLoadingPage ? <SkeletonItem width={'100%'} height={250} count={3}/> :
                    <ListEpisodes listEpisodes={listEpisodesData}/>
            }

            <PaginationRounded/>
        </div>
    )
};

export default Main;
