import React from 'react';
import { useCounter } from '../../hooks/useCounter';

interface StatCounterProps {
  end: number;
  label: string;
  suffix?: string;
  className?: string;
}

export const StatCounter: React.FC<StatCounterProps> = ({ end, label, suffix = '', className = '' }) => {
  const { count, countRef } = useCounter(end);
  return (
    <div ref={countRef} className={`text-center ${className}`}>
      <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
        {count}{suffix}
      </div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
};
