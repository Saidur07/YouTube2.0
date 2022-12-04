import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import { demoThumbnailUrl, demoVideoUrl,  demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video: { id: {  videoId }, snippet } }) => {
  var currentDate = new Date().toISOString();

  const date2 = snippet?.publishTime
  
  const DAY_UNIT_IN_MILLISECONDS = 24 * 3600 * 1000
  
  const diffInMilliseconds = new Date(currentDate).getTime() - new Date(date2).getTime()
  const diffInDays = diffInMilliseconds / DAY_UNIT_IN_MILLISECONDS
  return(
  <Card sx={{ width: { xs: '100%', sm: '358px', md: "330px", }, boxShadow: "none", borderRadius: 0 }} className="group cursor-pointer">
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` } className="relative "> 
      
       <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title}  className=""
        sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} 
      />
    <div className='w-full bg-slate-900 bg-opacity-70 h-10 group-hover:h-full text-white grid place-items-center transition-all text-3xl group-hover:text-5xl  absolute bottom-0'>
    <PlaylistPlayIcon  fontSize="inherit"/>
    </div>
    </Link>
    <CardContent sx={{  height: '130px' }} className="bg-slate-900 ">
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
         { snippet?.title?.length > 60 ? snippet?.title.slice(0, 60) + "..." : snippet?.title  }
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
        <Typography variant="subtitle2" className='text-gray-300'>
            <span className='text-gray-500 '>Playlist by</span> {" "}
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
         {" "}・{" "}{
            Math.round(diffInDays) < 1 ?
             "Today"  :  Math.round(diffInDays) === 1 ? "Yesterday" :Math.round(diffInDays) < 29 ? Math.round(diffInDays) + " Days ago" :Math.round(diffInDays) < 365 ? Math.round(Math.round(diffInDays) / 30) + ` ${Math.round(Math.round(diffInDays) / 30) <= 1 ? " Month" : " Months"} ago` :Math.round(diffInDays) > 365 ? Math.round(Math.round(diffInDays) / 365) + `${Math.round(Math.round(diffInDays) / 365) <= 1 ? " Year" : " Years"}  ago` :
             ""
          } 
        </Typography>
      </Link>
    </CardContent>
  </Card>
)};

export default VideoCard