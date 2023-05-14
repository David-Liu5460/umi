import React, { useContext } from 'react';

const UserContext = React.createContext('hanmeimei');

export default function useUserHook() {
  const user = useContext(UserContext);
  return [user];
}
