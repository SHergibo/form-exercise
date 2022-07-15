import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface FormValues {
  email: string;
  password: string;
}

const formValuesSchema = yup
  .object({
    email: yup.string().email('Email non valide!').required('Email requis!'),
    password: yup
      .string()
      .min(6, 'Mot de passe trop court!')
      .required('Mot de passe requis!'),
  })
  .required();

export function Login() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(formValuesSchema) });

  const onSubmit: SubmitHandler<FormValues> = (data): void => {
    console.log(data);
    // navigate('/admin');
  };

  const logout = (): void => {};

  return (
    <div>
      <h2>Connexion</h2>

      {!isLoggedIn && (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div>
                <div>
                  <label htmlFor="email">Email *</label>
                  <input id="email" type="email" {...register('email')} />
                </div>
                <p>{errors.email?.message}</p>
              </div>

              <div>
                <div>
                  <label htmlFor="password">Mot de passe *</label>
                  <input
                    id="password"
                    type="password"
                    {...register('password')}
                  />
                </div>
                <p>{errors.password?.message}</p>
              </div>

              <input type="submit" value={'Connexion'} />
            </div>
          </form>

          <p>{''}</p>
        </>
      )}

      {isLoggedIn && <button onClick={logout}>{'Déconnexion'}</button>}
    </div>
  );
}

export default Login;
