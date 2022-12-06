import { Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const Comments = ({videoID}) => {
    const [comments, setComments] = useState([])
    const [quantity, setQuantity] = useState(5)
    useEffect(() => {
        fetchFromAPI(`commentThreads?part=snippet&videoId=${videoID}`)
          .then((data) => setComments(data?.items))
      }, [videoID]);
      console.log(comments)
     
    return (
        <><div className='px-2 hidden 2xl:block'>
        <p className='text-xl font-semibold text-white '>{comments?.length} Comments</p>
        {comments?.map((item, index) => {
          const { snippet: { topLevelComment: { snippet }, totalReplyCount } } = item;
          var currentDate = new Date().toISOString();

          const date2 = snippet?.publishedAt;

          const DAY_UNIT_IN_MILLISECONDS = 24 * 3600 * 1000;

          const diffInMilliseconds = new Date(currentDate).getTime() - new Date(date2).getTime();
          const diffInDays = diffInMilliseconds / DAY_UNIT_IN_MILLISECONDS;
          return (
            <div key={index} className=" my-4">

              <Link to={`/channel/${snippet?.authorChannelId?.value}`}>
                <p className="text-md text-gray-300 font-semibold flex items-center mb-1">
                  <div className="w-10 h-10 rounded-full bg-white mx-2"><img src={snippet?.authorProfileImageUrl} alt="" className='w-10 h-10 rounded-full' /></div>
                  {snippet?.authorDisplayName}{" "}・{" "}{Math.round(diffInDays) < 1 ?
                    "Today" : Math.round(diffInDays) === 1 ? "Yesterday" : Math.round(diffInDays) < 29 ? Math.round(diffInDays) + " Days ago" : Math.round(diffInDays) < 365 ? Math.round(Math.round(diffInDays) / 30) + ` ${Math.round(Math.round(diffInDays) / 30) <= 1 ? " Month" : " Months"} ago` : Math.round(diffInDays) > 365 ? Math.round(Math.round(diffInDays) / 365) + `${Math.round(Math.round(diffInDays) / 365) <= 1 ? " Year" : " Years"}  ago` :
                      ""} {snippet?.publishedAt !== snippet?.updatedAt && "(edited)"}
                </p>
              </Link>
              <div className='my-2'>
                <p className='text-gray-300 mx-4  max-w-[70vw]'>{snippet?.textDisplay}</p>
                <Stack direction="row" gap="20px" alignItems="center" className="mt-2 ">

                  <Typography variant="body1" sx={{ opacity: 0.7, color: "white" }}>
                    <ThumbUpIcon className="mx-2 cursor-pointer" />
                    {(snippet?.likeCount) < 2 ? `${snippet?.likeCount} like` : `${snippet?.likeCount} likes`}
                  </Typography>

                  <Typography variant="body1" sx={{ opacity: 0.7, color: "white" }}>
                    <ThumbDownIcon className="mx-2 cursor-pointer" />
                    dislike
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.7, color: "white" }}>
                    <CommentIcon className="mx-2 cursor-pointer" />
                    {(totalReplyCount) < 2 ? `${totalReplyCount} reply` : `${snippet?.likeCount} replies`}
                  </Typography>
                </Stack>
              </div>
            </div>
          );
        })}
     
      </div>
      <div className='px-2 block 2xl:hidden'>
          <p className='text-xl font-semibold text-white '>{comments?.length} Comments</p>
          {comments?.slice(0, quantity)?.map((item, index) => {
            const { snippet: { topLevelComment: { snippet }, totalReplyCount } } = item;
            var currentDate = new Date().toISOString();

            const date2 = snippet?.publishedAt;

            const DAY_UNIT_IN_MILLISECONDS = 24 * 3600 * 1000;

            const diffInMilliseconds = new Date(currentDate).getTime() - new Date(date2).getTime();
            const diffInDays = diffInMilliseconds / DAY_UNIT_IN_MILLISECONDS;
            return (
              <div key={index} className=" my-4">

                <Link to={`/channel/${snippet?.authorChannelId?.value}`}>
                  <p className="text-md text-gray-300 font-semibold flex items-center mb-1">
                    <div className="w-10 h-10 rounded-full bg-white mx-2"><img src={snippet?.authorProfileImageUrl} alt="" className='w-10 h-10 rounded-full' /></div>
                    {snippet?.authorDisplayName}{" "}・{" "}{Math.round(diffInDays) < 1 ?
                      "Today" : Math.round(diffInDays) === 1 ? "Yesterday" : Math.round(diffInDays) < 29 ? Math.round(diffInDays) + " Days ago" : Math.round(diffInDays) < 365 ? Math.round(Math.round(diffInDays) / 30) + ` ${Math.round(Math.round(diffInDays) / 30) <= 1 ? " Month" : " Months"} ago` : Math.round(diffInDays) > 365 ? Math.round(Math.round(diffInDays) / 365) + `${Math.round(Math.round(diffInDays) / 365) <= 1 ? " Year" : " Years"}  ago` :
                        ""} {snippet?.publishedAt !== snippet?.updatedAt && "(edited)"}
                  </p>
                </Link>
                <div className='my-2'>
                  <p className='text-gray-300 mx-4  max-w-[90vw] break-words'>{snippet?.textDisplay}</p>
                  <Stack direction="row" gap="20px" alignItems="center" className="mt-2 ">

                    <Typography variant="body1" sx={{ opacity: 0.7, color: "white" }}>
                      <ThumbUpIcon className="mx-2 cursor-pointer" />
                      {(snippet?.likeCount) < 2 ? `${snippet?.likeCount} like` : `${snippet?.likeCount} likes`}
                    </Typography>

                    <Typography variant="body1" sx={{ opacity: 0.7, color: "white" }}>
                      <ThumbDownIcon className="mx-2 cursor-pointer" />
                      dislike
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.7, color: "white" }}>
                      <CommentIcon className="mx-2 cursor-pointer" />
                      {(totalReplyCount) < 2 ? `${totalReplyCount} reply` : `${snippet?.likeCount} replies`}
                    </Typography>
                  </Stack>
                </div>
              </div>
            );
          })}
          <div className='w-full flex items-center justify-center'>

          <Button variant="contained" className=' !bg-transparent' onClick={() => setQuantity(quantity + 5)}>Show more</Button>
          </div>
        </div></>
    );
};

export default Comments;