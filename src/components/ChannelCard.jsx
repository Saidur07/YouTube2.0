import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop, shortDesc, search, detailed }) => {
return(
 
  <Box
    sx={{
      boxShadow: 'none',
     
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // width: { xs: '356px', md: '320px' },
      height: '326px',
      margin: 'auto',
      marginTop,
    }}
    className={search ? "border-y-2 border-gray-600 w-full rounded-none" : "w-[320px] rounded-3xl "}
  >
    <Link to={!detailed ? `/channel/${channelDetail?.id?.channelId}` :`/channel/${channelDetail?.id}`}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems: "center", textAlign: 'center', color: '#fff' }}>
        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
        />
        <Typography variant="h6">
          {channelDetail?.snippet?.title}
          <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
        </Typography>
        {detailed &&
         <Typography variant="subtitle2" color="gray">
          {channelDetail?.snippet?.customUrl}
        </Typography>
        }
       
        <Typography variant="subtitle2" color="gray">
         {
          shortDesc ? "" : channelDetail?.snippet?.description
         } 
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount) > 1000 ? parseInt(channelDetail?.statistics?.subscriberCount / 1000).toLocaleString('en-US')  +"K" : parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
          
      </CardContent>
    </Link>
  </Box>
)};

export default ChannelCard;
