import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import style from './Pagination.module.scss';

// import {useGetDatePageEpisodesCharacterMutation} from "features/episodes/pagination";

const PaginationRounded = ({page, countPage, setPage}: any) => {

    // const [setPageEpisodes] = useGetDatePageEpisodesCharacterMutation()
    const handleChange = (even, value) => {
        setPage(value);

        // setPageEpisodes({page:value});
    }

    // console.log('PaginationRounded page=', page)
    // console.log('PaginationRounded countPage=', countPage)
    return (
        <div className={style.pagination_wrap}>
            <Stack spacing={12}>
                <Pagination onChange={handleChange} page={page} count={countPage} variant="outlined" shape="rounded"/>
            </Stack>
        </div>
    );
}


export default PaginationRounded;
