import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import { i18nKeys } from '@form-exercise/i18n';

export function Admin() {
  const { t } = useTranslation();
  const [fakeError, setFakeError] = useState(false);

  useEffect(() => {
    if (fakeError) {
      throw new Error('I crashed!');
    }
  }, [fakeError]);

  return (
    <Box component="div">
      <Typography variant="h2">{t(i18nKeys.menu.title.admin)}</Typography>

      <Button
        variant="contained"
        onClick={() => {
          setFakeError(true);
        }}
      >
        {t(i18nKeys.button.generateAnError)}
      </Button>
    </Box>
  );
}

export default Admin;
