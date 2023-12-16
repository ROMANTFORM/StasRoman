import React from 'react';
import { useState } from 'react';
import styles from './FormFilter.module.scss'
import { Formik, Field, Form, FormikHelpers } from 'formik';

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
    }

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

                   }}
                   onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
                       setTimeout(() => {
                           alert(JSON.stringify(values, null, 2));
                           setSubmitting(false);
                       }, 500);
                   }}
                   >
                   {({ values, handleChange, setFieldValue }) => {

                       return (
                           <>
                               <Form className={styles.form}>
                                   <div className={styles.select_item_wrap}>

                                   </div>

                                   <div className={styles.inputs_wrap}>

                                       <Field id="keywords" name="keywords" placeholder="Add key words to find"/>

                                       <Field id="episode_episode" name="episode_episode" placeholder="Add episode"/>

                                       <Field id="location_type" name="location_type" placeholder="Add type"/>
                                       <Field id="location_demantion" name="location_demantion" placeholder="Add demantion"/>

                                       <Field id="character_status" name="character_status" placeholder="Add status"/>
                                       <Field id="character_species" name="character_species" placeholder="Add species"/>
                                       <Field id="character_type" name="character_type" placeholder="Add type"/>
                                       <Field id="character_gender" name="character_gender" placeholder="Add gender"/>

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
