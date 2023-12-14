// import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';
// import ReactPaginate from 'react-paginate';


const Pagination = ({setPageNumber, info}) => {

    return (
        <div>
            pagination
        </div>
        // <ReactPaginate
        //     className="pagination__container"
        //     pageCount={info?.pages}
        //     previousLabel={<IoIosArrowBack/>}
        //     previousClassName="pagination__btn"
        //     nextLabel={<IoIosArrowForward/>}
        //     nextClassName='pagination__btn'
        //     onPageChange={(data) => {setPageNumber(data.selected + 1 )}}
        //     activeClassName="pagination__btn-active"
        //     disabledClassName="pagination__btn-disable"
        // />
    )
};

export default Pagination;
