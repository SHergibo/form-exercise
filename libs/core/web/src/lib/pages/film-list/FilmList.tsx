import { i18nKeys } from '@form-exercise/i18n';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';
import { SmallInfoCard } from '@form-exercise/ui';
import { useFetchOmdb } from '@form-exercise/utils';
import { Film } from '@form-exercise/data/interface';

export function FilmList() {
  const { t } = useTranslation();
  const { isLoading, data: films } = useFetchOmdb({ searchBy: 'Batman' });

  return (
    <>
      <Typography variant="h2">{t(i18nKeys.title.filmList)}</Typography>
      {!isLoading && (
        <Grid container spacing={2}>
          {films?.Search.map((film: Film) => (
            <Grid item xs={2} key={film.imdbID}>
              <SmallInfoCard
                image={film.Poster}
                alt={film.Title}
                title={`${film.Title} - ${film.Year}`}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}

export default FilmList;
