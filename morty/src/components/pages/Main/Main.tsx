import React from 'react';
import styles from './Main.module.scss'
import FilmFilter from "components/common/FilmFilter/FilmFilter";
import ListEpisodes from "components/common/ListEpisodes/ListEpisodes";

const Main = () => {
    // const getUserAllInfo = userInfo.useGetUserInfoRequestQuery(null);

    return (
        <div className={'home-wrap'}>
            <FilmFilter/>

            <ListEpisodes/>
        </div>
    )
};

export default Main;
