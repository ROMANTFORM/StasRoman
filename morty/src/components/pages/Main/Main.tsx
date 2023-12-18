import React from 'react';
import styles from './Main.module.scss'
import FilmFilter from "components/common/FilmFilter/FilmFilter";
import ListEpisodes from "components/common/ListEpisodes/ListEpisodes";
import {useGetEpisodesRequestQuery} from "features/episodes/episodes";
import PaginationRounded from "components/common/Pagination/Pagination";
import SkeletonItem from "components/common/ListEpisodes/SkeletonLoading";

const Main = () => {
    // Using a query hook automatically fetches data and returns query values
    const {data, isLoading} = useGetEpisodesRequestQuery(null);

    // console.log('data= ', data);

    return (
        <div className={styles.main_wrap}>
            <FilmFilter/>

            {
                isLoading ? <SkeletonItem width={'100%'} height={250} count={3} /> : <ListEpisodes listEpisodes={data.results}/>
            }

            <PaginationRounded/>
        </div>
    )
};

export default Main;
