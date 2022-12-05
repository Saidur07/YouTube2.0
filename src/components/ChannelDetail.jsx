import React, { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";
import { Box, CardMedia, Tabs, Tab } from "@mui/material";
import { Videos, ChannelCard, Sidebar } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
const ChannelDetail = ({setCollapse, collapse}) => {
  const [channelDetail, setChannelDetail] = useState();
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };
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

      <div className="p-2 overflow-auto h-[91vh] flex-1 min-w-[75vw]" >
      <div>
        <div className="h-[400px] -z-0 rounded-lg flex items-center justify-center  group" 
        style={{background: 'linear-gradient(315deg, hsla(222, 47%, 11%, 1) 0%, hsla(201, 91%, 54%, 1) 100%, hsla(240, 90%, 61%, 1) 100%',
     
        }} 
        ><CardMedia
        image={channelDetail?.brandingSettings?.image?.bannerExternalUrl }
        alt={channelDetail?.snippet?.title}
        sx={{  height: '100%', width: '100%', borderRadius: "8px"  }}

      />  
      </div>

        <ChannelCard channelDetail={channelDetail} shortDesc={true} detailed={true} marginTop="-93px" />
    <Box sx={{ width: '100%' }} className="text-white mb-4">
    <Tabs value={tabIndex} onChange={handleTabChange} sx={{
            '& .MuiTabs-indicator': { backgroundColor:  "#1b9ff1"},
            '& .MuiTab-root': { color: "#a5a5a5" },
            '& .Mui-selected': { color:  "#f9f9f9"},
          }}>
        <Tab label="Videos" />
        <Tab label="About" />
      </Tabs>
    </Box>
      </div>
      {tabIndex === 0 && (
      <Box p={2} display="flex">
            <Videos videos={videos} />
          </Box>
        )}
     
      {tabIndex === 1 && (
      <div  className="p-2 ">
           <p className="text-white text-xl font-semibold mb-4"> <span style={{ color: "#fff" }} className="gradient-text">{channelDetail?.snippet?.title}</span> </p>
              <div className="flex  justify-start">
              <div className="w-1/2 px-6"><p className="text-white text-xl">Description</p>
              <p className="text-gray-400 my-4 text-sm w-[600px]">{(channelDetail?.snippet?.description)}</p>
              </div>
              <div className="w-1/2 border-l px-6">
                
              <p className="text-gray-300 my-4 text-sm">Country origin : <span className="font-semibold text-md text-white">  {channelDetail?.snippet?.country}</span></p>
                
              <p className="text-gray-300 my-4 text-sm">Custom URL : <span className="font-semibold text-md text-white"> { channelDetail?.snippet?.customUrl}</span></p>
                
              <p className="text-gray-300 my-4 text-sm">Publishing Date : <span className="font-semibold text-md text-white">  {(channelDetail?.snippet?.publishedAt).slice(0,10)}</span></p>
                
              <p className="text-gray-300 my-4 text-sm">Total Videos : <span className="font-semibold text-md text-white">  {(channelDetail?.statistics?.videoCount).toLocaleString('en-US')}</span></p>
                
              <p className="text-gray-300 my-4 text-sm">Total Subscribers : <span className="font-semibold text-md text-white">  {(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')}</span></p>
                
              <p className="text-gray-300 my-4 text-sm">Total Views : <span className="font-semibold text-md text-white">  {(channelDetail?.statistics?.viewCount).toLocaleString('en-US')}</span></p>
              </div>
                     </div>
          </div>
        )}
    
    </div>
    
      </div>
  );
};

export default ChannelDetail;
