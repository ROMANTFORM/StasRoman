import React, {useState, useEffect} from 'react';
import styles from './Main.module.scss'
import FilmFilter from "components/common/FilmFilter/FilmFilter";
import ListEpisodes from "components/common/ListEpisodes/ListEpisodes";
import {useGetEpisodesRequestQuery} from "features/episodes/episodes";
import PaginationRounded from "components/common/Pagination/Pagination";
import SkeletonItem from "components/common/ListEpisodes/SkeletonLoading";

const Main = () => {
    const [page, setPage] = React.useState(1);
    const [countPage, setCountPage] = React.useState(1);
    const [filterDataEpisodes, setFilterDataEpisodes] = useState(null);
    const [listEpisodesData, setListEpisodesData] = useState(null);
    const [isLoadingPage, setLoadingPage] = useState(true);


    useEffect(() => {
        console.log('page', page);
        console.log('filterDataEpisodes', filterDataEpisodes);
    }, [page]);

    const {
        data: episodesData,
        isLoading: isLoadingEpisodes,
        error: errorEpisodesRequest
    } = useGetEpisodesRequestQuery(null);

    useEffect(() => {
        // Обработка данных
        console.log(episodesData)
        if (episodesData) {
            setCountPage(episodesData.info.pages)
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
                countPage && <PaginationRounded countPage={countPage} page={page} setPage={setPage} />
            }


        </div>
    )
};

export default Main;
