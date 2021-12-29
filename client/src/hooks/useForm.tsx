import { ChangeEvent, FormEvent, useState } from 'react';

export function useForm<T extends Record<string, string>>(
  initialState: T,
  cbFunc: () => void,
) {
  const [values, setValues] = useState<T>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    cbFunc();
  };

  const handleReset = () => setValues(initialState);

  return { values, handleReset, handleSubmit, handleChange };
}
