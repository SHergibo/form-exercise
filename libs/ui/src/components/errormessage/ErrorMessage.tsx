import Typography from '@mui/material/Typography';

export interface ErrormessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrormessageProps) {
  return (
    <Typography gutterBottom component="p" variant="error">
      {message}
    </Typography>
  );
}

export default ErrorMessage;
