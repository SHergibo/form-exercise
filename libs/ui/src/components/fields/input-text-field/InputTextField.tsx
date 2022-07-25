import TextField from '@mui/material/TextField';
import { EnumSize, EnumVariant } from '@form-exercise/data/enum';
import { useController } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

export interface InputTextFieldProps {
  size?: EnumSize | undefined;
  id: string;
  type: string;
  label: string;
  variant?: EnumVariant | undefined;
  required?: boolean;
  disableError?: boolean;
}

export function InputTextField({
  size = undefined,
  id,
  type,
  label,
  variant,
  required = false,
  disableError = false,
}: InputTextFieldProps) {
  const { t } = useTranslation();
  const {
    field,
    fieldState: { error },
  } = useController({ name: id });

  const errorMessage = (error?.message && t(error.message)) || ' ';

  return (
    <TextField
      size={size}
      fullWidth
      error={!!error}
      id={id}
      type={type}
      label={label}
      variant={variant}
      helperText={disableError ? '' : errorMessage}
      required={required}
      {...field}
    />
  );
}

export default InputTextField;
