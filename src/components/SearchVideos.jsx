import React from "react";

import { ChannelCard, } from "./";
import SearchVideoCard from "./SearchVideoCard";
import VideoSkeleton from "./VideoSkeleton";
// import VideoSkeleton from "./SearchVideoSkeleton";

const SearchVideos = ({ videos}) => {
  if(!videos?.length ) return (<div className={"space-y-2 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-4"} >
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
    <div className={ "grid  grid-cols-1  gap-4"} >
      {videos.map((item, index) => (
        <div key={index}>
          {item?.id?.videoId && <SearchVideoCard video={item} search={true}/> }
          {item?.id?.channelId && <ChannelCard channelDetail={item} search={true}/>}
          {item?.id?.playlistId && <ChannelCard channelDetail={item} search={true}/>}
        </div>
      ))}
    </div>
  );
}

export default SearchVideos;
