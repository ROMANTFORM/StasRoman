import React from 'react';
import style from './About.module.scss'
import {useSelector} from "react-redux";
import {RootState} from "app/store";

const About = () => {
    const isAnyhistory: any = useSelector((state: RootState) => state.history);
    console.log(isAnyhistory)

    // TODO перенести отсюда в history modal !!!!
    //  тут чисто для вывода + сделать там сортировку если есть одинаковые значения

    return (
        <div>
            <h2>About us</h2>
        </div>
    )
};

export default About;
