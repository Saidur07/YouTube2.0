import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Videos, Loader } from "./";
import VideoDetailSkeleton from "./VideoDetailSkeleton"
import { fetchFromAPI } from "../utils/fetchFromAPI";
import VideoSkeleton from "./VideoSkeleton";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id]);

  if(!videoDetail?.snippet || !videos?.length) return (<div className="grid grid-cols-5 ">
  <div className="col-span-4"><VideoDetailSkeleton/> </div>
  <div className="flex justify-center items-center px-2 py-1 "  >
  <div className={ "space-y-2" } >
<VideoSkeleton></VideoSkeleton>
<VideoSkeleton></VideoSkeleton>
<VideoSkeleton></VideoSkeleton>
<VideoSkeleton></VideoSkeleton>
<VideoSkeleton></VideoSkeleton>
<VideoSkeleton></VideoSkeleton>
<VideoSkeleton></VideoSkeleton>
<VideoSkeleton></VideoSkeleton>
<VideoSkeleton></VideoSkeleton>
<VideoSkeleton></VideoSkeleton>
<VideoSkeleton></VideoSkeleton>
<VideoSkeleton></VideoSkeleton>
<VideoSkeleton></VideoSkeleton>
<VideoSkeleton></VideoSkeleton>
<VideoSkeleton></VideoSkeleton>
<VideoSkeleton></VideoSkeleton>
<VideoSkeleton></VideoSkeleton>
<VideoSkeleton></VideoSkeleton>
</div>)
    </div>
     </div>)
  const { snippet: { title, channelId, channelTitle, publishedAt, description }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <div className="min-h-[95vh]">
     
      <div className="grid grid-cols-5 ">
        
        <div className="col-span-4">
     
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
              <Link to={`/channel/${channelId}`}>
                <p className="text-xl text-white font-semibold" >
                  {channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </p>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </div>
        <div className="flex justify-center items-center px-2 py-1 "  >
          <Videos videos={videos} single={true} loading={false}/>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
