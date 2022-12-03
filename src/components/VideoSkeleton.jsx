import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
const VideoSkeleton = () => {
  return (
    <div className="card w-full  rounded container bg-base-100  lg:hover:scale-[1.01] transition-all cursor-pointer">
      <SkeletonTheme  baseColor="#ddd" highlightColor="#6a6a6a">
        <div className=" w-full">
          <Skeleton className="rounded-lg" height={180}></Skeleton>
        </div>
        <p className=" mt-3">
          <Skeleton className="rounded-lg" height={10}></Skeleton>
          <Skeleton className="rounded-lg" height={10}></Skeleton>
        </p>
        <p className="flex justify-between items-center text-gray-500">
          <Skeleton className="rounded-lg" width={160}></Skeleton>
          ・
          <Skeleton className="rounded-lg" width={160}></Skeleton>
        </p>
      </SkeletonTheme>
    </div>
  );
};

export default VideoSkeleton;
