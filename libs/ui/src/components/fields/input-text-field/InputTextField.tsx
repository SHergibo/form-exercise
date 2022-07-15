import TextField from '@mui/material/TextField';
import { EnumSize, EnumVariant } from '@form-exercise/data/enum';
import { UseFormRegister } from 'react-hook-form';

export interface InputTextFieldProps {
  size?: EnumSize | undefined;
  error?: string;
  id: string;
  type: string;
  label: string;
  variant?: EnumVariant | undefined;
  register: UseFormRegister<any>;
}

export function InputTextField({
  size = undefined,
  error,
  id,
  type,
  label,
  variant,
  register,
}: InputTextFieldProps) {
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
      {...register(id)}
    />
  );
}

export default InputTextField;
