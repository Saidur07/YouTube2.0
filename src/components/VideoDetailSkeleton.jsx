import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
const VideoDetailSkeleton = () => {
  return (
    <div className="  rounded container bg-base-100  ">
      <SkeletonTheme  baseColor="#ddd" highlightColor="#6a6a6a">
        <div className=" w-full">
          <Skeleton className="rounded-lg" height={700}></Skeleton>
        </div>
        <p className=" mt-3">
          <Skeleton className="rounded-lg" height={30}></Skeleton>
        </p>
        <p className=" mt-3">
          <Skeleton className="rounded-lg" height={20}></Skeleton>
        </p>
        <p className=" mt-3">
          <Skeleton className="rounded-lg" height={10}></Skeleton>
        </p>
        
      </SkeletonTheme>
    </div>
  );
};

export default VideoDetailSkeleton;
