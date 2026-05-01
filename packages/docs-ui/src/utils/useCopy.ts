import { useEffect, useState } from 'react';

export const useCopy = () => {
  const [copying, setCopying] = useState(false);

  useEffect(() => {
    if (copying) {
      const timer = setTimeout(() => {
        setCopying(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copying]);

  const onCopyClick = async (content: string) => {
    if (!copying) {
      setCopying(true);
      await navigator.clipboard.writeText(content);
    }
  };

  return {
    copying,
    onCopyClick,
  };
};
