import { Routes, Route, useLocation } from "react-router-dom";

import {
  ChannelDetail,
  VideoDetail,
  SearchFeed,
  Navbar,
  Feed,
} from "./components";
import NotFound from "./components/NotFound";
import { useEffect, useState } from "react";
import Splash from "./components/Splash";
import { Fade } from "react-reveal";
const App = () => {
  const location = useLocation();
  const [collapse, setCollapse] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
  }, []);
  console.log(location?.pathname?.includes("/video/"));
  return isLoading ? (
    <Fade big opposite when={isLoading}>
      <Splash></Splash>
    </Fade>
  ) : (
    <div className={"bg-slate-900  flex items-center justify-center "}>
      <div
        className={
          location?.pathname?.includes("/video/")
            ? " max-w-[1700px]"
            : "max-w-[1440px]"
        }
      >
        {location?.pathname !== "/splash" && <Navbar collapse={collapse} />}
        <Routes>
          <Route
            exact
            path="/"
            element={<Feed collapse={collapse} setCollapse={setCollapse} />}
          />
          <Route path="/splash" element={<Splash />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route
            path="/channel/:id"
            element={
              <ChannelDetail collapse={collapse} setCollapse={setCollapse} />
            }
          />
          <Route
            path="/search/:searchTerm"
            element={
              <SearchFeed collapse={collapse} setCollapse={setCollapse} />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
