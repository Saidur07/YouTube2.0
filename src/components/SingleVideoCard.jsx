import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { demoThumbnailUrl, demoVideoUrl,  demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  var currentDate = new Date().toISOString();

  const date2 = snippet?.publishTime
  
  const DAY_UNIT_IN_MILLISECONDS = 24 * 3600 * 1000
  
  const diffInMilliseconds = new Date(currentDate).getTime() - new Date(date2).getTime()
  const diffInDays = diffInMilliseconds / DAY_UNIT_IN_MILLISECONDS
  return(
    <><Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`} className="group transition-all">

<div  className=" md:w-[80vw]  cursor-pointer flex flex-col md:flex-row bg-slate-900  2xl:hidden ">
     
     <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` } className="relative "> 
         
         <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title}  className=""
          sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} 
        />
      <div className='w-[30%] group-hover:bg-slate-900 bg-opacity-50  flex h-0 group-hover:h-10 text-transparent group-hover:text-slate-300  items-center justify-center rounded-br-xl transition-all text-3xl  absolute top-0 left-0'> 
      <PlayArrowIcon  fontSize="inherit"/>
     
      <span className='text-lg'> Play</span>
      </div>
      </Link>
       
       <CardContent sx={{  height: '130px' }} className="">
         <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
           <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            { snippet?.title}
           </Typography>
         </Link>
         <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
           <Typography variant="subtitle2" color="gray">
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
     </div>
      

             <Card sx={{ width: { xs: '100%', sm: '358px', md: "330px", }, boxShadow: "none", borderRadius: 0 }} className="cursor-pointer hidden 2xl:block">
                  <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`} className="relative ">

                      <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} className=""
                          sx={{ width: { xs: '100%', sm: '358px' }, height: 180 }} />
                      <div className='w-[30%] group-hover:bg-slate-900 bg-opacity-50  flex h-0 group-hover:h-10 text-transparent group-hover:text-slate-300  items-center justify-center rounded-bl-xl transition-all text-3xl  absolute top-0 right-0'>
                          <PlayArrowIcon fontSize="inherit" />

                          <span className='text-lg'> Play</span>
                      </div>
                  </Link>
                  <CardContent sx={{ height: '130px' }} className=" bg-slate-900 ">
                      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
                              {snippet?.title?.length > 70 ? snippet?.title.slice(0, 70) + "..." : snippet?.title}
                          </Typography>
                      </Link>
                      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                          <Typography variant="subtitle2" color="gray">
                              {snippet?.channelTitle || demoChannelTitle}
                              <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                              {" "}・{" "}{Math.round(diffInDays) < 1 ?
                                  "Today" : Math.round(diffInDays) === 1 ? "Yesterday" : Math.round(diffInDays) < 29 ? Math.round(diffInDays) + " Days ago" : Math.round(diffInDays) < 365 ? Math.round(Math.round(diffInDays) / 30) + ` ${Math.round(Math.round(diffInDays) / 30) <= 1 ? " Month" : " Months"} ago` : Math.round(diffInDays) > 365 ? Math.round(Math.round(diffInDays) / 365) + `${Math.round(Math.round(diffInDays) / 365) <= 1 ? " Year" : " Years"}  ago` :
                                      ""}
                          </Typography>
                      </Link>
                  </CardContent>
              </Card>
         

          
          </Link></>
)};

export default VideoCard