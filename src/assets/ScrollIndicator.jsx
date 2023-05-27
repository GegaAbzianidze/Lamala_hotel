import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';

const ScrollIndicator = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed right-4 bottom-4 transition-opacity duration-500 ${scrollY > 0 ? 'opacity-0' : 'opacity-100'}`} style={{zIndex:10000}}>
      <span className="p-3 rounded-full block bg-MainGreen"><Icon icon="fluent:arrow-sort-down-20-regular" className=' text-white text-3xl '/></span>
    </div>
  );
};

export default ScrollIndicator;
