import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {setEpisodes} from "features/episodes/episodes";

const {REACT_APP_API_BASE_URL} = process.env;

export const paginationEpisodesApi = createApi({
    reducerPath: 'paginationEpisodesApi',
    baseQuery: fetchBaseQuery({baseUrl: REACT_APP_API_BASE_URL}),
    endpoints: (builder) => ({

        getDatePageEpisodesCharacter: builder.mutation({
            query: (params) => (
                {
                    url: `/character/?page=${params.page}${params.name &&+ `&name=`+params.name}${params.gender && +`&gender=`+ params.gender}${params.status && +`&status=`+params.status}${params.type && +`&type=`+ params.type}${params.species && +`&species=`+params.species}`
                }
            ),
            async onQueryStarted(params, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled;
                    dispatch(setEpisodes(data));
                } catch {}
            },
        }),

    }),

})

export const {
    useGetDatePageEpisodesCharacterMutation
} = paginationEpisodesApi
