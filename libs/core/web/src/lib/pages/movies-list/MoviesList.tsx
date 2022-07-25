import { i18nKeys } from '@form-exercise/i18n';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import LoadingButton from '@mui/lab/LoadingButton';
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'react-i18next';
import { InputTextField, SmallInfoCard } from '@form-exercise/ui';
import { useGetMovies } from '@form-exercise/utils';
import { Movie } from '@form-exercise/data/interface';
import { EnumSize, EnumVariant } from '@form-exercise/data/enum';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';

interface FormValues {
  movieSearch: string;
}

export function MoviesList() {
  const { t } = useTranslation();
  const [searchMoviesBy, setSearchMoviesBy] = useState('');
  const { isLoading, data: movies } = useGetMovies({
    searchBy: searchMoviesBy,
  });

  const methods = useForm<FormValues>({
    defaultValues: { movieSearch: '' },
    mode: 'all',
  });

  const { handleSubmit } = methods;

  const searchMovies: SubmitHandler<FormValues> = (data): void => {
    setSearchMoviesBy(data.movieSearch);
  };

  return (
    <>
      <Grid container spacing={2} direction="row" component="div">
        <Grid item>
          <Typography variant="h2">{t(i18nKeys.title.moviesList)}</Typography>
        </Grid>
        <Grid item display="flex" alignItems="center">
          <FormProvider {...methods}>
            <Grid
              container
              columnSpacing={2}
              component="form"
              direction="row"
              alignItems="center"
              onSubmit={handleSubmit(searchMovies)}
            >
              <Grid item>
                <InputTextField
                  size={EnumSize.small}
                  id="movieSearch"
                  type="movieSearch"
                  label={`${t(i18nKeys.input.label.movie)}`}
                  variant={EnumVariant.outlined}
                  defaultHelperText={''}
                />
              </Grid>
              <Grid item>
                <LoadingButton
                  variant="outlined"
                  type="submit"
                  fullWidth
                  loading={isLoading}
                  endIcon={<SearchIcon />}
                  loadingPosition="end"
                >
                  {t(i18nKeys.button.search)}
                </LoadingButton>
              </Grid>
            </Grid>
          </FormProvider>
        </Grid>
      </Grid>
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
          {movies &&
            movies?.Search.map(({ Poster, Title, Year, imdbID }: Movie) => (
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
