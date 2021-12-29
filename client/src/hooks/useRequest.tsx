import axios, { AxiosError } from 'axios';
import { useState } from 'react';

type Method = 'get' | 'delete' | 'post' | 'put' | 'patch';

interface IUseRequest {
  url: string;
  method: Method;
  body?: any;
  onSuccess?: (data: any) => void;
}

interface IErrors {
  message: string;
  field?: string;
}

export const useRequest = ({ url, method, body, onSuccess }: IUseRequest) => {
  const [errors, setErrors] = useState<IErrors[] | null>(null);

  const doRequest = async () => {
    setErrors(null);

    try {
      const response = await axios[method](url, body);

      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (err: any) {
      setErrors(err.response.data.errors);
    }
  };

  const grabErrors = (
    key: string,
    generalErrors = true,
  ): string | undefined => {
    if (!errors) return;
    const returnErrors: string[] = [];
    errors.forEach(({ message, field }) => {
      if ((generalErrors && !field) || key === field) {
        returnErrors.push(message);
      }
    });

    return returnErrors.join(', ');
  };

  return { doRequest, errors, grabErrors };
};
