import { useState, useEffect } from 'react';

export type Viewport = 'mobile' | 'tablet' | 'desktop';

export function useViewport(): Viewport {
  const classify = (): Viewport => {
    const w = window.innerWidth;
    return w < 768 ? 'mobile' : w < 1280 ? 'tablet' : 'desktop';
  };
  const [vp, setVp] = useState<Viewport>(classify);
  useEffect(() => {
    const update = () => setVp(classify());
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return vp;
}
