import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./assets/component/Oauth/Login";
import Register from "./assets/component/Oauth/Register";
import SearchResult from "./Pages/SearchResult";
import DetailMovie from "./Pages/DetailMovie";
import UpComingMain from "./Pages/UpcomingMain";
import TopRatedMain from "./Pages/TopRatedMain";
import NowPlaying from "./Pages/NowPlayingMain";
import MoviePopularMain from "./Pages/MoviePopularMain";
import AuthMe from "./assets/component/Oauth/AuthMe";


// const GOOGLE_CLIENT_ID =
//   "635723340510-c2nuqkmr160hd3jis6manq784v4ih5at.apps.googleusercontent.com";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Auth-me" element={<AuthMe />} />
        <Route path="/src" element={<SearchResult />} />
        <Route path="/DetailMovie/:id" element={<DetailMovie />} />
        <Route path="/UpComing" element={<UpComingMain />} />
        <Route path="/TopRated" element={<TopRatedMain />} />
        <Route path="/NowPlaying" element={<NowPlaying />} />
        <Route path="/Popular" element={<MoviePopularMain />} />
      </Routes>
    </Router>
  );
}
