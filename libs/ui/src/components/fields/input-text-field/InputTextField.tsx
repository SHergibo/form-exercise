import TextField from '@mui/material/TextField';
import { EnumSize, EnumVariant } from '@form-exercise/data/enum';
import { useController } from 'react-hook-form';

export interface InputTextFieldProps {
  size?: EnumSize | undefined;
  error?: string;
  id: string;
  type: string;
  label: string;
  variant?: EnumVariant | undefined;
  required?: boolean;
}

export function InputTextField({
  size = undefined,
  error,
  id,
  type,
  label,
  variant,
  required = false,
}: InputTextFieldProps) {
  const { field } = useController({ name: id });

  return (
    <TextField
      size={size}
      fullWidth
      error={error ? true : false}
      id={id}
      type={type}
      label={label}
      variant={variant}
      helperText={error ? error : ' '}
      required={required}
      {...field}
    />
  );
}

export default InputTextField;
