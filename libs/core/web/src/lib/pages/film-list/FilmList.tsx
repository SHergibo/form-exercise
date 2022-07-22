import { i18nKeys } from '@form-exercise/i18n';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import axios, { AxiosError } from 'axios';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

interface Film {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

interface Films {
  Reponse: string;
  Search: Film[];
  totalResults: string;
}

export function FilmList() {
  const { t } = useTranslation();

  const getFilms = async (): Promise<Films> => {
    const { data } = await axios(
      `http://www.omdbapi.com/?apikey=${process.env['NX_OMDB_API_KEY']}&s=Batman&type=movie`
    );
    return data;
  };

  const { isLoading, data: films } = useQuery<Films, AxiosError>(
    'films',
    getFilms
  );

  return (
    <>
      <Typography variant="h2">{t(i18nKeys.title.filmList)}</Typography>
      {!isLoading && (
        <Grid container spacing={2}>
          {films?.Search.map((film: Film) => (
            <Grid item xs={2} key={film.imdbID}>
              <Card>
                <CardMedia
                  component="img"
                  image={film.Poster}
                  alt={film.Title}
                />
                <CardContent>
                  <Typography variant="h6">
                    {film.Title} - {film.Year}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}

export default FilmList;
