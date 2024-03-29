import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Videos, Loader } from "./";
import VideoDetailSkeleton from "./VideoDetailSkeleton"
import { fetchFromAPI } from "../utils/fetchFromAPI";
import VideoSkeleton from "./VideoSkeleton";
import StreetviewIcon from '@mui/icons-material/Streetview';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import Comments from "./Comments";
const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const [showMore, setShowMore] = useState(false)
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id]);

  if(!videoDetail?.snippet || !videos?.length) return (<div className="2xl:grid grid-cols-5  ">
  <div className="2xl:col-span-4 2xl:mr-2"><VideoDetailSkeleton/> </div>
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
  const { snippet: { title, channelId, channelTitle, publishedAt, description }, statistics: { viewCount, likeCount, commentCount } } = videoDetail;
  var currentDate = new Date().toISOString();
  const date2 = publishedAt
  const DAY_UNIT_IN_MILLISECONDS = 24 * 3600 * 1000
  const diffInMilliseconds = new Date(currentDate).getTime() - new Date(date2).getTime()
  const diffInDays = diffInMilliseconds / DAY_UNIT_IN_MILLISECONDS
console.log(videoDetail)
  return (
    <div className="min-h-[95vh] w-full">
     
      <div className="2xl:grid grid-cols-5 ">
        
        <div className="2xl:col-span-4 2xl:mr-2">
     
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <div className="flex flex-col md:flex-row md:justify-between text-white py-1 px-2 space-y-4 md:space-y-0"  >
              <Link to={`/channel/${channelId}`}>
                <p className="text-xl text-white font-bold flex items-center  md:justify-center" >
                  <div className="w-10 h-10 rounded-full bg-white mx-2 "></div>
                  {channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </p>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  <StreetviewIcon className="cursor-pointer mx-2"/>
                  {parseInt(viewCount).toLocaleString().toLocaleString('en-US')} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  <ThumbUpIcon className="cursor-pointer mx-2"/>
                  {parseInt(likeCount).toLocaleString().toLocaleString('en-US')} likes
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  <CommentIcon className="cursor-pointer mx-2"/>
                  {parseInt(commentCount).toLocaleString().toLocaleString('en-US')} Comments
                </Typography>
              </Stack>
            </div>
           <div className="w-full bg-[#d6dfe631] transition-all hover:bg-[#e5e9ec46] shadow-md text-gray-300 rounded-lg my-4 cursor-pointer p-4 mx-2" onClick={()=>setShowMore(!showMore)}>
            <div className="flex">
            <p>{viewCount && (
          <Typography sx={{ fontSize: '16px', fontWeight: 600,  }}>
            {parseFloat(viewCount).toFixed(1) > 1000000 ?parseFloat(viewCount / 1000000).toFixed(1) +"M" :parseFloat(viewCount).toFixed(1) > 1000 ? parseFloat(viewCount / 1000).toFixed(1)+"K" : parseFloat(viewCount).toLocaleString('en-US') } Views
          </Typography>
          
        )}</p>{" "}・{" "}
            <p className="text-base font-semibold text-gray-300">{
            Math.round(diffInDays) < 1 ?
             "Today"  :  Math.round(diffInDays) === 1 ? "Yesterday" :Math.round(diffInDays) < 29 ? Math.round(diffInDays) + " Days ago" :Math.round(diffInDays) < 365 ? Math.round(Math.round(diffInDays) / 30) + ` ${Math.round(Math.round(diffInDays) / 30) <= 1 ? " Month" : " Months"} ago` :Math.round(diffInDays) > 365 ? Math.round(Math.round(diffInDays) / 365) + `${Math.round(Math.round(diffInDays) / 365) <= 1 ? " Year" : " Years"}  ago` :
             ""
          } </p>
            </div>
<p className="my-4 2xl:max-w-[70vw] break-words">{!showMore && description?.length > 500 ?  `${description?.slice(0,500)} ...` :description }</p>
<p className="font-semibold cursor-pointer hover:bg-[#d6dfe631] inline p-1 rounded-lg transition-all duration-150" onClick={()=>setShowMore(!showMore)}>{description?.length > 500 && !showMore ? "Show more" :description?.length < 500 ? "" : "Show less" }</p>
           </div>
          </Box>
          <Comments videoID={videoDetail?.id}></Comments>
        </div>
        <div>
        <p className="text-3xl font-bold mb-2 text-white">
          <span style={{ color: "#1b9ff1" }} className="gradient-text">Related</span> videos
        </p>
        <div className="flex justify-center items-center px-2 py-1 "  >
          <Videos videos={videos} single={true} loading={false}/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
