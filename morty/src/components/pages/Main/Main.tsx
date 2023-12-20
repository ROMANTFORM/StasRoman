import React, {useState} from 'react';
import styles from './Main.module.scss'
import FilmFilter from "components/common/FilmFilter/FilmFilter";
import ListEpisodes from "components/common/ListEpisodes/ListEpisodes";
import {useGetEpisodesRequestQuery, useGetEpisodesCharacterQuery} from "features/episodes/episodes";
import PaginationRounded from "components/common/Pagination/Pagination";
import SkeletonItem from "components/common/ListEpisodes/SkeletonLoading";

const Main = () => {
    // Using a query hook automatically fetches data and returns query values
    const {data, isLoading} = useGetEpisodesRequestQuery(null);

    const [filterDataEpisodes, setFilterDataEpisodes] = useState(undefined);
    const {data:episodesCharacter, isLoading: isLoadingEpisodesCharacter} = useGetEpisodesCharacterQuery(filterDataEpisodes);

    console.log(episodesCharacter);


    return (
        <div className={styles.main_wrap}>
            <FilmFilter setFilterDataEpisodes={setFilterDataEpisodes}/>

            {
                isLoading ? <SkeletonItem width={'100%'} height={250} count={3}/> : <ListEpisodes listEpisodes={data.results}/>
            }

            <PaginationRounded/>
        </div>
    )
};

export default Main;
