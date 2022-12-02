import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <div className="flex flex-row">
      <div className="h-[91vh] border-r-2 border-[#3d3d3d] px-2" >
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        
        <p className="copyright mt-[1.5px] text-slate-400 font-semibold">
          Copyright © 2022 by <a href="https://github.com/programmer-saidur" target="_blank" rel="noreferrer" className="gradient-text">Programmer Saidur</a> 
        </p>
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
