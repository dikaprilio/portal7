'use client';

import { useEffect, useState } from 'react';

export function useKeyboardSequence(sequence: string[], onMatch: () => void) {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === sequence[position]) {
        const nextPosition = position + 1;
        if (nextPosition === sequence.length) {
          onMatch();
          setPosition(0);
        } else {
          setPosition(nextPosition);
        }
      } else {
        setPosition(0);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [position, sequence, onMatch]);
}
