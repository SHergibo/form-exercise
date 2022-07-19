import Typography from '@mui/material/Typography';

export interface ErrormessageProps {
  errorMessage: string;
}

export function ErrorMessage({ errorMessage }: ErrormessageProps) {
  return (
    <Typography gutterBottom component="p" variant="error">
      {errorMessage}
    </Typography>
  );
}

export default ErrorMessage;
