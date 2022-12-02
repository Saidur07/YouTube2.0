import React from "react";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return <Loader />;
  
  return (
    <div className="grid grid-cols-3 gap-4" direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
     
      {videos.map((item, idx) => (
        <div key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </div>
      ))}
    </div>
  );
}

export default Videos;
