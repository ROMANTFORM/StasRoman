import React from 'react';
import styles from './EpisodeItem.module.scss'
import { Link } from 'react-router-dom';

const ListEpisodes = ({listEpisodes}: any) => {

    return (
        listEpisodes.map((episod) => {
            console.log(episod);
            return(
                (
                    <li key={episod.id} className={styles.episodes_item}>
                        <Link to={'/single/'+episod.id} className={styles.card__conatiner}>
                            {/*TODO выше измени на правильную урлу!!!*/}
                            <div className={styles.card_prevew}>
                                <img className={styles.card_img} src={episod.image} alt="pic"/>
                            </div>
                            <div className={styles.card_descr__container}>
                                <div className={styles.card__title_container}>
                                    <h3 className={styles.card__title}>{episod.name}</h3>
                                    <div className={styles.descr_wrap}>
                                        <div className={styles.status_color}></div>
                                        <p className={styles.card__title_descr}>{episod.status } - {episod.species}</p>
                                    </div>

                                </div>
                                <div className={styles.card__location_container}>
                                    <p className={styles.card__label}>Last known location:</p>
                                    <p className={styles.card__descr}>{episod.location.name}</p>
                                </div>
                                <div className={styles.card__seen_container}>
                                    <p className={styles.card__label}>First seen in:</p>
                                    <p className={styles.card__descr}>Total Rickall !!!!!!!!!</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                )
            )
            }
        )
    );
};

export default ListEpisodes;
