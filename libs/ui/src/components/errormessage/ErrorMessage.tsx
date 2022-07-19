import Typography from '@mui/material/Typography';

export interface ErrormessageProps {
  errorMessage: string;
}

export function ErrorMessage({ errorMessage }: ErrormessageProps) {
  return (
    <Typography
      gutterBottom
      variant="body1"
      sx={{
        color: '#d32f2f',
        height: '1rem',
      }}
    >
      {errorMessage}
    </Typography>
  );
}

export default ErrorMessage;
