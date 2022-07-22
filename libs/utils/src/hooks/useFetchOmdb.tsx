import { Film } from '@form-exercise/data/interface';
import axios, { AxiosError } from 'axios';
import { useQuery } from 'react-query';

interface UseFetchOmdb {
  searchBy: string;
  type?: string;
}

interface Films {
  Reponse: string;
  Search: Film[];
  totalResults: string;
}

export function useFetchOmdb({ searchBy, type = 'movie' }: UseFetchOmdb) {
  const getFilms = async (): Promise<Films> => {
    const { data } = await axios(
      `http://www.omdbapi.com/?apikey=${process.env['NX_OMDB_API_KEY']}&s=${searchBy}&type=${type}`
    );
    return data;
  };

  const { isLoading, data, error } = useQuery<Films, AxiosError>(
    'films',
    getFilms
  );

  return { isLoading, data, error };
}
