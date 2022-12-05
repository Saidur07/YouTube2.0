import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";
import axios from "axios";


const Feed = ({setCollapse, collapse}) => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) =>  {if(data?.response?.status === 429 ){
        navigate("/quota-exceeded")
      }else{
setVideos(data?.item)
      }})
    }, [navigate, selectedCategory]);
   
 
   
  return (
    <div className="flex flex-row ">
      <div className={`h-[91vh]  mr-2  bg-[#d6dfe60a] px-4 relative ${collapse ? "w-24" : "w-[340px]"} transition-all duration-150 ease-in-out`} >
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} collapse={collapse}/>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 absolute top-[10vh] -right-3 hover:bg-slate-600 bg-gray-800 cursor-pointer text-slate-300 rounded-full border-gray-700 border  transition-all ${collapse ? "rotate-180" : "rotate-0"} duration-150 ease-out`} onClick={()=> setCollapse(!collapse)}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>
    {
      !collapse ? <p className="copyright mt-[1.5px] text-slate-400 font-semibold">
          Copyright © 2022 by <a href="https://github.com/programmer-saidur" target="_blank" rel="noreferrer" className="gradient-text">Programmer Saidur</a> 
        </p> : ""
    }
        
      </div>

      <div className="p-2 overflow-auto h-[91vh] flex-1" >
        <p className="text-3xl font-bold mb-2 text-white">
          <span style={{ color: "#1b9ff1" }} className="gradient-text">{selectedCategory}</span> videos
        </p>

        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default Feed;
