import React from 'react';
import styles from './EpisodeItem.module.scss'

const ListEpisodes = () => {

    return (
        <li className={styles.episodes_item}>
            <a className={styles.card__conatiner} href="#!!!">
                <div className={styles.card_prevew}>
                    <img className={styles.card_img} src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="pic"/>
                </div>
                <div className={styles.card_descr__container}>
                    <div className={styles.card__title_container}>
                        <h3 className={styles.card__title}>Rick Sanchez</h3>
                        <div className={styles.descr_wrap}>
                            <div className={styles.status_color}></div>
                            <p className={styles.card__title_descr}>Alive - Human</p>
                        </div>

                    </div>
                    <div className={styles.card__location_container}>
                        <p className={styles.card__label}>Last known location:</p>
                        <p className={styles.card__descr}>Citadel of Ricks</p>
                    </div>
                    <div className={styles.card__seen_container}>
                        <p className={styles.card__label}>First seen in:</p>
                        <p className={styles.card__descr}>Total Rickall</p>
                    </div>
                </div>
            </a>
        </li>
    )
};

export default ListEpisodes;
