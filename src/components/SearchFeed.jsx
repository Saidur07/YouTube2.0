import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import  SearchVideos  from "./SearchVideos";
import { Sidebar } from "./";

const SearchFeed = ({setCollapse, collapse}) => {
  const [videos, setVideos] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("New");
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <div className="flex lg:flex-row flex-col h-[91vh]">
    <div className={`lg:h-[91vh] z-10 mr-2  bg-[#d6dfe60a] px-4 relative ${collapse ? "lg:w-24" : "lg:w-[340px]"} transition-all duration-150 ease-in-out`} >
      <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} collapse={collapse}/>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 absolute top-[10vh] -right-3 hover:bg-slate-600 bg-gray-800 cursor-pointer text-slate-300 hidden lg:block rounded-full border-gray-700 border  transition-all ${collapse ? "rotate-180" : "rotate-0"} duration-150 ease-out`} onClick={()=> setCollapse(!collapse)}>
<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>
  {
    !collapse ? <p className="copyright mt-[1.5px] text-slate-400 font-semibold">
        Copyright © 2022 by <a href="https://github.com/programmer-saidur" target="_blank" rel="noreferrer" className="gradient-text">Programmer Saidur</a> 
      </p> : ""
  }
      
    </div>

  <div className="p-2 overflow-auto h-[91vh] flex-1">
  <Typography variant="h4" fontWeight={900}  color="white" mb={3} >
        Search Results for <span style={{ color: "#1b9ff1" }} className="gradient-text">{searchTerm}</span> 
      </Typography>
      <div display="flex">
        {<SearchVideos videos={videos} collapse={collapse}/>}
      </div>
  </div>
  </div>
  );
};

export default SearchFeed;
