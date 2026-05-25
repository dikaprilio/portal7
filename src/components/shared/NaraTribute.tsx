'use client';

import { useState } from 'react';
import { useKeyboardSequence } from '@/hooks/useKeyboardSequence';
import { X } from 'lucide-react';

export default function NaraTribute() {
  const [show, setShow] = useState(false);

  useKeyboardSequence(['n', 'a', 'r', 'a'], () => setShow(true));

  if (!show) return null;

  return (
    <div
      id="nara-tribute-overlay"
      style={{ display: 'flex', opacity: 1 }}
      onClick={(e) => {
        if (e.target === e.currentTarget) setShow(false);
      }}
    >
      <div className="tribute-modal" style={{ transform: 'scale(1)' }}>
        <button className="close-tribute" onClick={() => setShow(false)}>
          <X size={24} />
        </button>
        <div className="tribute-icon-wrapper">
          <svg
            className="tribute-sunflower"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="15" fill="#c0392b" />
            <g>
              {[...Array(12)].map((_, i) => (
                <path
                  key={i}
                  d="M50,50 Q65,30 50,20 Q35,30 50,50 Z"
                  fill="#f1c40f"
                  transform={`rotate(${i * 30} 50 50)`}
                />
              ))}
            </g>
          </svg>
        </div>
        <h2>In loving memory of Nisrina &apos;Nara&apos;</h2>
        <p className="tribute-role">
          Our sunshine and Head of the Portal 8 Competition Division
        </p>
        <p className="tribute-identity">KMN 61 SV IPB</p>
        <p className="tribute-message">
          Thank you for shining so brightly. Your light continues to inspire us.
        </p>
      </div>
    </div>
  );
}
