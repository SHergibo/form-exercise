import { i18nKeys } from '@form-exercise/i18n';
import { Typography } from '@mui/material';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { useQuery, useQueryClient } from 'react-query';

export function FilmList() {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  const getFilms = async () => {
    await axios(
      'http://www.omdbapi.com/?apikey=f9985b63&s=Batman&type=movie'
    ).then((response) => {
      console.log(response);
      return response.data;
    });
  };

  const films = useQuery('films', getFilms);

  return (
    <div>
      <Typography variant="h2">{t(i18nKeys.title.filmList)}</Typography>
    </div>
  );
}

export default FilmList;
