import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {

   const {id, name, image, status, species, location, episode} = props.item;

   let indicator = '';

   if(status === 'Alive'){
    indicator = 'green'
   }
   if(status === 'Dead'){
    indicator = 'red'
   }

    return (

        <Link to={`/${id}`} className="card__conatiner">
            <img className="card__img" src={image} alt="pic"/>
            <div className="card-descr__container">
                <div className="card__title-container">
                    <h3 className="card__title">{name}</h3>
                    <p className="card__title-descr"><span style={{background: indicator}}></span>{status} - {species}</p>
                </div>
                <div className="card__location-container">
                    <p className="card__label">Last known location:</p>
                    <p className="card__descr">{location.name}</p>
                </div>
                <div className="card__seen-container">
                    <p className="card__label">First seen in:</p>
                    <p className="card__descr">{episode[0]}</p>
                </div>
            </div>
        </Link>
    )
};

export default Card;
