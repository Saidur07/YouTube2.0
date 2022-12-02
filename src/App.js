import { Routes, Route, useLocation } from "react-router-dom";

import {
  ChannelDetail,
  VideoDetail,
  SearchFeed,
  Navbar,
  Feed,
} from "./components";
import { useEffect, useState } from "react";
import Splash from "./components/Splash";
import { Fade } from "react-reveal";
const App = () => {
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 7000);
  }, []);
  return isLoading ? (
    <Fade big opposite when={isLoading}>
      <Splash></Splash>
    </Fade>
  ) : (
    <div className={"bg-slate-900 grid place-items-center "}>
      <div className={location?.pathname !== "/splash" && "max-w-7xl"}>
        {location?.pathname !== "/splash" && <Navbar />}
        <Routes>
          <Route path="/splash" element={<Splash />} />
          <Route exact path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
