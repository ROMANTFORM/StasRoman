import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationRounded = ({page,countPage, setPage}) => {
    const handleChange = (event, value) => {
        setPage(value)
    }
// console.log('page=',page)
// console.log('countPage=',countPage)
    return (
        <Stack spacing={12}>
            <Pagination onChange={handleChange} page={page} count={countPage} variant="outlined" shape="rounded"/>
        </Stack>
    );
}


export default PaginationRounded;
