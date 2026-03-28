import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export interface Media {
  id: number;
  tmdb_id: number;
  title: string;
  media_type: 'movie' | 'series';
  poster_url: string;
  backdrop_url: string;
  rating: number;
  release_date: string;
  overview: string;
  genres: string[];
  director?: string;
  cast_members: string[];
  producers: string[];
  related_tmdb_ids: number[];
  popularity: number;
  harvested_at: string;
}

export interface UseMediaOptions {
  type?: 'movie' | 'series';
  limit?: number;
  sort?: 'newest' | 'trending' | 'rating';
}

export function useMedia(options: UseMediaOptions = {}) {
  const { type, limit = 20, sort = 'trending' } = options;
  const [data, setData] = useState<Media[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        let query = supabase.from('movies').select('*');

        if (type) {
          query = query.eq('media_type', type);
        }

        if (sort === 'trending') {
          query = query.order('popularity', { ascending: false });
        } else if (sort === 'rating') {
          query = query.order('rating', { ascending: false });
        } else {
          query = query.order('harvested_at', { ascending: false });
        }

        const { data: result, error: fetchError } = await query.limit(limit);

        if (fetchError) throw fetchError;
        setData(result || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [type, limit, sort]);

  return { data, loading, error };
}

export function useMediaDetails(id: string | number) {
  const [data, setData] = useState<Media | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      if (!id) return;
      setLoading(true);
      try {
        const { data: result, error: fetchError } = await supabase
          .from('movies')
          .select('*')
          .or(`id.eq.${id},tmdb_id.eq.${id}`)
          .single();

        if (fetchError) throw fetchError;
        setData(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  return { data, loading, error };
}
