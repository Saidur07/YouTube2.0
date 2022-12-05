import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard, Sidebar } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = ({setCollapse, collapse}) => {
  const [channelDetail, setChannelDetail] = useState();
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);
console.log(channelDetail)
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
      <div>
        <div className="h-[300px] bg-black z-10" 
       /*  style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} */ 
        />
        <ChannelCard channelDetail={channelDetail} shortDesc={true} marginTop="-93px" />
      </div>
      <Box p={2} display="flex">
        <Videos videos={videos} />
      </Box>
    
    </div>
    
      </div>
  );
};

export default ChannelDetail;
