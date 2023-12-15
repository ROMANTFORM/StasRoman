import React from 'react';
import styles from './ListEpisodes.module.scss'
import EpisodeItem from "components/common/ListEpisodes/EpisodeItem/EpisodeItem";

import {useGetEpisodesRequestQuery} from '../../../features/episodes/episodes'

const ListEpisodes = () => {

    // Using a query hook automatically fetches data and returns query values
    const {data, error, isLoading} = useGetEpisodesRequestQuery(null);

    console.log('data= ',data);
    console.log('isLoading= ',isLoading);
    // Individual hooks are also accessible under the generated endpoints:

    return (
        <div className={styles.wrap_episodes}>
            <ul className={styles.episodes_list}>
                <EpisodeItem/>
                <EpisodeItem/>
                <EpisodeItem/>
                <EpisodeItem/>
                <EpisodeItem/>
            </ul>
        </div>
    )
};

export default ListEpisodes;
