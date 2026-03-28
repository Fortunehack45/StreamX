/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { Layout } from "./components/Layout";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { Movies } from "./pages/Movies";
import { MovieDetails } from "./pages/MovieDetails";
import { Series } from "./pages/Series";
import { SeriesDetails } from "./pages/SeriesDetails";
import { Audio } from "./pages/Audio";
import { Podcasts } from "./pages/Podcasts";
import { PodcastDetails } from "./pages/PodcastDetails";
import { MusicDetails } from "./pages/MusicDetails";
import { SearchPage } from "./pages/Search";
import { Downloader } from "./pages/Downloader";
import { Profile } from "./pages/Profile";
import SupabaseTest from "./pages/SupabaseTest";

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 1.02 }}
    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} {...{ key: location.pathname }}>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageTransition><Home /></PageTransition>} />
          <Route path="movies" element={<PageTransition><Movies /></PageTransition>} />
          <Route path="movies/:id" element={<PageTransition><MovieDetails /></PageTransition>} />
          <Route path="series" element={<PageTransition><Series /></PageTransition>} />
          <Route path="series/:id" element={<PageTransition><SeriesDetails /></PageTransition>} />
          <Route path="audio" element={<PageTransition><Audio /></PageTransition>} />
          <Route path="audio/:id" element={<PageTransition><MusicDetails /></PageTransition>} />
          <Route path="podcasts" element={<PageTransition><Podcasts /></PageTransition>} />
          <Route path="podcasts/:id" element={<PageTransition><PodcastDetails /></PageTransition>} />
          <Route path="search" element={<PageTransition><SearchPage /></PageTransition>} />
          <Route path="downloader" element={<PageTransition><Downloader /></PageTransition>} />
          <Route path="profile" element={<PageTransition><Profile /></PageTransition>} />
          <Route path="supabase-test" element={<PageTransition><SupabaseTest /></PageTransition>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
