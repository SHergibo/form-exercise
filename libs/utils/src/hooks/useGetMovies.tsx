import { Movie } from '@form-exercise/data/interface';
import axios, { AxiosError } from 'axios';
import { useQuery, UseQueryResult } from 'react-query';

interface UseGetMovies {
  searchBy: string;
}

interface Movies {
  Reponse: string;
  Search: Movie[];
  totalResults: string;
}

export function useGetMovies({
  searchBy,
}: UseGetMovies): UseQueryResult<Movies, AxiosError<unknown, any>> {
  const getMovies = async (): Promise<Movies> => {
    const { data } = await axios('http://www.omdbapi.com', {
      params: {
        type: 'movie',
        apiKey: process.env.NX_OMDB_API_KEY,
        s: searchBy,
      },
    });
    return data;
  };

  const query = useQuery<Movies, AxiosError>(['movies', searchBy], getMovies, {
    enabled: Boolean(searchBy),
  });

  return query;
}
