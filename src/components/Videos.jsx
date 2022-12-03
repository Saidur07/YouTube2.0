import React from "react";

import { ChannelCard, Loader, VideoCard } from "./";
import VideoSkeleton from "./VideoSkeleton";

const Videos = ({ videos }) => {
  if(!videos?.length) return (<div className="grid grid-cols-3 gap-4" >
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
  </div>);
  console.log(videos)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4" >
     
      {videos.map((item, index) => (
        <div key={index}>
          {item?.id?.videoId && <VideoCard video={item} /> }
          {item?.id?.channelId && <ChannelCard channelDetail={item} />}
          {item?.id?.playlistId && <ChannelCard channelDetail={item} />}
        </div>
      ))}
    </div>
  );
}

export default Videos;
