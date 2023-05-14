import React, { useEffect, useState } from 'react'

export default function useScrollPosition() {
  const [scrollPosition, setScrollPositin] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPositin(window.scrollY);
    }
    document.addEventListener("scroll", handleScroll);
  }, []);

  return scrollPosition;
}
