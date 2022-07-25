import { i18nKeys } from '@form-exercise/i18n';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import { useTranslation } from 'react-i18next';
import { SmallInfoCard } from '@form-exercise/ui';
import { useGetMovies } from '@form-exercise/utils';
import { Movie } from '@form-exercise/data/interface';

export function MoviesList() {
  const { t } = useTranslation();
  const { isLoading, data: movies } = useGetMovies({ searchBy: 'Batman' });

  return (
    <>
      <Typography variant="h2">{t(i18nKeys.title.moviesList)}</Typography>
      {isLoading ? (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: '100vh' }}
        >
          <Grid item>
            <CircularProgress />
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={2}>
          {movies?.Search.map(({ Poster, Title, Year, imdbID }: Movie) => (
            <Grid item xs={2} key={imdbID}>
              <SmallInfoCard
                image={Poster}
                alt={Title}
                title={`${Title} - ${Year}`}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}

export default MoviesList;
