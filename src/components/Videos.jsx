import React from "react";

import { ChannelCard,  VideoCard } from "./";
import VideoSkeleton from "./VideoSkeleton";
import PlaylistCard from "./PlaylistCard";

const Videos = ({ videos, single, loading}) => {
  if(!videos?.length && !loading) return (<div className={single ? "space-y-2" : "grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4"} >
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
  return (
    <div className={single ? "space-y-2" : "grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4"} >
     
      {videos.map((item, index) => (
        <div key={index}>
          {item?.id?.videoId && <VideoCard video={item} /> }
          {item?.id?.channelId && <ChannelCard channelDetail={item} />}
          {item?.id?.playlistId && <PlaylistCard video={item} />}
          {item?.id?.playlistId && console.log(item)}
        </div>
      ))}
    </div>
  );
}

export default Videos;
