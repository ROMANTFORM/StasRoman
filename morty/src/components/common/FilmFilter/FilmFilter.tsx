import React, {useState, useEffect} from 'react';
import styles from './FilmFilter.module.scss'
import FormFilter from "components/common/FilmFilter/FormFilter/FormFilter";
import {useClearFilterMutation} from "features/episodes/episodes";


interface propsInterface {
    setFilterDataEpisodes: Function;
    setPage: Function;
}

const FilmFilter = ({setPage, setFilterDataEpisodes}: propsInterface) => {

    const [openFilter, setOpenFilter] = useState(false);

    const [ClearFilter] = useClearFilterMutation();

    const clearedFilterData = () => {
        ClearFilter(null);
    };

    useEffect(() => {
        if (!openFilter) {
            clearedFilterData();
        }
    }, [openFilter]);

    return (
        <>
            <div className={styles.filter}>
                <div className={styles.filter_button_wrap}>
                    <button
                        type="button"
                        onClick={() => {
                            setOpenFilter(!openFilter)
                        }}
                        className={styles.filter_button}
                    >
                        {!openFilter ? 'Filter' : 'Remove filter'}
                    </button>
                </div>

                {
                    openFilter &&
                    <div className={styles.filter_form_wrap}>
                        <FormFilter setPage={setPage} setFilterDataEpisodes={setFilterDataEpisodes}/>
                    </div>
                }


            </div>
        </>
    )
};

export default FilmFilter;
