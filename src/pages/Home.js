import React, { useState } from "react";
import ReactPaginate from 'react-paginate';
import ListMovies from "../data/ListMovies";
import '../styles/Home.css';

function Home() { 
    const [currentPage, setCurrentPage] = useState(0);

    function HandlePageClick({ selected: selectedPage }) {
      return setCurrentPage(selectedPage);
    }

    const PER_PAGE = 8;
    const offset = currentPage * PER_PAGE;
    
    function PaginationMovies() {
      return ListMovies.slice(offset, offset + PER_PAGE).map((movie, index) => (
        <div key={index} className="box-movies" >          
            <img src={movie.imagePath} alt='foto do filme'/>
            <h3>{movie.title}</h3>          
        </div>              
      ));      
    }

    const pageCount = Math.ceil(ListMovies.length / PER_PAGE);

    return (
      <div className='container-movies'>     
        <ReactPaginate        
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          pageCount={pageCount}
          onPageChange={HandlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}         
        />     
        {PaginationMovies()}
      </div>
    );
}

export default Home;