import { Movie } from '@form-exercise/data/interface';
import axios, { AxiosError } from 'axios';
import { useQuery } from 'react-query';

interface UseGetMovies {
  searchBy: string;
}

interface Movies {
  Reponse: string;
  Search: Movie[];
  totalResults: string;
}

export function useGetMovies({ searchBy }: UseGetMovies) {
  const getMovies = async (): Promise<Movies> => {
    const { data } = await axios(
      `http://www.omdbapi.com/?apikey=${process.env['NX_OMDB_API_KEY']}&s=${searchBy}&type=movie`
    );
    return data;
  };

  const { isLoading, data, error } = useQuery<Movies, AxiosError>(
    'movies',
    getMovies
  );

  return { isLoading, data, error };
}
