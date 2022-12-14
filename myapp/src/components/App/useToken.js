import { useState } from 'react';

export default function useToken() {

  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    return tokenString;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };
  
  const deleteToken = userToken => {
    sessionStorage.removeItem('token');
  };

  return {
    setToken: saveToken,
    deleteToken: deleteToken,
    getToken: getToken,
    token
  }
  
}