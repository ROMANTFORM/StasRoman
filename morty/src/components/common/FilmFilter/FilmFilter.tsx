import React, {useState, useEffect} from 'react';
import styles from './FilmFilter.module.scss'
import { Form, Formik } from 'formik';
import FormFilter from "components/common/FilmFilter/FormFilter/FormFilter";
const FilmFilter = () => {

    const [openFilter, setOpenFilter] = useState(false);


    const clearedFilterData = () => {
        console.log('s')
    };

    useEffect(() => {
        if (openFilter) {
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
                        <div className={styles.filter_form}>
                            <FormFilter/>
                        </div>
                    </div>
                }


            </div>


        </>
    )
};

export default FilmFilter;
