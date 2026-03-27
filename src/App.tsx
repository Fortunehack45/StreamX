/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Movies } from "./pages/Movies";
import { MovieDetails } from "./pages/MovieDetails";
import { Series } from "./pages/Series";
import { SeriesDetails } from "./pages/SeriesDetails";
import { Audio } from "./pages/Audio";
import { Podcasts } from "./pages/Podcasts";
import { SearchPage } from "./pages/Search";
import { Downloader } from "./pages/Downloader";
import { Profile } from "./pages/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />} />
          <Route path="series" element={<Series />} />
          <Route path="series/:id" element={<SeriesDetails />} />
          <Route path="audio" element={<Audio />} />
          <Route path="podcasts" element={<Podcasts />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="downloader" element={<Downloader />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
