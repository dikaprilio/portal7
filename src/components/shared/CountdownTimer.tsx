'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

interface CountdownTimerProps {
  targetDate?: Date;
  labels?: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
}

export default function CountdownTimer({
  targetDate = new Date('2026-08-17T23:59:59'),
  labels,
}: CountdownTimerProps) {
  const t = useTranslations();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const labelDays = labels?.days ?? t('hero_countdown_hari');
  const labelHours = labels?.hours ?? t('hero_countdown_jam');
  const labelMinutes = labels?.minutes ?? t('hero_countdown_menit');
  const labelSeconds = labels?.seconds ?? t('hero_countdown_detik');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-timer">
      <span>
        <span>{String(timeLeft.days).padStart(2, '0')}</span>
        <small>{labelDays}</small>
      </span>
      <span>
        <span>{String(timeLeft.hours).padStart(2, '0')}</span>
        <small>{labelHours}</small>
      </span>
      <span>
        <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
        <small>{labelMinutes}</small>
      </span>
      <span>
        <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
        <small>{labelSeconds}</small>
      </span>
    </div>
  );
}
