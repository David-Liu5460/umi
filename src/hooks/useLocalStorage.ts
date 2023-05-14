import React, { useState, useEffect } from 'react'

export default function useLocalStorage(key: string) {
  const [name, setName] = useState(() => {
    const name = JSON.parse(window.localStorage.getItem(key));
    return name;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(name));
  });

  return [name, setName];
}
