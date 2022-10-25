import React, { useEffect, useState } from "react";
import MovieCard from "../components/Movie/MovieCard";
import tmdb from '../config/tmdb';
import '../styles/MovieList.css';
import {useParams} from 'react-router-dom';
import NavbarUser from "../components/NavbarUser";
import { Typography } from "@mui/material";

const SearchPage = () => {
  let params = useParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [textKey, setTextKey] = useState('');
  const keyword = params.keyword;

  

  useEffect(() => {
    const fetchData = async (pageNum) => {
    const {data} = await tmdb.get( `search/multi` , { params : { query:keyword, page: pageNum, language: 'en-US',include_adult:true }});
    // console.log(data);
    if (textKey !== keyword){
        setMovies(data.results);
    } else {
        setMovies((prevstate) => [...prevstate, ...data.results]);
    }
    setTextKey(keyword);
    // console.log(data.results);
  };
    fetchData(page);
    console.log(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page,keyword]);

  console.log(movies)

  const loadMore = () => {
    setPage((prevstate) => prevstate + 1);
  };

  return (
    <>
    <NavbarUser />
    
    <div>
        
      <div className="mx-auto py-10 px-6 max-w-[90%]">
        <Typography sx={{color:'white'}}>Searh Result for <b>{keyword}</b></Typography>
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 xl:gap-x-8 mt-12">
       
          {movies.map(item => {
            return (((item.media_type === 'movie') || (item.media_type === 'tv')) && item.poster_path !== null ) &&
            <MovieCard item={item} key={item.id} type={item.media_type} /> 
            })
          }
        </div>
        <div className="flex items-center justify-center mt-10">
        <button className="bg-cyan-600 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded " onClick={loadMore} disabled={page>15 ? true: false}>
          Load More
        </button>
                  
        </div>
      </div>
      
    </div>
    </>
  );
};

export default SearchPage;
