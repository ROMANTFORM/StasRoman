import React from 'react';
import { useState } from 'react';
import styles from './FormFilter.module.scss'
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { FormGroup , FormControlLabel} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

const FormFilter = ({}) => {

    const [visibleCheckbox, setVisibleCheckbox] = useState(false);
    interface Values {
        keywords: string,

        episode_episode: string,

        location_type: string,
        location_demantion: string,

        character_status: string,
        character_species: string,
        character_type: string,
        character_gender: string,

        character: boolean,
        location: boolean,
        episodes: boolean,
    }

    const [openSelectFilter, setOpenSelectFilter] = useState(false);

       return (

           <>
               <Formik
                   initialValues={{
                       keywords: '',

                       episode_episode: '',

                       location_type: '',
                       location_demantion: '',

                       character_status: '',
                       character_species: '',
                       character_type: '',
                       character_gender: '',

                       character: false,
                       location: false,
                       episodes: false,

                   }}
                   onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
                       setTimeout(() => {
                           alert(JSON.stringify(values, null, 2));
                           setSubmitting(false);
                           setOpenSelectFilter(false);
                       }, 500);
                   }}
                   >
                   {({ values, handleChange, setFieldValue }) => {
                       return (
                           <>
                               <Form className={styles.form}>
                                   <div className={styles.select_item_wrap}>
                                       <div
                                           onClick={() => {
                                               setOpenSelectFilter(!openSelectFilter)
                                           }}
                                           className={styles.select_item}>
                                           <span className={styles.title}>Select Item</span>
                                           <span className={styles.icon}>
                                               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.98438 9.98438H17.0156L12 15L6.98438 9.98438Z" fill="#272B33"/></svg>
                                           </span>
                                       </div>

                                       {
                                           openSelectFilter &&
                                           <FormGroup className={styles.form_checkbox_group}>
                                               <FormControlLabel labelPlacement="start" checked={values.character} onChange={() => setFieldValue('character', !values.character)} name="character" control={<Checkbox  />} label="Character" />
                                               <FormControlLabel labelPlacement="start" checked={values.location} onChange={() => setFieldValue('location', !values.location)}  name="location" control={<Checkbox />} label="Location" />
                                               <FormControlLabel labelPlacement="start" checked={values.episodes} onChange={() => setFieldValue('episodes', !values.episodes)}    name="episodes" control={<Checkbox />} label="Episodes" />
                                           </FormGroup>
                                       }

                                   </div>

                                   <div className={styles.inputs_wrap}>

                                   <Field className={'qwerty'} id="keywords" name="keywords" placeholder="Add key words to find"/>

                                       {
                                           openSelectFilter &&
                                           <div className={styles.inputs_wrap_field}>
                                               {
                                                   values.episodes &&
                                                   <>
                                                       <Field id="episode_episode" name="episode_episode" placeholder="Add episode"/>
                                                   </>
                                               }


                                               {
                                                   values.location &&
                                                   <>
                                                       <Field id="location_type" name="location_type"
                                                              placeholder="Add type"/>
                                                       <Field id="location_demantion" name="location_demantion"
                                                              placeholder="Add demantion"/>
                                                   </>
                                               }

                                               {
                                                   values.character &&
                                                   <>
                                                       <Field id="character_status" name="character_status" placeholder="Add status"/>
                                                       <Field id="character_species" name="character_species" placeholder="Add species"/>
                                                       <Field id="character_type" name="character_type" placeholder="Add type"/>
                                                       <Field id="character_gender" name="character_gender" placeholder="Add gender"/>
                                                   </>
                                               }
                                           </div>
                                       }


                                   </div>

                                   <div className={styles.button_wrap}>

                                       <button type="submit" className={styles.find}>
                                           Find
                                       </button>
                                   </div>
                               </Form>
                           </>
                       );
                   }}
               </Formik>
           </>
    )
};

export default FormFilter;
