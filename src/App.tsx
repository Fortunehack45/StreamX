/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Movies } from "./pages/Movies";
import { Series } from "./pages/Series";
import { Audio } from "./pages/Audio";
import { Podcasts } from "./pages/Podcasts";
import { SearchPage } from "./pages/Search";
import { Downloader } from "./pages/Downloader";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="series" element={<Series />} />
          <Route path="audio" element={<Audio />} />
          <Route path="podcasts" element={<Podcasts />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="downloader" element={<Downloader />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
