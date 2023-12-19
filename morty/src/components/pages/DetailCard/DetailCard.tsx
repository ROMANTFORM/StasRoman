import React, {useState, useEffect} from 'react';
import History from "components/common/History/History";
import { useParams } from 'react-router-dom';
// import Sidebar from './Sidebar';
// import { HiOutlineDotsVertical } from "react-icons/hi";
// import { BsDownload, BsExclamationCircle } from "react-icons/bs";
// import { IoMdClose } from "react-icons/io";


function DetailCard() {

    const [fetchData, setFetchData] = useState([]);
    const [fetchEpisode, setFetchEpisode] = useState([]);
    const [visibleBtns, setVisibleBtns] = useState(false);
    const [visibleSidebar, setVisibleSidebar] = useState(false);

    const {cardId} = useParams();

    let api = `https://rickandmortyapi.com/api/character/${cardId}`;
    // let episodeApi = fetchData?.episode?.[0];

    useEffect(() => {
        fetch(api)
            .then(res => res.json())
            .then(data => setFetchData(data))
    }, [api]);

    // useEffect(() =>{
    //     fetch(episodeApi)
    //     .then(res =>  res.json())
    //     .then(data => setFetchEpisode(data))
    // }, [episodeApi]);

    useEffect(() => {
        // localStorage.setItem("name", JSON.stringify(fetchData?.name));
    }, [fetchData])


    // let indicator = '';
    //
    //     if(fetchData?.status === 'Alive'){
    //         indicator = 'green'
    //     }
    //     if(fetchData?.status === 'Dead'){
    //         indicator = 'red'
    //     }


    return (
        <div className="detail-card__section">
            <div className="detail-card__conatiner">
                <img className="detail-card__img" src={''} alt="pic"/>
                <div className="detail-card-descr__container">
                    <div className="card__title-container">
                        <h3 className="card__title">{''}</h3>
                        <p className="card__title-descr"><span
                            // style={{background: indicator}}
                        >

                        </span>
                            {/*{fetchData?.status} - {fetchData?.species}*/}
                        </p>

                    </div>
                    <div className="card__location-container">
                        <p className="card__label">Last known location:</p>
                        <p className="card__descr">{"fetchData?.location?.name"}</p>
                    </div>
                    <div className="card__seen-container">
                        <p className="card__label">First seen in:</p>
                        <p className="card__descr">{"fetchEpisode?.name"}</p>
                    </div>
                    <div className="card__other-container">
                        <p className="card__label">Other info:</p>
                        <p className="card__descr">
                            created: {"fetchData?.created"}
                        </p>
                    </div>
                </div>
            </div>

            <div className="history-btn__container">
                {visibleBtns &&
                    <button type="button" className="history-btn info__btn" onClick={() => setVisibleSidebar(true)}>
                        {/*<BsExclamationCircle/>*/}
                        btn
                    </button>}
                {visibleBtns &&
                    <button type="button" className="history-btn download__btn" disabled>btnttt</button>}
                <button type="button" className="history-btn menu__btn"
                        onClick={() => setVisibleBtns(visibleBtns => !visibleBtns)}>
                    {/*{visibleBtns ? <IoMdClose/> : <HiOutlineDotsVertical/>}*/}
                    button333
                </button>
            </div>

            <History setVisibleSidebar={setVisibleSidebar} visibleSidebar={visibleSidebar}/>

        </div>
    )
};

export default DetailCard;
