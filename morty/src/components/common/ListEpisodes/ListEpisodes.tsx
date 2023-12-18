import React from 'react';
import styles from './ListEpisodes.module.scss'
import EpisodeItem from "components/common/ListEpisodes/EpisodeItem/EpisodeItem";

const ListEpisodes = ({listEpisodes}) => {
    return (
        <div className={styles.wrap_episodes}>
            <ul className={styles.episodes_list}>
                <EpisodeItem listEpisodes={listEpisodes}/>
            </ul>
        </div>
    )
};

export default ListEpisodes;
